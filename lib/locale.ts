import { cookies } from "next/headers";
export async function getLocale(): Promise<"ar" | "en"> {
  return (await cookies()).get("mrrobot-language")?.value === "en"
    ? "en"
    : "ar";
}

export async function getPriceMode(): Promise<"retail" | "wholesale"> {
  return (await cookies()).get("mrrobot-order-mode")?.value === "wholesale"
    ? "wholesale"
    : "retail";
}
