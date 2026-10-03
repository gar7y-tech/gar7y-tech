import { products } from "@/data/products";
export type Item = { id: string; quantity: number };
const empty: Item[] = [];
let snapshot: Item[] = empty;
const listeners = new Set<() => void>();
const valid = (raw: unknown): Item[] =>
  Array.isArray(raw)
    ? raw
        .filter(
          (x): x is Item =>
            !!x &&
            typeof x === "object" &&
            "id" in x &&
            "quantity" in x &&
            products.some((p) => p.id === x.id) &&
            typeof x.quantity === "number" &&
            Number.isInteger(x.quantity) &&
            x.quantity > 0 &&
            x.quantity <= 99,
        )
        .slice(0, 12)
        .reduce<Item[]>((acc, x) => {
          if (!acc.some((i) => i.id === x.id))
            acc.push({ id: x.id, quantity: x.quantity });
          return acc;
        }, [])
    : [];
function read() {
  try {
    snapshot = valid(
      JSON.parse(localStorage.getItem("mrrobot-cart-v2") || "[]"),
    );
  } catch {
    snapshot = [];
  }
}
function onStorage(e: StorageEvent) {
  if (e.key === "mrrobot-cart-v2") {
    read();
    listeners.forEach((l) => l());
  }
}
export function subscribeCart(listener: () => void) {
  if (!listeners.size) {
    read();
    window.addEventListener("storage", onStorage);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) window.removeEventListener("storage", onStorage);
  };
}
export const getCart = () => snapshot;
export const serverCart = () => empty;
export function updateCart(update: (items: Item[]) => Item[]) {
  snapshot = valid(update(snapshot));
  try {
    localStorage.setItem("mrrobot-cart-v2", JSON.stringify(snapshot));
  } catch {}
  listeners.forEach((l) => l());
}
