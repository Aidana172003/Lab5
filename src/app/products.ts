export interface Product {
  id: number;
  name: string;
  link: string;
  image: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'CeraVe Moistrurizing Cream',
    category: 'Beauty picks',
    link: 'https://www.amazon.com/CeraVe-Moisturizing-Cream-Daily-Moisturizer/dp/B00TTD9BRC/ref=sr_1_3?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-3',
    image:
      'https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL480_FMwebp_QL65_.jpg',
    price: 16.25,
    description:
      'For face and body or can be used as a hand cream for dry skin relief.',
    rating: '4.8 out of 5',
  },
  {
    id: 2,
    name: 'TruSkin Vitamin C Serum ',
    category: 'Beauty picks',
    link: 'https://www.amazon.com/TruSkin-Naturals-Vitamin-Topical-Hyaluronic/dp/B01M4MCUAF/ref=sr_1_6?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-6',
    image: 'https://m.media-amazon.com/images/I/61nD93IEBKL._SY355_.jpg',
    price: 19.99,
    description:
      'Vitamin C blends with Botanical Hyaluronic Acid, Vitamin E, Witch Hazel, and Jojoba Oil in an anti aging, skin brightening formula designed to improve wrinkles and dark spots',
    rating: '4.3 out of 5',
  },
  {
    id: 3,
    name: 'Neutrogena Hydro Boost',
    category: 'Beauty picks',
    link: 'https://www.amazon.com/Neutrogena-Hydro-Hyaluronic-Hydrating-Moisturizer/dp/B00NR1YQHM/ref=sr_1_10?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-10',
    image:
      'https://m.media-amazon.com/images/I/71Bd6+BQQnL._AC_UL480_FMwebp_QL65_.jpg',
    price: 17.28,
    description:
      'Hydrating water-gel face moisturizer with hyaluronic acid to hydrate dry skin',
    rating: '4.6 out of 5',
  },
  {
    id: 4,
    name: 'Paulas Choice ',
    category: 'Beauty picks',
    link: 'https://www.amazon.com/Paulas-Choice-SKIN-PERFECTING-Exfoliant-Facial-Blackheads/dp/B00949CTQQ/ref=sr_1_19?qid=1647011643&rnid=16225006011&s=beauty-intl-ship&sr=1-19',
    image: 'https://m.media-amazon.com/images/I/61zhzjgd2xL._SY355_.jpg',
    price: 32.0,
    description:
      'Dramatically improves skins texture for radiant youthful even-toned skin.',
    rating: '4.6 out of 5',
  },
  {
    id: 5,
    name: '24K Gold Eye Mask',
    category: 'Beauty picks',
    link: 'https://www.amazon.com/Under-Eye-Mask-Patches-Patch/dp/B07N93XF4Z/ref=sr_1_25?qid=1647014998&rnid=16225006011&s=beauty-intl-ship&sr=1-25',
    image: 'https://m.media-amazon.com/images/I/71spgVC+reL._SY355_.jpg',
    price: 19.99,
    description:
      'Look Less Tired and Reduce Wrinkles and Fine Lines Undereye, Revitalize and Refresh Your Skin',
    rating: '4.3 out of 5',
  },
];
[
  { id: 1, name: 'CeraVe Moistrurizing Cream', category: 'Beauty picks' },
  { id: 2, name: 'TruSkin Vitamin C Serum', category: 'Beauty picks' },
  { id: 3, name: 'Neutrogena Hydro Boost', category: 'Beauty picks' },
  { id: 4, name: 'Paulas Choice', category: 'Beauty picks' },
  { id: 5, name: '24K Gold Eye Mask', category: 'Beauty picks' },
];
[
  {
    id: 6,
    name: 'Sensodyne Pronamel Gentle Toothpaste',
    category: 'Health & Personal Care',
    link: 'https://www.amazon.com/Sensodyne-Pronamel-Whitening-Strengthening-Toothpaste/dp/B0762LYFKP/ref=sr_1_16?pd_rd_r=705361c2-e572-4b7b-917c-302a410f8b1b&pd_rd_w=SRncx&pd_rd_wg=f5RZb&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647176795&s=beauty-intl-ship&sr=1-16',
    image: 'https://m.media-amazon.com/images/I/81C9weu1wVL._SY355_.jpg',
    price: 14.76,
    description:
      'Strong enamel toothpaste that offers effective protection against cavities and improves your overall tooth enamel health',
    rating: '4.8 out of 5',
  },
  {
    id: 7,
    name: 'CeraVe PM Facial Moisturizing Lotion',
    category: 'Health & Personal Care',
    link: 'https://www.amazon.com/CeraVe-Facial-Moisturizing-Lotion-Lightweight/dp/B00365DABC/ref=sr_1_20?pd_rd_r=705361c2-e572-4b7b-917c-302a410f8b1b&pd_rd_w=SRncx&pd_rd_wg=f5RZb&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647177111&s=beauty-intl-ship&sr=1-20',
    image: 'https://m.media-amazon.com/images/I/71yV0PZb1QL._SY355_.jpg',
    price: 12.39,
    description:
      'CeraVe Skincare is developed with dermatologists and has products suitable for dry skin, sensitive skin, oily skin, acne-prone, and more',
    rating: '4.7 out of 5',
  },
  {
    id: 8,
    name: 'TheraBreath Fresh Breath',
    category: 'Health & Personal Care',
    link: 'https://www.amazon.com/TheraBreath-Fresh-Breath-Rinse-Bottle/dp/B00IRKRK9O/ref=sr_1_25?pd_rd_r=705361c2-e572-4b7b-917c-302a410f8b1b&pd_rd_w=SRncx&pd_rd_wg=f5RZb&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647177111&s=beauty-intl-ship&sr=1-25',
    image: 'https://m.media-amazon.com/images/I/71hrL5CJnQS._SY355_.jpg',
    price: 15.38,
    description:
      'Fight and Breath: Our Fresh Breath Oral Rinse is a dentist-formulated mouthwash that targets sulfur-producing bacteria to help Fight and Breath.',
    rating: '4.8 out of 5',
  },
  {
    id: 9,
    name: 'CeraVe Eye REpair Cream',
    category: 'Health & Personal Care',
    link: 'https://www.amazon.com/CeraVe-Repair-Cream-Circles-Puffiness/dp/B00JJPMXDO/ref=sr_1_26?pd_rd_r=705361c2-e572-4b7b-917c-302a410f8b1b&pd_rd_w=SRncx&pd_rd_wg=f5RZb&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647177111&s=beauty-intl-ship&sr=1-26',
    image: 'https://m.media-amazon.com/images/I/81cxar7z8ZL._SY355_.jpg',
    price: 10.33,
    description:
      'Helps reduce the appearance of dark circles and puffiness in the under eye area.',
    rating: '4.4 out of 5',
  },
  {
    id: 10,
    name: 'Neutrogena Makeup Remover',
    category: 'Health & Personal Care',
    link: 'https://www.amazon.com/Neutrogena-Cleansing-Towelette-Waterproof-Individually/dp/B07GKVBQDG/ref=sr_1_28?pd_rd_r=705361c2-e572-4b7b-917c-302a410f8b1b&pd_rd_w=SRncx&pd_rd_wg=f5RZb&pf_rd_p=eab778f7-37cf-4c6b-9552-5370900592a9&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647177111&s=beauty-intl-ship&sr=1-28',
    image: 'https://m.media-amazon.com/images/I/71OMPXoZIqL._SY355_.jpg',
    price: 5.82,
    description:
      'Makeup remover facial cleansing towelettes work to dissolve all traces of dirt, removes bacteria, impurities, oil and makeup on skin while also removing pollution, sweat and sunscreen, for superior cleansing and makeup removing power at your fingertips',
    rating: '4.8 out of 5',
  },
];
[
  {
    id: 6,
    name: 'Sensodyne Pronamel Gentle Toothpaste',
    category: 'Health & Personal Care',
  },
  {
    id: 7,
    name: 'CeraVe PM Facial Moisturizing Lotion',
    category: 'Health & Personal Care',
  },
  {
    id: 8,
    name: 'TheraBreath Fresh Breath',
    category: 'Health & Personal Care',
  },
  {
    id: 9,
    name: 'CeraVe Eye REpair Cream',
    category: 'Health & Personal Cares',
  },
  {
    id: 10,
    name: 'Neutrogena Makeup Remover',
    category: 'Health & Personal Care',
  },
];
[
  {
    id: 11,
    name: 'Acer Aspire Processor',
    category: 'Shop Laptops & Tablets',
    link: 'https://www.amazon.com/Acer-TC-1660-UA92-i5-10400-Processor-Bluetooth/dp/B0983VYC6V/ref=sr_1_16?fst=as%3Aoff&pd_rd_r=1b01484e-a127-4746-b0d7-2915fbb07449&pd_rd_w=Bs0UA&pd_rd_wg=ZqijD&pf_rd_p=5b7fc375-ab40-4cc0-8c62-01d4de8b648d&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647178265&rnid=16225007011&s=computers-intl-ship&sr=1-16',
    image: 'https://m.media-amazon.com/images/I/81TFYhzaZVS._AC_SY450_.jpg',
    price: 569.9,
    description:
      'ROBUST COMPUTING HUB: Tackle any task—from basic computing to multimedia entertainment—every time you power up this beastly machine. Easily expandable and driven by an Intel Core i5 processor, it has the speed, power and storage to do more—everyday!',
    rating: '4.6 out of 5',
  },
  {
    id: 12,
    name: 'Acer Predator Helios',
    category: 'Shop Laptops & Tablets',
    link: 'https://www.amazon.com/Acer-Predator-PH315-54-760S-i7-11800H-Keyboard/dp/B092YHJLS6/ref=sr_1_10?fst=as%3Aoff&pd_rd_r=1b01484e-a127-4746-b0d7-2915fbb07449&pd_rd_w=Bs0UA&pd_rd_wg=ZqijD&pf_rd_p=5b7fc375-ab40-4cc0-8c62-01d4de8b648d&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647178265&rnid=16225007011&s=computers-intl-ship&sr=1-10',
    image: 'https://m.media-amazon.com/images/I/812G4qld7eS._AC_SY355_.jpg',
    price: 899.99,
    description:
      'Extreme Performance: Crush the competition with the impressive power and speed of the 11th Generation Intel Core i7-11800H processor, featuring 8 cores and 16 threads to divide and conquer any task or run your most intensive games',
    rating: '4.6 out of 5',
  },
  {
    id: 13,
    name: 'Samsung Galaxy Tab S6 Lite 10.4',
    category: 'Shop Laptops & Tablets',
    link: 'https://www.amazon.com/Samsung-Galaxy-Lite-Tablet-Angora/dp/B086Z3S3MY/ref=sr_1_17?fst=as%3Aoff&pd_rd_r=1b01484e-a127-4746-b0d7-2915fbb07449&pd_rd_w=Bs0UA&pd_rd_wg=ZqijD&pf_rd_p=5b7fc375-ab40-4cc0-8c62-01d4de8b648d&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647178265&rnid=16225007011&s=computers-intl-ship&sr=1-17',
    image: 'https://m.media-amazon.com/images/I/510pqO8ckKL._AC_SY355_.jpg',
    price: 219.99,
    description:
      'ONE UI CONNECTIVITY: Sync up multiple devices and double down on your todos with Galaxy Tab S6 Lite. Use it as a hotspot and create share-ready content all at once',
    rating: '4.8 out of 5',
  },
  {
    id: 14,
    name: 'Lenovo Tab M8 Tablet',
    category: 'Shop Laptops & Tablets',
    link: 'https://www.amazon.com/Lenovo-Android-Quad-Core-Proocessor-ZA5G0060US/dp/B07Y2KBBTD/ref=sr_1_22?fst=as%3Aoff&pd_rd_r=1b01484e-a127-4746-b0d7-2915fbb07449&pd_rd_w=Bs0UA&pd_rd_wg=ZqijD&pf_rd_p=5b7fc375-ab40-4cc0-8c62-01d4de8b648d&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647178265&rnid=16225007011&s=computers-intl-ship&sr=1-22',
    image: 'https://m.media-amazon.com/images/I/61o0EbhjKDL._AC_SX355_.jpg',
    price: 429.99,
    description:
      'Stunning performance and stylish design combine in this quick, powerful Android tablet, powered by a Quad-Core, 2.0 GHz processor and Android 9 Pie The modern, refined look and feel are accentuated by the full metal cover and 82% panel-to-body ratio',
    rating: '4.5 out of 5',
  },
  {
    id: 15,
    name: 'Pritom 7 inch Kids Tablet',
    category: 'Shop Laptops & Tablets',
    link: 'https://www.amazon.com/Bluetooth-Educationl-Parental-Pre-Installed-Kids-Tablet/dp/B08XTW614Y/ref=sr_1_32_sspa?fst=as%3Aoff&pd_rd_r=1b01484e-a127-4746-b0d7-2915fbb07449&pd_rd_w=Bs0UA&pd_rd_wg=ZqijD&pf_rd_p=5b7fc375-ab40-4cc0-8c62-01d4de8b648d&pf_rd_r=9A5SPE1PN10QS058HNQR&qid=1647178265&rnid=16225007011&s=computers-intl-ship&sr=1-32-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWjRUVlU2NEVMT1E0JmVuY3J5cHRlZElkPUEwOTU4MjA0MzdFUUpSMkU1TlU5MiZlbmNyeXB0ZWRBZElkPUEwNzkxODkxM1VUNFZFRFM2T1RGSyZ3aWRnZXROYW1lPXNwX2J0Zl9icm93c2UmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    image: 'https://m.media-amazon.com/images/I/81mQkhQbSnL._AC_SY355_.jpg',
    price: 129.0,
    description:
      'An ideal gift for birthday, Christmas, holiday season for kids or yourself. NOTE: For better experience, PLEASE send us a message if you have any problem.And please charge the tablet for 1 hour before the first time to use it.',
    rating: '3.7 out of 5',
  },
];
[
  {
    id: 11,
    name: 'Acer Aspire Processor',
    category: 'Shop Laptops & Tablets',
  },
  {
    id: 12,
    name: 'Acer Predator Helios',
    category: 'Shop Laptops & Tablets',
  },
  {
    id: 13,
    name: 'Samsung Galaxy Tab S6 Lite 10.4',
    category: 'Shop Laptops & Tablets',
  },
  {
    id: 14,
    name: 'Lenovo Tab M8 Tablet',
    category: 'Shop Laptops & Tablets',
  },
  {
    id: 15,
    name: 'Pritom 7 inch Kids Tablet',
    category: 'Shop Laptops & Tablets',
  },
];
[
  {
    id: 16,
    name: 'Brother Compact Monochrome Laser Printer',
    category: 'Electronics',
    link: 'https://www.amazon.com/Brother-Monochrome-HL-L2350DW-Two-Sided-Replenishment/dp/B0763WDSYZ/ref=sr_1_55?qid=1647180616&s=electronics&sr=1-55&srs=17938598011',
    image: 'https://m.media-amazon.com/images/I/71ryWtmAATL._AC_SX466_.jpg',
    price: 44.99,
    description:
      'Printing as mobile as you are. Print wirelessly from your desktop, laptop, smartphone and tablet',
    rating: '4.4 out of 5',
  },
  {
    id: 17,
    name: 'Logitech G Pro Wireless Gaming Mouse',
    category: 'Electronics',
    link: 'https://www.amazon.com/Logitech-Wireless-Gaming-Esports-Performance/dp/B07GCKQD77/ref=sr_1_74?qid=1647180761&s=electronics&sr=1-74&srs=17938598011',
    image: 'https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SX679_.jpg',
    price: 79.0,
    description:
      'Made with and for Pro Gamers: G Pro Wireless Gaming Mouse is the result of two years of work with professional esports gamers, combing advanced technologies in an ultra-lightweight design',
    rating: '4.7 out of 5',
  },
  {
    id: 18,
    name: 'SAMSUNG T5 Portable SSD 1TB - Up to 540MB/s',
    category: 'Electronics',
    link: 'https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_95?qid=1647180996&s=electronics&sr=1-95&srs=17938598011',
    image: 'https://m.media-amazon.com/images/I/81khZx00+tL._AC_SX679_.jpg',
    price: 68.99,
    description:
      'Superfast read write speeds: SSD with V-NAND offers ultra-fast data transfer speeds of up to 540MB s (up to 4.9x faster than external HDDs); Ideal for transferring large-sized data including 4K videos, high-resolution photos, games and more',
    rating: '4.8 out of 5',
  },
  {
    id: 19,
    name: 'Elgato Stream Deck - Live Content Creation Controller ',
    category: 'Electronics',
    link: 'https://www.amazon.com/Elgato-Stream-Deck-Controller-customizable/dp/B06XKNZT1P/ref=sr_1_100?qid=1647181118&s=electronics&sr=1-100&srs=17938598011',
    image: 'https://m.media-amazon.com/images/I/710R9YpV9nL._AC_SX679_.jpg',
    price: 127.83,
    description:
      '15 LCD keys: Tap to switch scenes, launch media, adjust audio and more',
    rating: '4.8 out of 5',
  },
  {
    id: 20,
    name: 'Fitbit Versa 2 Health and Fitness Smartwatch',
    category: 'Electronics',
    link: 'https://www.amazon.com/Fitbit-Fitness-Smartwatch-Tracking-Included/dp/B07TVC2KLW/ref=sr_1_108?qid=1647181258&s=electronics&sr=1-108&srs=17938598011',
    image: 'https://m.media-amazon.com/images/I/61L5Jko2QqL._AC_SX679_.jpg',
    price: 144.5,
    description:
      'Based on your heart rate, time asleep and restlessness, sleep score helps you better understand your sleep quality each night. Also track your time in light, deep and REM sleep stages and get personal insights',
    rating: '4.6 out of 5',
  },
];
[
  {
    id: 16,
    name: 'Brother Compact Monochrome Laser Printer',
    category: 'Electronics',
  },
  {
    id: 17,
    name: 'Logitech G Pro Wireless Gaming Mouse',
    category: 'Electronics',
  },
  {
    id: 18,
    name: 'Elgato Stream Deck - Live Content Creation Controller',
    category: 'Electronics',
  },
  {
    id: 19,
    name: 'Elgato Stream Deck - Live Content Creation Controller ',
    category: 'Electronics',
  },
  {
    id: 20,
    name: 'Fitbit Versa 2 Health and Fitness Smartwatch',
    category: 'Electronics',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
