import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Apple iPhone 13-Blue",
    subtext: "Why iPhone? There's no phone like iPhone.",
    price: 74900,
    originalprice: 79900,
    discount: 5000,
    category: "phone",
    brand: "apple",
    rating: 4,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648491357/phone_fznttf.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "Apple iPhone 13-Black",
    subtext: "Why iPhone? There's no phone like iPhone.",
    price: 74900,
    originalprice: 79900,
    discount: 5000,
    category: "phone",
    brand: "apple",
    rating: 5,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648491405/iphoneimg2-removebg-preview_tkbt8b.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "Boat Stone 180",
    subtext: "Plug into nirvana.",
    price: 999,
    originalprice: 2490,
    discount: 1491,
    category: "speaker",
    brand: "boat",
    rating: 3,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648572802/boatsp-removebg-preview_q9xzwk.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "Boat bassheads",
    subtext: "Plug into nirvana.",
    price: 499,
    originalprice: 1490,
    discount: 800,
    category: "earphone",
    brand: "boat",
    rating: 3,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648572930/61sfYz4Rx1L._SL1500_-removebg-preview_ihtgre.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "samsung Level U2",
    subtext: "Better normal for all.",
    price: 2799,
    originalprice: 2999,
    discount: 200,
    category: "earphone",
    brand: "samsung",
    rating: 2,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648573068/samsung-level-u2-bluetooth-headset-removebg-preview_yprjwy.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "samsung A50",
    subtext: "Better normal for all.",
    price: 17000,
    originalprice: 20000,
    discount: 3000,
    category: "phone",
    brand: "samsung",
    rating: 1,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648573181/72128-removebg-preview_uayfe0.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "HP Chromebook",
    subtext: "Better normal for all.",
    price: 25990,
    originalprice: 29990,
    discount: 4000,
    category: "laptop",
    brand: "hp",
    rating: 5,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648573266/grey-hp-chromebook-laptop-11549346109aiahzfgalw-removebg-preview_jb1try.png",
    inStock: false,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "HP envy X360",
    subtext: "Better normal for all.",
    price: 72200,
    originalprice: 88200,
    discount: 1600,
    category: "laptop",
    brand: "hp",
    rating: 4,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648573329/kisspng-laptop-hp-envy-x360-15-bp100-series-hewlett-packar-5b0e4e86068082.3931223515276642620266-removebg-preview_v1cr2f.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "2020 apple macbook air",
    subtext: "Think different",
    price: 84990,
    originalprice: 92990,
    discount: 8000,
    category: "laptop",
    brand: "apple",
    rating: 3,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648573426/images-removebg-preview_ktb3vn.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "Fasttrack reflex 3.0",
    subtext: "Effortlessly cool.",
    price: 1795,
    originalprice: 2795,
    discount: 1000,
    category: "smartwatch",
    brand: "fastrack",
    rating: 1,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1648573537/71-i9q1lVPL._UL1500_-removebg-preview_cttdpp.png",
    inStock: true,
    quantity: 100,
  },
  {
    _id: uuid(),
    name: "Samsung Galaxy Tab A7 Lite",
    subtext: "Better normal for all.",
    price: 11499,
    originalprice: 14500,
    discount: 3000,
    category: "tablet",
    brand: "samsung",
    rating: 2,
    image:
      "https://res.cloudinary.com/de5it79dw/image/upload/v1649052203/SamsungGalaxyTabA7Lite__1_-removebg-preview_gayjyd.png",
    inStock: true,
    quantity: 100,
  },
];
