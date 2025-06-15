import React from "react";
import IP from "../../assets/Images/Category Images/Indoor Plant/IP 3.jpeg";
import ProductCard from "../../Components/Product/ProductCard";
import MyLoader from "../../utils/MyLoader";

const demoProducts = [
  {
    id: 1,
    title: "Motorola G85 5G (Cobalt Blue, 128 GB)",
    category: "Mobile",
    price: "₹15,999",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
    description:
      "Motorola G85 5G features a vibrant 6.67-inch Full HD+ 120Hz pOLED display, powerful Snapdragon 6s Gen 3 processor, 8GB RAM, and 128GB storage. Capture stunning photos with a 50MP OIS dual camera and enjoy all-day battery life with a 5000mAh battery. A sleek, reliable choice for everyday performance."
  },
  {
    id: 2,
    title: "Samsung Galaxy M14 (Smoky Teal, 128 GB)",
    category: "Mobile",
    price: "₹13,499",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
    description:
      "Samsung Galaxy M14 offers a large 6.6-inch PLS LCD display, Exynos 1330 processor, 6GB RAM, and 128GB storage. Great for streaming and multitasking with a long-lasting 6000mAh battery."
  },
  {
    id: 3,
    title: "Redmi Note 12 (Frosted Green, 128 GB)",
    category: "Mobile",
    price: "₹14,999",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
    description:
      "Redmi Note 12 features a 120Hz AMOLED display, Snapdragon 685 processor, and 5000mAh battery. Designed for smooth performance and photography enthusiasts."
  },
  {
    id: 4,
    title: "Realme Narzo N55 (Prime Blue, 128 GB)",
    category: "Mobile",
    price: "₹10,999",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
    description:
      "Realme Narzo N55 boasts a 6.72-inch display, MediaTek Helio G88 processor, and fast charging 5000mAh battery, perfect for everyday tasks."
  },
  {
    id: 5,
    title: "iQOO Z7 5G (Norwegian Blue, 128 GB)",
    category: "Mobile",
    price: "₹16,999",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
    description:
      "iQOO Z7 5G brings a powerful MediaTek Dimensity 920 processor, AMOLED display, and 64MP OIS camera for high performance and crisp shots."
  },
  {
    id: 6,
    title: "OnePlus Nord CE 3 Lite (Pastel Lime, 128 GB)",
    category: "Mobile",
    price: "₹19,999",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
    description:
      "OnePlus Nord CE 3 Lite features a 108MP camera, 67W SUPERVOOC charging, and 120Hz display for an ultra-smooth experience."
  }

];

const ProductsPage = () => {
  return (
    <>
    <div className="flex flex-col gap-2 px-2">
      {demoProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
        
      ))}
    </div>
    </>
  );
};

export default ProductsPage;