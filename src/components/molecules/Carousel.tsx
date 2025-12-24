"use client";
import { ProductImage } from "@/libs/type";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Carousel = ({ images }: { images: ProductImage[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(
        scrollRef.current.scrollLeft / scrollRef.current.offsetWidth
      );
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * index,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="w-full space-y-4">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full min-h-80 flex overflow-x-hidden snap-x snap-mandatory no-scrollbar rounded-2xl border border-gray-700/30 bg-white relative"
        >
          {images.map((img) => (
            <div key={img.id} className="min-w-full snap-center relative">
              <Image
                src={`/images/products/${img.image}`}
                alt="Product"
                fill
                className="object-contain p-10"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-start gap-2 overflow-x-auto no-scrollbar py-2">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              onClick={() => scrollTo(idx)}
              className={`relative h-16 w-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === idx
                  ? "border-blue-600 scale-105"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={
                  img.image
                    ? `/images/products/${img.image}`
                    : "/images/products/_default.jpg"
                }
                alt={`Thumbnail ${idx}`}
                fill
                className="object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
