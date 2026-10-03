// Public product facts and Omani retailer reference prices checked on 2026-09-30.
// Retail = reference × 0.90; wholesale trade orders = reference × 0.83. Never stacked.
// Availability, fulfilment and warranty are confirmed by MR ROBOT, never inherited from a retailer.
export const categories = [
  "الهواتف",
  "الساعات الذكية",
  "الصوتيات",
  "الشواحن والطاقة",
  "الإكسسوارات",
  "ألعاب الفيديو",
  "بطاقات الهدايا",
  "الألعاب أونلاين",
  "الأجهزة اللوحية",
  "الحواسيب المحمولة",
  "الشاشات",
  "ملحقات الكمبيوتر",
  "التخزين",
  "الشبكات",
  "الطابعات",
  "الكاميرات",
  "المنزل الذكي",
  "عروض الجملة",
] as const;
export const categoriesEn: Record<string, string> = {
  الهواتف: "Phones",
  "الساعات الذكية": "Smart watches",
  الصوتيات: "Audio",
  "الشواحن والطاقة": "Charging & power",
  الإكسسوارات: "Accessories",
  "ألعاب الفيديو": "Video games",
  "بطاقات الهدايا": "Gift cards",
  "الألعاب أونلاين": "Online games",
  "الأجهزة اللوحية": "Tablets",
  "الحواسيب المحمولة": "Laptops",
  "الشاشات": "Monitors",
  "ملحقات الكمبيوتر": "Computer accessories",
  "التخزين": "Storage",
  "الشبكات": "Networking",
  "الطابعات": "Printers",
  "الكاميرات": "Cameras",
  "المنزل الذكي": "Smart home",
  "عروض الجملة": "Wholesale",
};
export type Category = (typeof categories)[number];
export interface ProductTranslation {
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}
export interface Product extends ProductTranslation {
  id: string;
  slug: string;
  brand: string;
  category: Category;
  price: number;
  wholesalePrice: number;
  oldPrice?: number;
  images: string[];
  badge?: string;
  featured: boolean;
  availability: "unconfirmed";
  en: ProductTranslation;
  digital?: { ar: string; en: string };
  imageCaption?: { ar: string; en: string };
  pricingPolicy?: "discounted-reference" | "verified-reference" | "marketplace-reference";
  source: {
    name: string;
    url: string;
    price: number;
    currency: "OMR" | "USD";
    retrievedAt: string;
    imageUrl: string;
    referenceOMR?: number;
    fxRate?: number;
    fxPair?: "USD/OMR";
    listingId?: string;
    seller?: string;
    sellerRating?: string;
    sellerOrders?: string;
    validUntil?: string;
  };
}
export const products: Product[] = [
  {
    "id": "iphone-18-pro-256gb-silver",
    "slug": "iphone-18-pro-256gb-silver",
    "name": "هاتف iPhone 18 Pro — 256GB فضي",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 501.312,
    "oldPrice": 557.013,
    "wholesalePrice": 462.321,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCVGJOdEdsYjE3KzExOGFjT0NXdW5CRXlFVTNWQ2NHZnVQZ1ZHVERRSkREclQ5NVJ4OStiQklybHZqYkJwOUI0UWdxbzNTY3U5ODZDSkhYT1hNS1JHaWNmOVR5UGFsc2xtOXNhVml5ZmhaTkg"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.3 بوصة",
      "A20 Pro",
      "256GB"
    ],
    "specifications": {
      "الشاشة": "6.3 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "256GB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro — 256GB Silver",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.3 inches",
        "A20 Pro",
        "256GB"
      ],
      "specifications": {
        "Display": "6.3 inches",
        "Processor": "A20 Pro",
        "Storage": "256GB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-256gb-silver-middle-east-version-pre-order/",
      "price": 557.013,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCVGJOdEdsYjE3KzExOGFjT0NXdW5CRXlFVTNWQ2NHZnVQZ1ZHVERRSkREclQ5NVJ4OStiQklybHZqYkJwOUI0UWdxbzNTY3U5ODZDSkhYT1hNS1JHaWNmOVR5UGFsc2xtOXNhVml5ZmhaTkg"
    }
  },
  {
    "id": "iphone-18-pro-512gb-black",
    "slug": "iphone-18-pro-512gb-black",
    "name": "هاتف iPhone 18 Pro — 512GB أسود",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 585.109,
    "oldPrice": 650.121,
    "wholesalePrice": 539.6,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCWEQvUEQ2K0RlZDNJelh6T1hiakdBdytYcDJJakhmeWdzWGE3eWZweldlbU01ZlZDa0xRSGNsZGN2cGtrRCtsV0tMSEdWSm02WG9JS0VxaEpJQnZwSFF4aU04bVBaVGpXenUzcE1tZ0JTTWk"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.3 بوصة",
      "A20 Pro",
      "512GB"
    ],
    "specifications": {
      "الشاشة": "6.3 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "512GB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro — 512GB Black",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.3 inches",
        "A20 Pro",
        "512GB"
      ],
      "specifications": {
        "Display": "6.3 inches",
        "Processor": "A20 Pro",
        "Storage": "512GB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-512gb-black-middle-east-version-pre-order/",
      "price": 650.121,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCWEQvUEQ2K0RlZDNJelh6T1hiakdBdytYcDJJakhmeWdzWGE3eWZweldlbU01ZlZDa0xRSGNsZGN2cGtrRCtsV0tMSEdWSm02WG9JS0VxaEpJQnZwSFF4aU04bVBaVGpXenUzcE1tZ0JTTWk"
    }
  },
  {
    "id": "iphone-18-pro-1tb-silver",
    "slug": "iphone-18-pro-1tb-silver",
    "name": "هاتف iPhone 18 Pro — 1TB فضي",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 751.958,
    "oldPrice": 835.509,
    "wholesalePrice": 693.472,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCVGJOdEdsYjE3KzExOGFjT0NXdW5CRXlFVTNWQ2NHZnVQZ1ZHVERRSkREclQ5NVJ4OStiQklybHZqYkJwOUI0UWdxbzNTY3U5ODZDSkhYT1hNS1JHaWNmOVR5UGFsc2xtOXNhVml5ZmhaTkg"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.3 بوصة",
      "A20 Pro",
      "1TB"
    ],
    "specifications": {
      "الشاشة": "6.3 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "1TB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro — 1TB Silver",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.3 inches",
        "A20 Pro",
        "1TB"
      ],
      "specifications": {
        "Display": "6.3 inches",
        "Processor": "A20 Pro",
        "Storage": "1TB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-1tb-silver-middle-east-version/",
      "price": 835.509,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCVGJOdEdsYjE3KzExOGFjT0NXdW5CRXlFVTNWQ2NHZnVQZ1ZHVERRSkREclQ5NVJ4OStiQklybHZqYkJwOUI0UWdxbzNTY3U5ODZDSkhYT1hNS1JHaWNmOVR5UGFsc2xtOXNhVml5ZmhaTkg"
    }
  },
  {
    "id": "iphone-18-pro-2tb-silver",
    "slug": "iphone-18-pro-2tb-silver",
    "name": "هاتف iPhone 18 Pro — 2TB فضي",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 1002.997,
    "oldPrice": 1114.441,
    "wholesalePrice": 924.986,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCVGJOdEdsYjE3KzExOGFjT0NXdW5CRXlFVTNWQ2NHZnVQZ1ZHVERRSkREclQ5NVJ4OStiQklybHZqYkJwOUI0UWdxbzNTY3U5ODZDSkhYT1hNS1JHaWNmOVR5UGFsc2xtOXNhVml5ZmhaTkg"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.3 بوصة",
      "A20 Pro",
      "2TB"
    ],
    "specifications": {
      "الشاشة": "6.3 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "2TB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro — 2TB Silver",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.3 inches",
        "A20 Pro",
        "2TB"
      ],
      "specifications": {
        "Display": "6.3 inches",
        "Processor": "A20 Pro",
        "Storage": "2TB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-2tb-silver-middle-east-version/",
      "price": 1114.441,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=ODB3TEdtbk8ybkd3clM3dWVML3VCVGJOdEdsYjE3KzExOGFjT0NXdW5CRXlFVTNWQ2NHZnVQZ1ZHVERRSkREclQ5NVJ4OStiQklybHZqYkJwOUI0UWdxbzNTY3U5ODZDSkhYT1hNS1JHaWNmOVR5UGFsc2xtOXNhVml5ZmhaTkg"
    }
  },
  {
    "id": "iphone-18-pro-max-256gb-black",
    "slug": "iphone-18-pro-max-256gb-black",
    "name": "هاتف iPhone 18 Pro Max — 256GB أسود",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 540.747,
    "oldPrice": 600.83,
    "wholesalePrice": 498.689,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNmxIMGwrWFVjeE1VUlRMRWVWaXVleHNjcXQ1U2FBY2RzWU80SEN4Z1NYZXA4TndFSGFWdWZMa21CRXlrUm45elpxZTk0czYvTGlFaFJ6MUo4NytKelc"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.9 بوصة",
      "A20 Pro",
      "256GB"
    ],
    "specifications": {
      "الشاشة": "6.9 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "256GB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro Max — 256GB Black",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.9 inches",
        "A20 Pro",
        "256GB"
      ],
      "specifications": {
        "Display": "6.9 inches",
        "Processor": "A20 Pro",
        "Storage": "256GB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-max-256gb-black-middle-east-version/",
      "price": 600.83,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNmxIMGwrWFVjeE1VUlRMRWVWaXVleHNjcXQ1U2FBY2RzWU80SEN4Z1NYZXA4TndFSGFWdWZMa21CRXlrUm45elpxZTk0czYvTGlFaFJ6MUo4NytKelc"
    }
  },
  {
    "id": "iphone-18-pro-max-512gb-black",
    "slug": "iphone-18-pro-max-512gb-black",
    "name": "هاتف iPhone 18 Pro Max — 512GB أسود",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 624.172,
    "oldPrice": 693.524,
    "wholesalePrice": 575.625,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNmxIMGwrWFVjeE1VUlRMRWVWaXVleHNjcXQ1U2FBY2RzWU80SEN4Z1NYZXA4TndFSGFWdWZMa21CRXlrUm45elpxZTk0czYvTGlFaFJ6MUo4NytKelc"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.9 بوصة",
      "A20 Pro",
      "512GB"
    ],
    "specifications": {
      "الشاشة": "6.9 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "512GB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro Max — 512GB Black",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.9 inches",
        "A20 Pro",
        "512GB"
      ],
      "specifications": {
        "Display": "6.9 inches",
        "Processor": "A20 Pro",
        "Storage": "512GB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-max-512gb-black-middle-east-version-pre-order/",
      "price": 693.524,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-black-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNmxIMGwrWFVjeE1VUlRMRWVWaXVleHNjcXQ1U2FBY2RzWU80SEN4Z1NYZXA4TndFSGFWdWZMa21CRXlrUm45elpxZTk0czYvTGlFaFJ6MUo4NytKelc"
    }
  },
  {
    "id": "iphone-18-pro-max-1tb-silver",
    "slug": "iphone-18-pro-max-1tb-silver",
    "name": "هاتف iPhone 18 Pro Max — 1TB فضي",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 791.393,
    "oldPrice": 879.326,
    "wholesalePrice": 729.841,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNWtvNWRUSnBraGdtbVpoaEhCcStEZ1JIMnJUYkhxeFlQUFF6U1JnK1dZZmROL1VCcUxMZGhIeWpHS1Y3Y0ZmQnB1TDcrSFk1dTh4UW5LRWFTUk84MUg"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.9 بوصة",
      "A20 Pro",
      "1TB"
    ],
    "specifications": {
      "الشاشة": "6.9 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "1TB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro Max — 1TB Silver",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.9 inches",
        "A20 Pro",
        "1TB"
      ],
      "specifications": {
        "Display": "6.9 inches",
        "Processor": "A20 Pro",
        "Storage": "1TB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-max-1tb-silver-middle-east-version-pre-order/",
      "price": 879.326,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNWtvNWRUSnBraGdtbVpoaEhCcStEZ1JIMnJUYkhxeFlQUFF6U1JnK1dZZmROL1VCcUxMZGhIeWpHS1Y3Y0ZmQnB1TDcrSFk1dTh4UW5LRWFTUk84MUg"
    }
  },
  {
    "id": "iphone-18-pro-max-2tb-silver",
    "slug": "iphone-18-pro-max-2tb-silver",
    "name": "هاتف iPhone 18 Pro Max — 2TB فضي",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 1042.05,
    "oldPrice": 1157.833,
    "wholesalePrice": 961.001,
    "images": [
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNWtvNWRUSnBraGdtbVpoaEhCcStEZ1JIMnJUYkhxeFlQUFF6U1JnK1dZZmROL1VCcUxMZGhIeWpHS1Y3Y0ZmQnB1TDcrSFk1dTh4UW5LRWFTUk84MUg"
    ],
    "shortDescription": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "description": "شريحة A20 Pro وكاميرا رئيسية بدقة 48MP بفتحة عدسة متغيرة. إصدار الشرق الأوسط بشريحتي eSIM.",
    "features": [
      "6.9 بوصة",
      "A20 Pro",
      "2TB"
    ],
    "specifications": {
      "الشاشة": "6.9 بوصة",
      "المعالج": "A20 Pro",
      "التخزين": "2TB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الشريحة": "Dual eSIM"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "iPhone 18 Pro Max — 2TB Silver",
      "shortDescription": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "description": "A20 Pro and a 48MP variable-aperture main camera. Middle East version with dual eSIM.",
      "features": [
        "6.9 inches",
        "A20 Pro",
        "2TB"
      ],
      "specifications": {
        "Display": "6.9 inches",
        "Processor": "A20 Pro",
        "Storage": "2TB",
        "Rear cameras": "48 + 48 + 48MP",
        "Chip": "Dual eSIM"
      }
    },
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-18-pro-max-2tb-silver-middle-east-version/",
      "price": 1157.833,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-max-finish-select-silver-202609?wid=940&hei=1112&fmt=png-alpha&.v=UmkydCsrWUVqOXF2VEM2dzB6cklhWUQ2cmRnWCtSNmVDd2t4cWxWSnIvNWtvNWRUSnBraGdtbVpoaEhCcStEZ1JIMnJUYkhxeFlQUFF6U1JnK1dZZmROL1VCcUxMZGhIeWpHS1Y3Y0ZmQnB1TDcrSFk1dTh4UW5LRWFTUk84MUg"
    }
  },
  {
    "id": "iphone-17-pro-256-silver",
    "slug": "iphone-17-pro-256-silver",
    "name": "هاتف iPhone 17 Pro — 256GB فضي",
    "brand": "Apple",
    "category": "الهواتف",
    "price": 422.1,
    "oldPrice": 469,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/iphone_17_pro_silver_1"
    ],
    "shortDescription": "أداء A19 Pro وكاميرات ثلاثية لتفاصيل تستحق الاحتفاظ بها.",
    "description": "أداء A19 Pro وكاميرات ثلاثية لتفاصيل تستحق الاحتفاظ بها. الشاشة: 6.3 بوصة · المعالج: A19 Pro · التخزين: 256GB.",
    "features": [
      "6.3 بوصة",
      "A19 Pro",
      "256GB"
    ],
    "specifications": {
      "الشاشة": "6.3 بوصة",
      "المعالج": "A19 Pro",
      "التخزين": "256GB",
      "الكاميرات الخلفية": "48 + 48 + 48MP",
      "الإصدار": "الشرق الأوسط"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-iphone-17-pro-256gb-silver-middle-east-version-with-facetime/",
      "price": 469,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/iphone_17_pro_silver_1"
    },
    "en": {
      "name": "iPhone 17 Pro — 256GB Silver",
      "shortDescription": "A19 Pro performance and three rear cameras in a compact Pro phone.",
      "description": "A19 Pro performance and three rear cameras in a compact Pro phone. Display: 6.3 inches · Processor: A19 Pro · Storage: 256GB",
      "features": [
        "6.3 inches",
        "A19 Pro",
        "256GB"
      ],
      "specifications": {
        "Display": "6.3 inches",
        "Processor": "A19 Pro",
        "Storage": "256GB",
        "Rear cameras": "48 + 48 + 48MP",
        "Version": "Middle East"
      }
    },
    "wholesalePrice": 389.27
  },
  {
    "id": "galaxy-a16-4g-grey",
    "slug": "galaxy-a16-4g-grey",
    "name": "هاتف Galaxy A16 4G — 128GB رمادي",
    "brand": "Samsung",
    "category": "الهواتف",
    "price": 55.35,
    "oldPrice": 61.5,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400908931_1"
    ],
    "shortDescription": "شاشة واسعة وبطارية كبيرة، لاستخدامك اليومي بسهولة.",
    "description": "شاشة واسعة وبطارية كبيرة، لاستخدامك اليومي بسهولة. الشاشة: 6.7 بوصة Super AMOLED · التخزين: 128GB · الذاكرة: 6GB.",
    "features": [
      "6.7 بوصة Super AMOLED",
      "128GB",
      "6GB"
    ],
    "specifications": {
      "الشاشة": "6.7 بوصة Super AMOLED",
      "التخزين": "128GB",
      "الذاكرة": "6GB",
      "البطارية": "5000mAh",
      "الشبكة": "4G"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/samsung-galaxy-a16-128gb-light-grey-4g-smartphone/",
      "price": 61.5,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400908931_1"
    },
    "en": {
      "name": "Galaxy A16 4G — 128GB Light Grey",
      "shortDescription": "A wide Super AMOLED display and a 5000mAh battery for everyday use.",
      "description": "A wide Super AMOLED display and a 5000mAh battery for everyday use. Display: 6.7 inches Super AMOLED · Storage: 128GB · Memory: 6GB",
      "features": [
        "6.7 inches Super AMOLED",
        "128GB",
        "6GB"
      ],
      "specifications": {
        "Display": "6.7 inches Super AMOLED",
        "Storage": "128GB",
        "Memory": "6GB",
        "Battery": "5000mAh",
        "Network": "4G"
      }
    },
    "wholesalePrice": 51.045
  },
  {
    "id": "galaxy-a16-5g-black",
    "slug": "galaxy-a16-5g-black",
    "name": "هاتف Galaxy A16 5G — 128GB أزرق أسود",
    "brand": "Samsung",
    "category": "الهواتف",
    "price": 63,
    "oldPrice": 70,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400905569_1"
    ],
    "shortDescription": "اتصال 5G وشاشة AMOLED لتبقى قريبًا من كل ما يهمك.",
    "description": "اتصال 5G وشاشة AMOLED لتبقى قريبًا من كل ما يهمك. الشاشة: 6.7 بوصة Super AMOLED · التخزين: 128GB · الذاكرة: 4GB.",
    "features": [
      "6.7 بوصة Super AMOLED",
      "128GB",
      "4GB"
    ],
    "specifications": {
      "الشاشة": "6.7 بوصة Super AMOLED",
      "التخزين": "128GB",
      "الذاكرة": "4GB",
      "البطارية": "5000mAh",
      "الشبكة": "5G"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/samsung-galaxy-a16-128gb-blue-black-5g-smartphone/",
      "price": 70,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400905569_1"
    },
    "en": {
      "name": "Galaxy A16 5G — 128GB Blue Black",
      "shortDescription": "5G connectivity with a 6.7-inch Super AMOLED display.",
      "description": "5G connectivity with a 6.7-inch Super AMOLED display. Display: 6.7 inches Super AMOLED · Storage: 128GB · Memory: 4GB",
      "features": [
        "6.7 inches Super AMOLED",
        "128GB",
        "4GB"
      ],
      "specifications": {
        "Display": "6.7 inches Super AMOLED",
        "Storage": "128GB",
        "Memory": "4GB",
        "Battery": "5000mAh",
        "Network": "5G"
      }
    },
    "wholesalePrice": 58.1
  },
  {
    "id": "watch-fit-3-black",
    "slug": "watch-fit-3-black",
    "name": "ساعة WATCH FIT 3 — أسود",
    "brand": "Huawei",
    "category": "الساعات الذكية",
    "price": 40.41,
    "oldPrice": 44.9,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400884981_1"
    ],
    "shortDescription": "ساعة خفيفة بشاشة واضحة وتتبّع للتمارين اليومية.",
    "description": "ساعة خفيفة بشاشة واضحة وتتبّع للتمارين اليومية. الشاشة: 1.82 بوصة AMOLED · الدقة: 480 × 408 · الاتصال: Bluetooth 5.2.",
    "features": [
      "1.82 بوصة AMOLED",
      "480 × 408",
      "Bluetooth 5.2"
    ],
    "specifications": {
      "الشاشة": "1.82 بوصة AMOLED",
      "الدقة": "480 × 408",
      "الاتصال": "Bluetooth 5.2",
      "مقاومة الماء": "5 ATM",
      "الموديل": "SLO-B09"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/huawei-slo-b09-watch-fit-3-smartwatch-black/",
      "price": 44.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400884981_1"
    },
    "en": {
      "name": "WATCH FIT 3 — Black",
      "shortDescription": "A lightweight AMOLED smartwatch for everyday activity tracking.",
      "description": "A lightweight AMOLED smartwatch for everyday activity tracking. Display: 1.82 inches AMOLED · Resolution: 480 × 408 · Connectivity: Bluetooth 5.2",
      "features": [
        "1.82 inches AMOLED",
        "480 × 408",
        "Bluetooth 5.2"
      ],
      "specifications": {
        "Display": "1.82 inches AMOLED",
        "Resolution": "480 × 408",
        "Connectivity": "Bluetooth 5.2",
        "Water resistance": "5 ATM",
        "Model": "SLO-B09"
      }
    },
    "wholesalePrice": 37.267
  },
  {
    "id": "watch-fit-3-grey",
    "slug": "watch-fit-3-grey",
    "name": "ساعة WATCH FIT 3 — رمادي",
    "brand": "Huawei",
    "category": "الساعات الذكية",
    "price": 54.81,
    "oldPrice": 60.9,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400884985_1"
    ],
    "shortDescription": "تصميم رفيع وتاج دوّار للوصول السريع إلى وظائف الساعة.",
    "description": "تصميم رفيع وتاج دوّار للوصول السريع إلى وظائف الساعة. الشاشة: AMOLED · الدقة: 480 × 408 · الاتصال: Bluetooth 5.2.",
    "features": [
      "AMOLED",
      "480 × 408",
      "Bluetooth 5.2"
    ],
    "specifications": {
      "الشاشة": "AMOLED",
      "الدقة": "480 × 408",
      "الاتصال": "Bluetooth 5.2",
      "السماكة": "9.9mm",
      "الموديل": "SLO-B19"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/huawei-slo-b09-watch-fit-3-smartwatch-space-grey/",
      "price": 60.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400884985_1"
    },
    "en": {
      "name": "WATCH FIT 3 — Grey",
      "shortDescription": "A slim smartwatch with a rotating crown and Bluetooth connectivity.",
      "description": "A slim smartwatch with a rotating crown and Bluetooth connectivity. Display: AMOLED · Resolution: 480 × 408 · Connectivity: Bluetooth 5.2",
      "features": [
        "AMOLED",
        "480 × 408",
        "Bluetooth 5.2"
      ],
      "specifications": {
        "Display": "AMOLED",
        "Resolution": "480 × 408",
        "Connectivity": "Bluetooth 5.2",
        "Thickness": "9.9mm",
        "Model": "SLO-B19"
      }
    },
    "wholesalePrice": 50.547
  },
  {
    "id": "airpods-4",
    "slug": "airpods-4",
    "name": "سماعة AirPods 4",
    "brand": "Apple",
    "category": "الصوتيات",
    "price": 48.825,
    "oldPrice": 54.25,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400900642_1"
    ],
    "shortDescription": "صوت مكاني ومكالمات أوضح في تصميم مريح وخفيف.",
    "description": "صوت مكاني ومكالمات أوضح في تصميم مريح وخفيف. الشريحة: H2 · الصوت: صوت مكاني مخصص · المكالمات: Voice Isolation.",
    "features": [
      "H2",
      "صوت مكاني مخصص",
      "Voice Isolation"
    ],
    "specifications": {
      "الشريحة": "H2",
      "الصوت": "صوت مكاني مخصص",
      "المكالمات": "Voice Isolation",
      "إلغاء الضوضاء النشط": "غير مدعوم في هذا الإصدار",
      "اللون": "أبيض"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/apple-airpods-4/",
      "price": 54.25,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400900642_1"
    },
    "en": {
      "name": "AirPods 4",
      "shortDescription": "Personalised Spatial Audio and Voice Isolation. This version does not include ANC.",
      "description": "Personalised Spatial Audio and Voice Isolation. This version does not include ANC. Chip: H2 · Audio: Personalised Spatial Audio · Calls: Voice Isolation",
      "features": [
        "H2",
        "Personalised Spatial Audio",
        "Voice Isolation"
      ],
      "specifications": {
        "Chip": "H2",
        "Audio": "Personalised Spatial Audio",
        "Calls": "Voice Isolation",
        "Active noise cancellation": "Not supported in this version",
        "Colour": "White"
      }
    },
    "wholesalePrice": 45.028
  },
  {
    "id": "jbl-wave-buds-2-white",
    "slug": "jbl-wave-buds-2-white",
    "name": "سماعة Wave Buds 2 — أبيض",
    "brand": "JBL",
    "category": "الصوتيات",
    "price": 25.421,
    "oldPrice": 28.245,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S500917893_1"
    ],
    "shortDescription": "اختر ما تسمعه مع إلغاء الضوضاء والصوت القوي من JBL.",
    "description": "اختر ما تسمعه مع إلغاء الضوضاء والصوت القوي من JBL. إلغاء الضوضاء: ANC مع Smart Ambient · الاتصال: Bluetooth 5.3 · المشغّلات: 8mm.",
    "features": [
      "ANC مع Smart Ambient",
      "Bluetooth 5.3",
      "8mm"
    ],
    "specifications": {
      "إلغاء الضوضاء": "ANC مع Smart Ambient",
      "الاتصال": "Bluetooth 5.3",
      "المشغّلات": "8mm",
      "الميكروفونات": "4",
      "مقاومة السماعات": "IP54"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/jbl-wave-buds-2-wireless-earbuds-white/",
      "price": 28.245,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S500917893_1"
    },
    "en": {
      "name": "Wave Buds 2 — White",
      "shortDescription": "Active noise cancellation, Smart Ambient and JBL audio.",
      "description": "Active noise cancellation, Smart Ambient and JBL audio. Noise cancellation: ANC with Smart Ambient · Connectivity: Bluetooth 5.3 · Drivers: 8mm",
      "features": [
        "ANC with Smart Ambient",
        "Bluetooth 5.3",
        "8mm"
      ],
      "specifications": {
        "Noise cancellation": "ANC with Smart Ambient",
        "Connectivity": "Bluetooth 5.3",
        "Drivers": "8mm",
        "Microphones": "4",
        "Earbud resistance": "IP54"
      }
    },
    "wholesalePrice": 23.443
  },
  {
    "id": "jbl-go-4-black",
    "slug": "jbl-go-4-black",
    "name": "مكبر صوت Go 4 — أسود",
    "brand": "JBL",
    "category": "الصوتيات",
    "price": 16.916,
    "oldPrice": 18.795,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400887603_2"
    ],
    "shortDescription": "صوت محمول بحجم صغير، للبيت ولخارج البيت.",
    "description": "صوت محمول بحجم صغير، للبيت ولخارج البيت. الاتصال: Bluetooth · مقاومة الماء والغبار: IP67 · التشغيل: حتى 7 ساعات بحسب الاستخدام.",
    "features": [
      "Bluetooth",
      "IP67",
      "حتى 7 ساعات بحسب الاستخدام"
    ],
    "specifications": {
      "الاتصال": "Bluetooth",
      "مقاومة الماء والغبار": "IP67",
      "التشغيل": "حتى 7 ساعات بحسب الاستخدام",
      "الصوت": "JBL Pro Sound",
      "اللون": "أسود"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/jbl-go-4-ultra-portable-bluetooth-speaker-black/",
      "price": 18.795,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S400887603_2"
    },
    "en": {
      "name": "Go 4 — Black",
      "shortDescription": "Compact portable Bluetooth audio with IP67 water and dust resistance.",
      "description": "Compact portable Bluetooth audio with IP67 water and dust resistance. Connectivity: Bluetooth · Water & dust resistance: IP67 · Playback: Up to 7 hours, depending on use",
      "features": [
        "Bluetooth",
        "IP67",
        "Up to 7 hours, depending on use"
      ],
      "specifications": {
        "Connectivity": "Bluetooth",
        "Water & dust resistance": "IP67",
        "Playback": "Up to 7 hours, depending on use",
        "Audio": "JBL Pro Sound",
        "Colour": "Black"
      }
    },
    "wholesalePrice": 15.6
  },
  {
    "id": "anker-nano-power-10k",
    "slug": "anker-nano-power-10k",
    "name": "بطارية Nano — 10000mAh / 45W",
    "brand": "Anker",
    "category": "الشواحن والطاقة",
    "price": 17.91,
    "oldPrice": 19.9,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S600962139_1"
    ],
    "shortDescription": "طاقة معك في كل مكان وكابل مدمج يجعل الشحن أسهل.",
    "description": "طاقة معك في كل مكان وكابل مدمج يجعل الشحن أسهل. السعة: 10000mAh · الخرج: حتى 45W عبر USB-C · الدخل: حتى 30W.",
    "features": [
      "10000mAh",
      "حتى 45W عبر USB-C",
      "حتى 30W"
    ],
    "specifications": {
      "السعة": "10000mAh",
      "الخرج": "حتى 45W عبر USB-C",
      "الدخل": "حتى 30W",
      "الكابل": "USB-C مدمج قابل للسحب",
      "الموديل": "A1638H11"
    },
    "badge": "أقل 10%",
    "featured": false,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/anker-nano-power-bank-10000mah-black-a1638h11/",
      "price": 19.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S600962139_1"
    },
    "en": {
      "name": "Nano Power Bank — 10000mAh / 45W",
      "shortDescription": "Portable power with a built-in retractable USB-C cable.",
      "description": "Portable power with a built-in retractable USB-C cable. Capacity: 10000mAh · Output: Up to 45W via USB-C · Input: Up to 30W",
      "features": [
        "10000mAh",
        "Up to 45W via USB-C",
        "Up to 30W"
      ],
      "specifications": {
        "Capacity": "10000mAh",
        "Output": "Up to 45W via USB-C",
        "Input": "Up to 30W",
        "Cable": "USB-C Built-in retractable",
        "Model": "A1638H11"
      }
    },
    "wholesalePrice": 16.517
  },
  {
    "id": "anker-nano-45w",
    "slug": "anker-nano-45w",
    "name": "شاحن Nano — 45W أسود",
    "brand": "Anker",
    "category": "الشواحن والطاقة",
    "price": 8.01,
    "oldPrice": 8.9,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S500941144_1"
    ],
    "shortDescription": "شاحن صغير بقدرة 45W لأجهزة USB-C المتوافقة.",
    "description": "شاحن صغير بقدرة 45W لأجهزة USB-C المتوافقة. القدرة: 45W · المنفذ: USB-C · تقنية الشحن: Power Delivery / GaN.",
    "features": [
      "45W",
      "USB-C",
      "Power Delivery / GaN"
    ],
    "specifications": {
      "القدرة": "45W",
      "المنفذ": "USB-C",
      "تقنية الشحن": "Power Delivery / GaN",
      "دخل الكهرباء": "100–240V",
      "الموديل": "A2692K11"
    },
    "badge": "أقل 10%",
    "featured": false,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/anker-nano-charger-45w-black-a2692k11/",
      "price": 8.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S500941144_1"
    },
    "en": {
      "name": "Nano Charger — 45W",
      "shortDescription": "Compact USB-C charging, up to 45W with compatible devices.",
      "description": "Compact USB-C charging, up to 45W with compatible devices. Power: 45W · Port: USB-C · Charging technology: Power Delivery / GaN",
      "features": [
        "45W",
        "USB-C",
        "Power Delivery / GaN"
      ],
      "specifications": {
        "Power": "45W",
        "Port": "USB-C",
        "Charging technology": "Power Delivery / GaN",
        "Input voltage": "100–240V",
        "Model": "A2692K11"
      }
    },
    "wholesalePrice": 7.387
  },
  {
    "id": "anker-zolo-18m",
    "slug": "anker-zolo-18m",
    "name": "كابل Zolo USB-C — 1.8 متر",
    "brand": "Anker",
    "category": "الإكسسوارات",
    "price": 4.41,
    "oldPrice": 4.9,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S600965987_1"
    ],
    "shortDescription": "كابل مضفّر للشحن ونقل البيانات، بطول مريح.",
    "description": "كابل مضفّر للشحن ونقل البيانات، بطول مريح. الطول: 1.8 متر · المنافذ: USB-C إلى USB-C · القدرة: حتى 240W مع الأجهزة المتوافقة.",
    "features": [
      "1.8 متر",
      "USB-C إلى USB-C",
      "حتى 240W مع الأجهزة المتوافقة"
    ],
    "specifications": {
      "الطول": "1.8 متر",
      "المنافذ": "USB-C إلى USB-C",
      "القدرة": "حتى 240W مع الأجهزة المتوافقة",
      "نقل البيانات": "480Mbps",
      "الموديل": "A8060H12"
    },
    "badge": "أقل 10%",
    "featured": false,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/anker-zolo-usb-c-to-usb-c-cable-1-8m-black-a8060h12/",
      "price": 4.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S600965987_1"
    },
    "en": {
      "name": "Zolo USB-C Cable — 1.8m",
      "shortDescription": "USB-C cable supporting up to 240W with compatible charging equipment.",
      "description": "USB-C cable supporting up to 240W with compatible charging equipment. Length: 1.8m · Ports: USB-C to USB-C · Power: Up to 240W with compatible devices",
      "features": [
        "1.8m",
        "USB-C to USB-C",
        "Up to 240W with compatible devices"
      ],
      "specifications": {
        "Length": "1.8m",
        "Ports": "USB-C to USB-C",
        "Power": "Up to 240W with compatible devices",
        "Data transfer": "480Mbps",
        "Model": "A8060H12"
      }
    },
    "wholesalePrice": 4.067
  },
  {
    "id": "smartix-iphone-air-black",
    "slug": "smartix-iphone-air-black",
    "name": "غطاء سيليكون iPhone Air — أسود",
    "brand": "Smartix",
    "category": "الإكسسوارات",
    "price": 10.8,
    "oldPrice": 12,
    "images": [
      "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S500947313_1"
    ],
    "shortDescription": "ملمس ناعم وحواف مرتفعة لحماية الكاميرا اليومية.",
    "description": "ملمس ناعم وحواف مرتفعة لحماية الكاميرا اليومية. التوافق: iPhone Air فقط · الخامة: سيليكون · الشحن المغناطيسي: متوافق مع MagSafe.",
    "features": [
      "iPhone Air فقط",
      "سيليكون",
      "متوافق مع MagSafe"
    ],
    "specifications": {
      "التوافق": "iPhone Air فقط",
      "الخامة": "سيليكون",
      "الشحن المغناطيسي": "متوافق مع MagSafe",
      "الحماية": "حافة مرتفعة حول الكاميرا",
      "الموديل": "SMC17ABK"
    },
    "badge": "أقل 10%",
    "featured": false,
    "availability": "unconfirmed",
    "source": {
      "name": "Sharaf DG Oman",
      "url": "https://oman.sharafdg.com/product/smartix-silicone-case-black-iphone-17-air-smc17abk/",
      "price": 12,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://pimcdn.sharafdg.com/cdn-cgi/image/width%3D900%2Cheight%3D900%2Cfit%3Dpad%2Cformat%3Dwebp%2Cquality%3D85/images/S500947313_1"
    },
    "en": {
      "name": "Magnetic Silicone Case — iPhone Air / Black",
      "shortDescription": "A silicone magnetic case specifically for iPhone Air.",
      "description": "A silicone magnetic case specifically for iPhone Air. Compatibility: iPhone Air only · Material: Silicone · Magnetic charging: MagSafe compatible",
      "features": [
        "iPhone Air only",
        "Silicone",
        "MagSafe compatible"
      ],
      "specifications": {
        "Compatibility": "iPhone Air only",
        "Material": "Silicone",
        "Magnetic charging": "MagSafe compatible",
        "Protection": "Raised camera edge",
        "Model": "SMC17ABK"
      }
    },
    "wholesalePrice": 9.96
  },
  {
    "id": "ps5-slim-disc",
    "slug": "ps5-slim-disc",
    "name": "جهاز PlayStation 5 Slim — Disc",
    "brand": "Sony",
    "category": "ألعاب الفيديو",
    "price": 239.31,
    "oldPrice": 265.9,
    "wholesalePrice": 220.697,
    "images": [
      "https://www.eros.ae/media/catalog/product/cache/0a7dd086897ebf7d858113abe1d65194/s/o/sony_ps5slim_2_.jpg"
    ],
    "shortDescription": "جهاز PS5 بتصميم Slim وقارئ أقراص. الحامل العمودي يُباع منفصلًا.",
    "description": "جهاز PS5 بتصميم Slim وقارئ أقراص. الحامل العمودي يُباع منفصلًا.",
    "features": [
      "PS5",
      "قارئ أقراص Blu-ray",
      "Slim"
    ],
    "specifications": {
      "المنصة": "PS5",
      "النوع": "قارئ أقراص Blu-ray",
      "النسخة": "Slim"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "PlayStation 5 Slim — Disc",
      "shortDescription": "PS5 Slim with a disc drive. The vertical stand is sold separately.",
      "description": "PS5 Slim with a disc drive. The vertical stand is sold separately.",
      "features": [
        "PS5",
        "Blu-ray disc drive",
        "Slim"
      ],
      "specifications": {
        "Platform": "PS5",
        "Type": "Blu-ray disc drive",
        "Edition": "Slim"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/playstation-5-slim-disc-console-official",
      "price": 265.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://www.eros.ae/media/catalog/product/cache/0a7dd086897ebf7d858113abe1d65194/s/o/sony_ps5slim_2_.jpg"
    }
  },
  {
    "id": "switch-2-mario-kart",
    "slug": "switch-2-mario-kart",
    "name": "جهاز Switch 2 — باقة Mario Kart World",
    "brand": "Nintendo",
    "category": "ألعاب الفيديو",
    "price": 229.5,
    "oldPrice": 255,
    "wholesalePrice": 211.65,
    "images": [
      "https://www.eros.ae/media/catalog/product/cache/0a7dd086897ebf7d858113abe1d65194/b/9/b95150fbb366b55d91be_1.jpg"
    ],
    "shortDescription": "جهاز نينتندو الهجين مع لعبة Mario Kart World. شاشة 1080p ودعم HDR10.",
    "description": "جهاز نينتندو الهجين مع لعبة Mario Kart World. شاشة 1080p ودعم HDR10.",
    "features": [
      "7.9 بوصة LCD",
      "256GB",
      "Switch 2 + Mario Kart World"
    ],
    "specifications": {
      "الشاشة": "7.9 بوصة LCD",
      "التخزين": "256GB",
      "المحتويات": "Switch 2 + Mario Kart World"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "Switch 2 — Mario Kart World Bundle",
      "shortDescription": "Nintendo’s hybrid console bundled with Mario Kart World. A 1080p screen with HDR10.",
      "description": "Nintendo’s hybrid console bundled with Mario Kart World. A 1080p screen with HDR10.",
      "features": [
        "7.9-inch LCD",
        "256GB",
        "Switch 2 + Mario Kart World"
      ],
      "specifications": {
        "Display": "7.9-inch LCD",
        "Storage": "256GB",
        "Includes": "Switch 2 + Mario Kart World"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/nintendo-switch-2-console-mario-kart-world-bundle-ax",
      "price": 255,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": "https://www.eros.ae/media/catalog/product/cache/0a7dd086897ebf7d858113abe1d65194/b/9/b95150fbb366b55d91be_1.jpg"
    },
    "imageCaption": {
      "ar": "صورة جهاز Switch 2؛ الباقة تشمل Mario Kart World.",
      "en": "Switch 2 console image; the bundle includes Mario Kart World."
    }
  },
  {
    "id": "fc-27-ps5",
    "slug": "fc-27-ps5",
    "name": "لعبة EA SPORTS FC 27 — PS5",
    "brand": "EA SPORTS",
    "category": "ألعاب الفيديو",
    "price": 28.71,
    "oldPrice": 31.9,
    "wholesalePrice": 26.477,
    "images": [
      "/products/fc-27-ps5.svg"
    ],
    "shortDescription": "إصدار كرة القدم FC 27 للمنصة المحددة. تأكد من مطابقة جهازك قبل الطلب.",
    "description": "إصدار كرة القدم FC 27 للمنصة المحددة. تأكد من مطابقة جهازك قبل الطلب.",
    "features": [
      "PS5",
      "Standard",
      "كرة قدم"
    ],
    "specifications": {
      "المنصة": "PS5",
      "النسخة": "Standard",
      "النوع": "كرة قدم"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "EA SPORTS FC 27 — PS5",
      "shortDescription": "FC 27 football for the stated platform. Confirm your console matches this edition before ordering.",
      "description": "FC 27 football for the stated platform. Confirm your console matches this edition before ordering.",
      "features": [
        "PS5",
        "Standard",
        "Football"
      ],
      "specifications": {
        "Platform": "PS5",
        "Edition": "Standard",
        "Genre": "Football"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/ea-sports-fc-27-ps5-game",
      "price": 31.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    }
  },
  {
    "id": "fc-27-switch-2",
    "slug": "fc-27-switch-2",
    "name": "لعبة EA SPORTS FC 27 — Switch 2",
    "brand": "EA SPORTS",
    "category": "ألعاب الفيديو",
    "price": 28.71,
    "oldPrice": 31.9,
    "wholesalePrice": 26.477,
    "images": [
      "/products/fc-27-switch-2.svg"
    ],
    "shortDescription": "إصدار كرة القدم FC 27 للمنصة المحددة. تأكد من مطابقة جهازك قبل الطلب.",
    "description": "إصدار كرة القدم FC 27 للمنصة المحددة. تأكد من مطابقة جهازك قبل الطلب.",
    "features": [
      "Switch 2",
      "Standard",
      "كرة قدم"
    ],
    "specifications": {
      "المنصة": "Switch 2",
      "النسخة": "Standard",
      "النوع": "كرة قدم"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "EA SPORTS FC 27 — Switch 2",
      "shortDescription": "FC 27 football for the stated platform. Confirm your console matches this edition before ordering.",
      "description": "FC 27 football for the stated platform. Confirm your console matches this edition before ordering.",
      "features": [
        "Switch 2",
        "Standard",
        "Football"
      ],
      "specifications": {
        "Platform": "Switch 2",
        "Edition": "Standard",
        "Genre": "Football"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/ea-sports-fc-27-switch-2-game",
      "price": 31.9,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    }
  },
  {
    "id": "steam-5-oman",
    "slug": "steam-5-oman",
    "name": "بطاقة Steam — 5 USD / عُمان",
    "brand": "Steam",
    "category": "بطاقات الهدايا",
    "price": 1.89,
    "oldPrice": 2.1,
    "wholesalePrice": 1.743,
    "images": [
      "/products/steam-5-oman.svg"
    ],
    "shortDescription": "رصيد لمحفظة Steam. مخصص لحسابات عُمان والبحرين؛ تأكيد منطقة الحساب مطلوب قبل إصدار الكود.",
    "description": "رصيد لمحفظة Steam. مخصص لحسابات عُمان والبحرين؛ تأكيد منطقة الحساب مطلوب قبل إصدار الكود.",
    "features": [
      "5 USD",
      "عُمان / البحرين",
      "Steam Wallet"
    ],
    "specifications": {
      "القيمة": "5 USD",
      "منطقة الحساب": "عُمان / البحرين",
      "التفعيل": "Steam Wallet"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "Steam Wallet — 5 USD / Oman",
      "shortDescription": "Steam Wallet credit for Oman and Bahrain accounts. Confirm your account region before the code is issued.",
      "description": "Steam Wallet credit for Oman and Bahrain accounts. Confirm your account region before the code is issued.",
      "features": [
        "5 USD",
        "Oman / Bahrain",
        "Steam Wallet"
      ],
      "specifications": {
        "Value": "5 USD",
        "Account region": "Oman / Bahrain",
        "Redemption": "Steam Wallet"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/steam-gift-card-5-usd-oman-bahrain-instant-delivery",
      "price": 2.1,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    },
    "digital": {
      "ar": "للحسابات العُمانية أو البحرينية فقط. يؤكد الفريق توافق الحساب وطريقة تسليم الكود قبل إتمام الطلب. لا ترسل كلمة المرور.",
      "en": "For Oman or Bahrain accounts only. Our team confirms account compatibility and code delivery before completing the order. Never send your password."
    }
  },
  {
    "id": "steam-25-oman",
    "slug": "steam-25-oman",
    "name": "بطاقة Steam — 25 USD / عُمان",
    "brand": "Steam",
    "category": "بطاقات الهدايا",
    "price": 9.18,
    "oldPrice": 10.2,
    "wholesalePrice": 8.466,
    "images": [
      "/products/steam-25-oman.svg"
    ],
    "shortDescription": "رصيد لمحفظة Steam. مخصص لحسابات عُمان والبحرين؛ تأكيد منطقة الحساب مطلوب قبل إصدار الكود.",
    "description": "رصيد لمحفظة Steam. مخصص لحسابات عُمان والبحرين؛ تأكيد منطقة الحساب مطلوب قبل إصدار الكود.",
    "features": [
      "25 USD",
      "عُمان / البحرين",
      "Steam Wallet"
    ],
    "specifications": {
      "القيمة": "25 USD",
      "منطقة الحساب": "عُمان / البحرين",
      "التفعيل": "Steam Wallet"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "Steam Wallet — 25 USD / Oman",
      "shortDescription": "Steam Wallet credit for Oman and Bahrain accounts. Confirm your account region before the code is issued.",
      "description": "Steam Wallet credit for Oman and Bahrain accounts. Confirm your account region before the code is issued.",
      "features": [
        "25 USD",
        "Oman / Bahrain",
        "Steam Wallet"
      ],
      "specifications": {
        "Value": "25 USD",
        "Account region": "Oman / Bahrain",
        "Redemption": "Steam Wallet"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/steam-gift-card-25-usd-oman-instant-delivery",
      "price": 10.2,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    },
    "digital": {
      "ar": "للحسابات العُمانية أو البحرينية فقط. يؤكد الفريق توافق الحساب وطريقة تسليم الكود قبل إتمام الطلب. لا ترسل كلمة المرور.",
      "en": "For Oman or Bahrain accounts only. Our team confirms account compatibility and code delivery before completing the order. Never send your password."
    }
  },
  {
    "id": "pubg-60-uc",
    "slug": "pubg-60-uc",
    "name": "شحن PUBG Mobile — 60 UC",
    "brand": "PUBG MOBILE",
    "category": "الألعاب أونلاين",
    "price": 0.36,
    "oldPrice": 0.4,
    "wholesalePrice": 0.332,
    "images": [
      "/products/pubg-60-uc.svg"
    ],
    "shortDescription": "رصيد UC للنسخة العالمية من PUBG Mobile. راجع مع الفريق معرّف اللاعب وتوافق الحساب قبل الطلب.",
    "description": "رصيد UC للنسخة العالمية من PUBG Mobile. راجع مع الفريق معرّف اللاعب وتوافق الحساب قبل الطلب.",
    "features": [
      "60 UC",
      "Global",
      "Midasbuy"
    ],
    "specifications": {
      "القيمة": "60 UC",
      "منطقة الحساب": "Global",
      "التفعيل": "Midasbuy"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "PUBG Mobile — 60 UC",
      "shortDescription": "UC credit for the global version of PUBG Mobile. Confirm your player ID and account compatibility with the team.",
      "description": "UC credit for the global version of PUBG Mobile. Confirm your player ID and account compatibility with the team.",
      "features": [
        "60 UC",
        "Global",
        "Midasbuy"
      ],
      "specifications": {
        "Value": "60 UC",
        "Account region": "Global",
        "Redemption": "Midasbuy"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/pubg-60-uc-global",
      "price": 0.4,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    },
    "digital": {
      "ar": "للنسخة العالمية من PUBG Mobile. يؤكد الفريق التوافق وتسليم الكود عبر Midasbuy؛ لا ترسل كلمة المرور أو رمز التحقق.",
      "en": "For the global version of PUBG Mobile. Our team confirms compatibility and Midasbuy redemption. Never send your password or verification code."
    }
  },
  {
    "id": "pubg-660-uc",
    "slug": "pubg-660-uc",
    "name": "شحن PUBG Mobile — 660 UC",
    "brand": "PUBG MOBILE",
    "category": "الألعاب أونلاين",
    "price": 3.78,
    "oldPrice": 4.2,
    "wholesalePrice": 3.486,
    "images": [
      "/products/pubg-660-uc.svg"
    ],
    "shortDescription": "رصيد UC للنسخة العالمية من PUBG Mobile. راجع مع الفريق معرّف اللاعب وتوافق الحساب قبل الطلب.",
    "description": "رصيد UC للنسخة العالمية من PUBG Mobile. راجع مع الفريق معرّف اللاعب وتوافق الحساب قبل الطلب.",
    "features": [
      "660 UC",
      "Global",
      "Midasbuy"
    ],
    "specifications": {
      "القيمة": "660 UC",
      "منطقة الحساب": "Global",
      "التفعيل": "Midasbuy"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "PUBG Mobile — 660 UC",
      "shortDescription": "UC credit for the global version of PUBG Mobile. Confirm your player ID and account compatibility with the team.",
      "description": "UC credit for the global version of PUBG Mobile. Confirm your player ID and account compatibility with the team.",
      "features": [
        "660 UC",
        "Global",
        "Midasbuy"
      ],
      "specifications": {
        "Value": "660 UC",
        "Account region": "Global",
        "Redemption": "Midasbuy"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/pubg-mobile-600-uc-global",
      "price": 4.2,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    },
    "digital": {
      "ar": "للنسخة العالمية من PUBG Mobile. يؤكد الفريق التوافق وتسليم الكود عبر Midasbuy؛ لا ترسل كلمة المرور أو رمز التحقق.",
      "en": "For the global version of PUBG Mobile. Our team confirms compatibility and Midasbuy redemption. Never send your password or verification code."
    }
  },
  {
    "id": "pubg-1800-uc",
    "slug": "pubg-1800-uc",
    "name": "شحن PUBG Mobile — 1800 UC",
    "brand": "PUBG MOBILE",
    "category": "الألعاب أونلاين",
    "price": 9.45,
    "oldPrice": 10.5,
    "wholesalePrice": 8.715,
    "images": [
      "/products/pubg-1800-uc.svg"
    ],
    "shortDescription": "رصيد UC للنسخة العالمية من PUBG Mobile. راجع مع الفريق معرّف اللاعب وتوافق الحساب قبل الطلب.",
    "description": "رصيد UC للنسخة العالمية من PUBG Mobile. راجع مع الفريق معرّف اللاعب وتوافق الحساب قبل الطلب.",
    "features": [
      "1800 UC",
      "Global",
      "Midasbuy"
    ],
    "specifications": {
      "القيمة": "1800 UC",
      "منطقة الحساب": "Global",
      "التفعيل": "Midasbuy"
    },
    "badge": "أقل 10%",
    "featured": true,
    "availability": "unconfirmed",
    "en": {
      "name": "PUBG Mobile — 1800 UC",
      "shortDescription": "UC credit for the global version of PUBG Mobile. Confirm your player ID and account compatibility with the team.",
      "description": "UC credit for the global version of PUBG Mobile. Confirm your player ID and account compatibility with the team.",
      "features": [
        "1800 UC",
        "Global",
        "Midasbuy"
      ],
      "specifications": {
        "Value": "1800 UC",
        "Account region": "Global",
        "Redemption": "Midasbuy"
      }
    },
    "source": {
      "name": "Geekay Oman",
      "url": "https://www.geekay.com/oman_en/pubg-mobile-1500-uc-global",
      "price": 10.5,
      "currency": "OMR",
      "retrievedAt": "2026-09-30",
      "imageUrl": ""
    },
    "digital": {
      "ar": "للنسخة العالمية من PUBG Mobile. يؤكد الفريق التوافق وتسليم الكود عبر Midasbuy؛ لا ترسل كلمة المرور أو رمز التحقق.",
      "en": "For the global version of PUBG Mobile. Our team confirms compatibility and Midasbuy redemption. Never send your password or verification code."
    }
  },
  {
    "id": "fortnite-account-01-ikonik-galaxy-glow",
    "slug": "fortnite-account-01-ikonik-galaxy-glow",
    "name": "حساب Fortnite Premium — IKONIK + Galaxy + Glow",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 110.937,
    "wholesalePrice": 110.937,
    "images": [
      "/products/fortnite-account-01-ikonik-galaxy-glow.svg"
    ],
    "shortDescription": "حساب Fortnite مميز يضم 155 سكن مع IKONIK وGalaxy وGlow وThe Reaper. عرض مصدر خارجي موثّق وقت المراجعة، والتوفر والسعر النهائي يؤكدان قبل الدفع.",
    "description": "حساب Fortnite مميز يضم 155 سكن مع IKONIK وGalaxy وGlow وThe Reaper. عرض مصدر خارجي موثّق وقت المراجعة، والتوفر والسعر النهائي يؤكدان قبل الدفع. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "155 Skins",
          "IKONIK",
          "Galaxy",
          "Glow",
          "The Reaper",
          "Astro Jack",
          "Omega",
          "Take The L"
    ],
    "specifications": {
      "Listing ID": "295426627",
      "السكنات": "155",
      "الوصول والمنصات": "Full access • PC / PSN / Xbox / Nintendo",
      "البائع في المصدر": "Tsuki",
      "تقييم البائع": "4.9/5",
      "سعر المصدر": "$288.99 USD",
      "السعر المرجعي المحوّل": "110.937 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Premium Account — IKONIK + Galaxy + Glow",
      "shortDescription": "Premium Fortnite account with 155 skins including IKONIK, Galaxy, Glow and The Reaper. External marketplace listing verified at review time; availability and final price must be confirmed before payment.",
      "description": "Premium Fortnite account with 155 skins including IKONIK, Galaxy, Glow and The Reaper. External marketplace listing verified at review time; availability and final price must be confirmed before payment. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "155 Skins",
            "IKONIK",
            "Galaxy",
            "Glow",
            "The Reaper",
            "Astro Jack",
            "Omega",
            "Take The L"
      ],
      "specifications": {
        "Listing ID": "295426627",
        "Skins": "155",
        "Access / platforms": "Full access • PC / PSN / Xbox / Nintendo",
        "Source seller": "Tsuki",
        "Seller rating": "4.9/5",
        "Source price": "$288.99 USD",
        "Converted reference": "110.937 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/295426627a%21pcpsnxbox-155-skins-fa--stw--ikonik--galaxy--reape/",
      "price": 288.99,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 110.937,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "295426627",
      "seller": "Tsuki",
      "sellerRating": "4.9",
      "sellerOrders": "3,061"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-02-reaper-glow-minty",
    "slug": "fortnite-account-02-reaper-glow-minty",
    "name": "حساب Fortnite Premium — The Reaper + Glow + Minty",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 114.779,
    "wholesalePrice": 114.779,
    "images": [
      "/products/fortnite-account-02-reaper-glow-minty.svg"
    ],
    "shortDescription": "حساب Fortnite مميز: 260 سكن، 188 Emotes، 206 Pickaxes و168 Gliders، مع 5,500 V-Bucks وOG STW.",
    "description": "حساب Fortnite مميز: 260 سكن، 188 Emotes، 206 Pickaxes و168 Gliders، مع 5,500 V-Bucks وOG STW. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "260 Skins",
          "188 Emotes",
          "206 Pickaxes",
          "168 Gliders",
          "5,500 V-Bucks",
          "The Reaper",
          "Glow",
          "Merry Mint Axe"
    ],
    "specifications": {
      "Listing ID": "296075294",
      "السكنات": "260",
      "الوصول والمنصات": "All Platforms • OG STW • Full email access",
      "البائع في المصدر": "pinkstock",
      "تقييم البائع": "5.0/5",
      "سعر المصدر": "$299.00 USD",
      "السعر المرجعي المحوّل": "114.779 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Premium Account — The Reaper + Glow + Minty",
      "shortDescription": "Premium Fortnite account: 260 skins, 188 emotes, 206 pickaxes and 168 gliders, with 5,500 V-Bucks and OG STW.",
      "description": "Premium Fortnite account: 260 skins, 188 emotes, 206 pickaxes and 168 gliders, with 5,500 V-Bucks and OG STW. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "260 Skins",
            "188 Emotes",
            "206 Pickaxes",
            "168 Gliders",
            "5,500 V-Bucks",
            "The Reaper",
            "Glow",
            "Merry Mint Axe"
      ],
      "specifications": {
        "Listing ID": "296075294",
        "Skins": "260",
        "Access / platforms": "All Platforms • OG STW • Full email access",
        "Source seller": "pinkstock",
        "Seller rating": "5.0/5",
        "Source price": "$299.00 USD",
        "Converted reference": "114.779 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/296075294a%21all-platforms-260-skins--5500-vb--og-stw--the-reap/",
      "price": 299,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 114.779,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "296075294",
      "seller": "pinkstock",
      "sellerRating": "5.0",
      "sellerOrders": "222"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-03-arcane-jinx-chun-li",
    "slug": "fortnite-account-03-arcane-jinx-chun-li",
    "name": "حساب Fortnite Premium — Arcane Jinx + Chun-Li",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 119.002,
    "wholesalePrice": 119.002,
    "images": [
      "/products/fortnite-account-03-arcane-jinx-chun-li.svg"
    ],
    "shortDescription": "حساب Fortnite Collector يضم 411 سكن، 236 Emotes، 352 Pickaxes و204 Gliders مع Arcane Jinx وChun-Li وSkull Trooper.",
    "description": "حساب Fortnite Collector يضم 411 سكن، 236 Emotes، 352 Pickaxes و204 Gliders مع Arcane Jinx وChun-Li وSkull Trooper. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "411 Skins",
          "236 Emotes",
          "352 Pickaxes",
          "204 Gliders",
          "Arcane Jinx",
          "Chun-Li",
          "Skull Trooper",
          "John Wick"
    ],
    "specifications": {
      "Listing ID": "296068643",
      "السكنات": "411",
      "الوصول والمنصات": "All Platforms • OG STW • Email changeable",
      "البائع في المصدر": "pinkstock",
      "تقييم البائع": "5.0/5",
      "سعر المصدر": "$310.00 USD",
      "السعر المرجعي المحوّل": "119.002 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Premium Account — Arcane Jinx + Chun-Li",
      "shortDescription": "Fortnite collector account with 411 skins, 236 emotes, 352 pickaxes and 204 gliders, featuring Arcane Jinx, Chun-Li and Skull Trooper.",
      "description": "Fortnite collector account with 411 skins, 236 emotes, 352 pickaxes and 204 gliders, featuring Arcane Jinx, Chun-Li and Skull Trooper. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "411 Skins",
            "236 Emotes",
            "352 Pickaxes",
            "204 Gliders",
            "Arcane Jinx",
            "Chun-Li",
            "Skull Trooper",
            "John Wick"
      ],
      "specifications": {
        "Listing ID": "296068643",
        "Skins": "411",
        "Access / platforms": "All Platforms • OG STW • Email changeable",
        "Source seller": "pinkstock",
        "Seller rating": "5.0/5",
        "Source price": "$310.00 USD",
        "Converted reference": "119.002 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/296068643a%21all-platforms-411-skins--og-stw--arcane-jinx-skull/",
      "price": 310,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 119.002,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "296068643",
      "seller": "pinkstock",
      "sellerRating": "5.0",
      "sellerOrders": "222"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-04-black-knight-travis-scott",
    "slug": "fortnite-account-04-black-knight-travis-scott",
    "name": "حساب Fortnite OG — Black Knight + Travis Scott",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 143.954,
    "wholesalePrice": 143.954,
    "images": [
      "/products/fortnite-account-04-black-knight-travis-scott.svg"
    ],
    "shortDescription": "حساب Fortnite OG يضم 154 سكن، 162 Emotes، 158 Pickaxes و132 Gliders مع Black Knight وTravis Scott وThe Reaper.",
    "description": "حساب Fortnite OG يضم 154 سكن، 162 Emotes، 158 Pickaxes و132 Gliders مع Black Knight وTravis Scott وThe Reaper. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "154 Skins",
          "162 Emotes",
          "158 Pickaxes",
          "132 Gliders",
          "Black Knight",
          "Travis Scott",
          "Sparkle Specialist",
          "The Reaper"
    ],
    "specifications": {
      "Listing ID": "297072705",
      "السكنات": "154",
      "الوصول والمنصات": "All Platforms • OG STW • 50 V-Bucks",
      "البائع في المصدر": "pinkstock",
      "تقييم البائع": "5.0/5",
      "سعر المصدر": "$375.00 USD",
      "السعر المرجعي المحوّل": "143.954 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite OG Account — Black Knight + Travis Scott",
      "shortDescription": "Fortnite OG account with 154 skins, 162 emotes, 158 pickaxes and 132 gliders, including Black Knight, Travis Scott and The Reaper.",
      "description": "Fortnite OG account with 154 skins, 162 emotes, 158 pickaxes and 132 gliders, including Black Knight, Travis Scott and The Reaper. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "154 Skins",
            "162 Emotes",
            "158 Pickaxes",
            "132 Gliders",
            "Black Knight",
            "Travis Scott",
            "Sparkle Specialist",
            "The Reaper"
      ],
      "specifications": {
        "Listing ID": "297072705",
        "Skins": "154",
        "Access / platforms": "All Platforms • OG STW • 50 V-Bucks",
        "Source seller": "pinkstock",
        "Seller rating": "5.0/5",
        "Source price": "$375.00 USD",
        "Converted reference": "143.954 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/297072705a%21all-platforms-154-skins--og-stw--black-knightspark/",
      "price": 375,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 143.954,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "297072705",
      "seller": "pinkstock",
      "sellerRating": "5.0",
      "sellerOrders": "222"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-05-584-skins-collector",
    "slug": "fortnite-account-05-584-skins-collector",
    "name": "حساب Fortnite Collector — 584 Skins",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 147.793,
    "wholesalePrice": 147.793,
    "images": [
      "/products/fortnite-account-05-584-skins-collector.svg"
    ],
    "shortDescription": "حساب Fortnite Collector ضخم يضم 584 سكن، 399 Emotes، 536 Pickaxes و361 Gliders، مع Merry Mint Axe وLeviathan Axe.",
    "description": "حساب Fortnite Collector ضخم يضم 584 سكن، 399 Emotes، 536 Pickaxes و361 Gliders، مع Merry Mint Axe وLeviathan Axe. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "584 Skins",
          "399 Emotes",
          "536 Pickaxes",
          "361 Gliders",
          "Merry Mint Axe",
          "Leviathan Axe",
          "Omega Stage 5",
          "Gold Midas"
    ],
    "specifications": {
      "Listing ID": "296921781",
      "السكنات": "584",
      "الوصول والمنصات": "PC / PSN • OG STW • 100 V-Bucks",
      "البائع في المصدر": "pinkstock",
      "تقييم البائع": "5.0/5",
      "سعر المصدر": "$385.00 USD",
      "السعر المرجعي المحوّل": "147.793 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Collector Account — 584 Skins",
      "shortDescription": "Large Fortnite collector account with 584 skins, 399 emotes, 536 pickaxes and 361 gliders, including Merry Mint Axe and Leviathan Axe.",
      "description": "Large Fortnite collector account with 584 skins, 399 emotes, 536 pickaxes and 361 gliders, including Merry Mint Axe and Leviathan Axe. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "584 Skins",
            "399 Emotes",
            "536 Pickaxes",
            "361 Gliders",
            "Merry Mint Axe",
            "Leviathan Axe",
            "Omega Stage 5",
            "Gold Midas"
      ],
      "specifications": {
        "Listing ID": "296921781",
        "Skins": "584",
        "Access / platforms": "PC / PSN • OG STW • 100 V-Bucks",
        "Source seller": "pinkstock",
        "Seller rating": "5.0/5",
        "Source price": "$385.00 USD",
        "Converted reference": "147.793 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/296921781a%21pcpsn-584-skins--og-stw--merry-mint-axe-leviathan-/",
      "price": 385,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 147.793,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "296921781",
      "seller": "pinkstock",
      "sellerRating": "5.0",
      "sellerOrders": "222"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-06-black-knight-ikonik",
    "slug": "fortnite-account-06-black-knight-ikonik",
    "name": "حساب Fortnite Premium — Black Knight + IKONIK",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 148.557,
    "wholesalePrice": 148.557,
    "images": [
      "/products/fortnite-account-06-black-knight-ikonik.svg"
    ],
    "shortDescription": "حساب Fortnite Premium يضم 286 سكن مع Black Knight وIKONIK وGlow وThe Reaper وFloss.",
    "description": "حساب Fortnite Premium يضم 286 سكن مع Black Knight وIKONIK وGlow وThe Reaper وFloss. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "286 Skins",
          "Black Knight",
          "IKONIK",
          "Glow",
          "The Reaper",
          "Neo Versa",
          "Power Chord",
          "Floss"
    ],
    "specifications": {
      "Listing ID": "295815839",
      "السكنات": "286",
      "الوصول والمنصات": "Full access • PC / PSN / Xbox / Nintendo",
      "البائع في المصدر": "Tsuki",
      "تقييم البائع": "4.9/5",
      "سعر المصدر": "$386.99 USD",
      "السعر المرجعي المحوّل": "148.557 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Premium Account — Black Knight + IKONIK",
      "shortDescription": "Premium Fortnite account with 286 skins including Black Knight, IKONIK, Glow, The Reaper and Floss.",
      "description": "Premium Fortnite account with 286 skins including Black Knight, IKONIK, Glow, The Reaper and Floss. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "286 Skins",
            "Black Knight",
            "IKONIK",
            "Glow",
            "The Reaper",
            "Neo Versa",
            "Power Chord",
            "Floss"
      ],
      "specifications": {
        "Listing ID": "295815839",
        "Skins": "286",
        "Access / platforms": "Full access • PC / PSN / Xbox / Nintendo",
        "Source seller": "Tsuki",
        "Seller rating": "4.9/5",
        "Source price": "$386.99 USD",
        "Converted reference": "148.557 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/295815839a%21pcpsnxbox-286-skins-fa--stw--black-knight--ikonik-/",
      "price": 386.99,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 148.557,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "295815839",
      "seller": "Tsuki",
      "sellerRating": "4.9",
      "sellerOrders": "3,064"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-07-chapter-1-bp-3-10",
    "slug": "fortnite-account-07-chapter-1-bp-3-10",
    "name": "حساب Fortnite Chapter 1 — Battle Pass 3–10",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 149.697,
    "wholesalePrice": 149.697,
    "images": [
      "/products/fortnite-account-07-chapter-1-bp-3-10.svg"
    ],
    "shortDescription": "حساب Fortnite Chapter 1 مع Battle Pass المواسم 3–10 وSTW Founder وOriginal Email و850 V-Bucks. عدد السكنات الإجمالي غير مذكور في المصدر.",
    "description": "حساب Fortnite Chapter 1 مع Battle Pass المواسم 3–10 وSTW Founder وOriginal Email و850 V-Bucks. عدد السكنات الإجمالي غير مذكور في المصدر. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "Battle Pass 3–10",
          "STW Founder",
          "Original Email",
          "850 V-Bucks",
          "Orange Justice",
          "Geralt of Rivia",
          "Solid Snake",
          "Darth Vader"
    ],
    "specifications": {
      "Listing ID": "295941852",
      "السكنات": "غير مذكور في المصدر",
      "الوصول والمنصات": "Full Access • Original Email • Manual delivery ≤24h",
      "البائع في المصدر": "LucyLesta",
      "تقييم البائع": "5.0/5",
      "سعر المصدر": "$389.96 USD",
      "السعر المرجعي المحوّل": "149.697 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Chapter 1 Account — Battle Pass 3–10",
      "shortDescription": "Fortnite Chapter 1 account with Battle Pass seasons 3–10, STW Founder, original email and 850 V-Bucks. Total skin count is not stated by the source.",
      "description": "Fortnite Chapter 1 account with Battle Pass seasons 3–10, STW Founder, original email and 850 V-Bucks. Total skin count is not stated by the source. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "Battle Pass 3–10",
            "STW Founder",
            "Original Email",
            "850 V-Bucks",
            "Orange Justice",
            "Geralt of Rivia",
            "Solid Snake",
            "Darth Vader"
      ],
      "specifications": {
        "Listing ID": "295941852",
        "Skins": "Not stated by source",
        "Access / platforms": "Full Access • Original Email • Manual delivery ≤24h",
        "Source seller": "LucyLesta",
        "Seller rating": "5.0/5",
        "Source price": "$389.96 USD",
        "Converted reference": "149.697 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/295941852a%21stw-founder--850-vbucks--battle-pass-3-to-10--chap/",
      "price": 389.96,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 149.697,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "295941852",
      "seller": "LucyLesta",
      "sellerRating": "5.0",
      "sellerOrders": "889"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-08-ikonik-omega-glow",
    "slug": "fortnite-account-08-ikonik-omega-glow",
    "name": "حساب Fortnite Premium — IKONIK + Omega + Glow",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 153.167,
    "wholesalePrice": 153.167,
    "images": [
      "/products/fortnite-account-08-ikonik-omega-glow.svg"
    ],
    "shortDescription": "حساب Fortnite Premium يضم 282 سكن مع IKONIK وOmega وGlow وThe Reaper و5,900 V-Bucks.",
    "description": "حساب Fortnite Premium يضم 282 سكن مع IKONIK وOmega وGlow وThe Reaper و5,900 V-Bucks. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "282 Skins",
          "IKONIK",
          "Omega",
          "Glow",
          "The Reaper",
          "Freestylin'",
          "Elite Agent",
          "5,900 V-Bucks"
    ],
    "specifications": {
      "Listing ID": "296662950",
      "السكنات": "282",
      "الوصول والمنصات": "Full access • PC / PSN / Xbox / Switch / Mobile",
      "البائع في المصدر": "Man4ik",
      "تقييم البائع": "4.9/5",
      "سعر المصدر": "$399.00 USD",
      "السعر المرجعي المحوّل": "153.167 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite Premium Account — IKONIK + Omega + Glow",
      "shortDescription": "Premium Fortnite account with 282 skins including IKONIK, Omega, Glow, The Reaper and 5,900 V-Bucks.",
      "description": "Premium Fortnite account with 282 skins including IKONIK, Omega, Glow, The Reaper and 5,900 V-Bucks. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "282 Skins",
            "IKONIK",
            "Omega",
            "Glow",
            "The Reaper",
            "Freestylin'",
            "Elite Agent",
            "5,900 V-Bucks"
      ],
      "specifications": {
        "Listing ID": "296662950",
        "Skins": "282",
        "Access / platforms": "Full access • PC / PSN / Xbox / Switch / Mobile",
        "Source seller": "Man4ik",
        "Seller rating": "4.9/5",
        "Source price": "$399.00 USD",
        "Converted reference": "153.167 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/296662950a%21psnpcxboxnin282-skinsikonikomegafreestylin/",
      "price": 399,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 153.167,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "296662950",
      "seller": "Man4ik",
      "sellerRating": "4.9",
      "sellerOrders": "13,648"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-09-black-knight-travis-scott-premium",
    "slug": "fortnite-account-09-black-knight-travis-scott-premium",
    "name": "حساب Fortnite OG Premium — Black Knight + Travis Scott",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 191.939,
    "wholesalePrice": 191.939,
    "images": [
      "/products/fortnite-account-09-black-knight-travis-scott-premium.svg"
    ],
    "shortDescription": "حساب Fortnite OG يضم 148 سكن مع Black Knight وTravis Scott وThe Reaper وTake The L وFloss.",
    "description": "حساب Fortnite OG يضم 148 سكن مع Black Knight وTravis Scott وThe Reaper وTake The L وFloss. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "148 Skins",
          "Black Knight",
          "Travis Scott",
          "The Reaper",
          "Take The L",
          "Floss",
          "FNCS Renegade",
          "Omega Stage 5"
    ],
    "specifications": {
      "Listing ID": "295972935",
      "السكنات": "148",
      "الوصول والمنصات": "Full access • PC / Xbox / PSN / Switch • Instant",
      "البائع في المصدر": "SWIFTYYMARTZZ",
      "تقييم البائع": "5.0/5",
      "سعر المصدر": "$500.00 USD",
      "السعر المرجعي المحوّل": "191.939 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite OG Premium Account — Black Knight + Travis Scott",
      "shortDescription": "Fortnite OG account with 148 skins including Black Knight, Travis Scott, The Reaper, Take The L and Floss.",
      "description": "Fortnite OG account with 148 skins including Black Knight, Travis Scott, The Reaper, Take The L and Floss. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "148 Skins",
            "Black Knight",
            "Travis Scott",
            "The Reaper",
            "Take The L",
            "Floss",
            "FNCS Renegade",
            "Omega Stage 5"
      ],
      "specifications": {
        "Listing ID": "295972935",
        "Skins": "148",
        "Access / platforms": "Full access • PC / Xbox / PSN / Switch • Instant",
        "Source seller": "SWIFTYYMARTZZ",
        "Seller rating": "5.0/5",
        "Source price": "$500.00 USD",
        "Converted reference": "191.939 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/295972935a%21148-skinsog-stwblack-knighttravis-scottthe-reapert/",
      "price": 500,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 191.939,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "295972935",
      "seller": "SWIFTYYMARTZZ",
      "sellerRating": "5.0",
      "sellerOrders": "141"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    "id": "fortnite-account-10-og-purple-skull-trooper",
    "slug": "fortnite-account-10-og-purple-skull-trooper",
    "name": "حساب Fortnite OG — Purple Skull Trooper",
    "brand": "Fortnite",
    "category": "ألعاب الفيديو",
    "price": 364.679,
    "wholesalePrice": 364.679,
    "images": [
      "/products/fortnite-account-10-og-purple-skull-trooper.svg"
    ],
    "shortDescription": "حساب Fortnite OG نادر يضم 129 سكن مع OG Purple Skull Trooper وThe Reaper وBlue Squire وRoyale Knight وOG STW.",
    "description": "حساب Fortnite OG نادر يضم 129 سكن مع OG Purple Skull Trooper وThe Reaper وBlue Squire وRoyale Knight وOG STW. السعر المعروض مرجع تقريبي محوّل من سعر المصدر بالدولار إلى الريال العُماني وقت المراجعة، وقد يتغير العرض أو السعر أو التوفر لدى البائع الخارجي. يتم تأكيد بيانات الحساب ونقل الوصول والسعر النهائي عبر MR ROBOT قبل أي التزام بالدفع.",
    "features": [
          "129 Skins",
          "OG Purple Skull Trooper",
          "The Reaper",
          "Blue Squire",
          "Royale Knight",
          "Elite Agent",
          "Rogue Agent",
          "OG STW"
    ],
    "specifications": {
      "Listing ID": "296770080",
      "السكنات": "129",
      "الوصول والمنصات": "Full access • PC / PS4 / PS5 / Switch / Mobile",
      "البائع في المصدر": "UnrankedSmurfs",
      "تقييم البائع": "4.9/5",
      "سعر المصدر": "$949.99 USD",
      "السعر المرجعي المحوّل": "364.679 OMR"
    },
    "badge": "Fortnite Premium",
    "featured": false,
    "availability": "unconfirmed",
    "pricingPolicy": "marketplace-reference",
    "en": {
      "name": "Fortnite OG Account — Purple Skull Trooper",
      "shortDescription": "Rare Fortnite OG account with 129 skins including OG Purple Skull Trooper, The Reaper, Blue Squire, Royale Knight and OG STW.",
      "description": "Rare Fortnite OG account with 129 skins including OG Purple Skull Trooper, The Reaper, Blue Squire, Royale Knight and OG STW. The displayed amount is an approximate OMR reference converted from the external USD listing at review time. Listing price and availability may change. MR ROBOT confirms account details, transfer conditions and final price before any payment commitment.",
      "features": [
            "129 Skins",
            "OG Purple Skull Trooper",
            "The Reaper",
            "Blue Squire",
            "Royale Knight",
            "Elite Agent",
            "Rogue Agent",
            "OG STW"
      ],
      "specifications": {
        "Listing ID": "296770080",
        "Skins": "129",
        "Access / platforms": "Full access • PC / PS4 / PS5 / Switch / Mobile",
        "Source seller": "UnrankedSmurfs",
        "Seller rating": "4.9/5",
        "Source price": "$949.99 USD",
        "Converted reference": "364.679 OMR"
      }
    },
    "source": {
      "name": "PlayerAuctions",
      "url": "https://www.playerauctions.com/fortnite-account/296770080a%21312--instant-delivery--129-skins--og-stw--purple-o/",
      "price": 949.99,
      "currency": "USD",
      "retrievedAt": "2026-10-03",
      "imageUrl": "",
      "referenceOMR": 364.679,
      "fxRate": 0.383877,
      "fxPair": "USD/OMR",
      "listingId": "296770080",
      "seller": "UnrankedSmurfs",
      "sellerRating": "4.9",
      "sellerOrders": "3,740"
    },
    "digital": {
      "ar": "حساب رقمي من عرض بائع خارجي مستقل. التوفر وبيانات النقل والسعر النهائي تؤكد قبل الدفع. لا ترسل كلمات المرور أو رموز التحقق في محادثات عامة.",
      "en": "Digital account from an independent external seller listing. Availability, transfer details and final price are confirmed before payment. Never send passwords or verification codes in public chats."
    },
    "imageCaption": {
      "ar": "تصميم MR ROBOT مبني على بيانات العرض الموثقة؛ ليس نسخة من صور البائع الأصلية.",
      "en": "MR ROBOT artwork based on verified listing facts; it does not reproduce the seller's original images."
    }
  },
  {
    id: "sony-a7-iv-body-bq",
    slug: "sony-a7-iv-body-bq",
    name: "كاميرا Sony a7 IV — هيكل فقط ILCE-7M4/BQ",
    brand: "Sony",
    category: "الكاميرات",
    price: 620.91,
    wholesalePrice: 572.617,
    images: ["/products/sony-a7-iv-body-bq.svg"],
    shortDescription: "كاميرا Sony A7 IV كاملة الإطار بدقة 33 ميجابكسل، نسخة ILCE-7M4/BQ للهيكل فقط. توفر MR ROBOT يحتاج تأكيدًا.",
    description: "كاميرا بعدسات قابلة للتبديل بتركيب Sony E، ومستشعر كامل الإطار بدقة 33 ميجابكسل. هذا العرض للهيكل فقط؛ العدسة في الصورة غير مشمولة. يُرجى تأكيد توفر MR ROBOT والضمان والتوصيل قبل الطلب.",
    features: ["مستشعر كامل الإطار بدقة 33 ميجابكسل", "تركيب عدسات Sony E", "هيكل فقط — العدسة غير مشمولة"],
    specifications: { الموديل: "ILCE-7M4/BQ", النسخة: "أسود؛ هيكل فقط؛ دون حزمة عدسات", المستشعر: "كامل الإطار، 33 ميجابكسل", "تركيب العدسة": "Sony E", العدسة: "غير مشمولة" },
    featured: true,
    availability: "unconfirmed",
    pricingPolicy: "verified-reference",
    en: {
      name: "Sony a7 IV — body only ILCE-7M4/BQ",
      shortDescription: "33MP full-frame Sony A7 IV camera, ILCE-7M4/BQ body-only version. MR ROBOT availability needs confirmation.",
      description: "Interchangeable-lens camera with Sony E mount and a 33MP full-frame sensor. This offer is body only; the lens in the photograph is not included. Confirm MR ROBOT availability, warranty and delivery before ordering.",
      features: ["33MP full-frame sensor", "Sony E lens mount", "Body only — lens not included"],
      specifications: { Model: "ILCE-7M4/BQ", Variant: "Black; body only; no lens bundle", Sensor: "Full frame, 33MP", "Lens mount": "Sony E", Lens: "Not included" },
    },
    source: {
      name: "Skyorbits Oman",
      url: "https://www.skyorbits.tech/shop/4548736133655-sony-a7-iv-mirrorless-camera-body-only-ilce-7m4-bq-1122",
      price: 689.9,
      currency: "OMR",
      retrievedAt: "2026-10-01",
      imageUrl: "",
      validUntil: "2026-10-08T17:52:07Z",
    },
    imageCaption: {
      ar: "صورة مرخصة للكاميرا؛ العدسة الظاهرة غير مشمولة: العرض للهيكل فقط.",
      en: "Licensed camera photograph; pictured lens is not included: body-only offer.",
    },
  },
  {
    id: "polaroid-go-gen2-white-6282",
    slug: "polaroid-go-gen2-white-6282",
    name: "Polaroid Go الجيل الثاني — أبيض مع 16 صورة",
    brand: "Polaroid",
    category: "الكاميرات",
    price: 41.401,
    wholesalePrice: 38.181,
    images: ["/products/polaroid-go-gen2-white-6282.svg"],
    shortDescription: "كاميرا Polaroid Go من الجيل الثاني، بيضاء، موديل 6282 مع فيلم لـ16 صورة. توفر MR ROBOT يحتاج تأكيدًا.",
    description: "كاميرا فورية صغيرة مع شحن USB-C ومؤقت ذاتي ووضع تعريض مزدوج. هذه النسخة البيضاء 6282 تشمل فيلم Polaroid Go لـ16 صورة. تستخدم فيلم Go فقط؛ فيلم i-Type و600 غير متوافق.",
    features: ["الجيل الثاني، أبيض، 6282", "فيلم Go لـ16 صورة مرفق", "شحن USB-C ومؤقت ذاتي"],
    specifications: { الموديل: "6282", النسخة: "أبيض؛ حزمة 16 صورة", الفيلم: "Polaroid Go فقط", الشحن: "USB-C", الحزمة: "فيلم لـ16 صورة" },
    featured: true,
    availability: "unconfirmed",
    pricingPolicy: "verified-reference",
    en: {
      name: "Polaroid Go Generation 2 — white with 16 photos",
      shortDescription: "White Polaroid Go Generation 2 camera, model 6282 with film for 16 photos. MR ROBOT availability needs confirmation.",
      description: "Compact instant camera with USB-C charging, self-timer and double exposure. This white 6282 bundle includes Polaroid Go film for 16 photos. Uses Go film only; i-Type and 600 film are incompatible.",
      features: ["Generation 2, white, 6282", "Go film for 16 photos included", "USB-C charging and self-timer"],
      specifications: { Model: "6282", Variant: "White; 16-photo bundle", Film: "Polaroid Go only", Charging: "USB-C", Bundle: "Film for 16 photos" },
    },
    source: {
      name: "Skyorbits Oman",
      url: "https://www.skyorbits.tech/shop/pol-6282-polaroid-go-generation-2-instant-camera-with-16-photos-white-6282-5587",
      price: 46.001,
      currency: "OMR",
      retrievedAt: "2026-10-01",
      imageUrl: "",
      validUntil: "2026-10-08T17:52:07Z",
    },
    imageCaption: {
      ar: "صورة مرخصة للكاميرا؛ حزمة 16 صورة مرفقة بالعرض ولا تظهر في الصورة.",
      en: "Licensed camera photograph; the included 16-photo film bundle is not pictured.",
    },
  },
  {
    id: "beyerdynamic-dt990-pro-250",
    slug: "beyerdynamic-dt990-pro-250",
    name: "سماعة Beyerdynamic DT 990 PRO — 250 أوم",
    brand: "Beyerdynamic",
    category: "الصوتيات",
    price: 66.51,
    wholesalePrice: 61.337,
    images: ["/products/beyerdynamic-dt990-pro-250.svg"],
    shortDescription: "سماعة استوديو سلكية مفتوحة، نسخة PRO بمقاومة 250 أوم وكابل لولبي ثابت. توفر MR ROBOT يحتاج تأكيدًا.",
    description: "سماعة فوق الأذن بتصميم مفتوح ووسادات مخملية رمادية. النسخة المطلوبة PRO 250 أوم مع كابل لولبي ومقبس 3.5 مم ومحول 6.35 مم؛ ليست نسخة 80 أوم أو Edition أو PRO X، ولا تشمل مضخمًا.",
    features: ["نسخة PRO، مقاومة 250 أوم", "تصميم مفتوح مع وسادات مخملية", "كابل لولبي ثابت، 3.5 مم مع محول 6.35 مم"],
    specifications: { الموديل: "DT 990 PRO 250 ohms", التصميم: "مفتوح، فوق الأذن", المقاومة: "250 أوم", الاتصال: "3.5 مم تناظري + محول 6.35 مم" },
    featured: true,
    availability: "unconfirmed",
    pricingPolicy: "verified-reference",
    en: {
      name: "Beyerdynamic DT 990 PRO — 250 ohms",
      shortDescription: "Open-back wired studio headphones, PRO 250-ohm version with fixed coiled cable. MR ROBOT availability needs confirmation.",
      description: "Open-back over-ear headphones with grey velour pads. Requested version: PRO 250 ohms, coiled cable, 3.5mm plug and 6.35mm adapter; not the 80-ohm, Edition or PRO X version, and no amplifier included.",
      features: ["PRO version, 250-ohm impedance", "Open-back design with velour pads", "Fixed coiled cable, 3.5mm plug with 6.35mm adapter"],
      specifications: { Model: "DT 990 PRO 250 ohms", Design: "Open-back, over-ear", Impedance: "250 ohms", Connection: "Analogue 3.5mm plus 6.35mm adapter" },
    },
    source: {
      name: "Gadgets Oman",
      url: "https://gadgetsoman.com/products/beyerdynamic-dt-990-pro-250-ohms-studio-headphones-for-mixing-and-mastering-high-quality-audio-ideal-for-professional-use",
      price: 73.9,
      currency: "OMR",
      retrievedAt: "2026-10-01",
      imageUrl: "",
      validUntil: "2026-10-08T17:56:10Z",
    },
    imageCaption: {
      ar: "صورة مرخصة لنسخة DT 990 PRO بالكابل اللولبي؛ الأجهزة الظاهرة بالخلفية غير مشمولة.",
      en: "Licensed photograph of DT 990 PRO with coiled cable; background equipment is not included.",
    },
  }
];
