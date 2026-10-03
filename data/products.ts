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
  source: {
    name: string;
    url: string;
    price: number;
    currency: "OMR";
    retrievedAt: string;
    imageUrl: string;
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
      "/products/iphone-18-pro-256gb-silver.webp"
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
      "/products/iphone-18-pro-512gb-black.webp"
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
      "/products/iphone-18-pro-1tb-silver.webp"
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
      "/products/iphone-18-pro-2tb-silver.webp"
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
      "/products/iphone-18-pro-max-256gb-black.webp"
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
      "/products/iphone-18-pro-max-512gb-black.webp"
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
      "/products/iphone-18-pro-max-1tb-silver.webp"
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
      "/products/iphone-18-pro-max-2tb-silver.webp"
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
      "/products/iphone-17-pro-256-silver.webp"
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
      "/products/galaxy-a16-4g-grey.webp"
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
      "/products/galaxy-a16-5g-black.webp"
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
      "/products/watch-fit-3-black.webp"
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
      "/products/watch-fit-3-grey.webp"
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
      "/products/airpods-4.webp"
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
      "/products/jbl-wave-buds-2-white.webp"
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
      "/products/jbl-go-4-black.webp"
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
      "/products/anker-nano-power-10k.webp"
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
      "/products/anker-nano-45w.webp"
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
      "/products/anker-zolo-18m.webp"
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
      "/products/smartix-iphone-air-black.webp"
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
      "/products/ps5-slim-disc.webp"
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
      "/products/switch-2-mario-kart.webp"
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
  }
];
