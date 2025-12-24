"use client";
import { products } from "@/libs/data/products";
import React, { useEffect, useState } from "react";
import ProductListCard from "../molecules/ProductListCard";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

const ProductList = () => {
  const [limit, setLimit] = useState(ITEMS_PER_PAGE);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const limitProducts = products.slice(0, limit);

  useEffect(() => {
    if (inView && limit < products.length) {
      setTimeout(() => {
        setLimit((prev) => prev + ITEMS_PER_PAGE);
      }, 500);
    }
  }, [inView, limit]);

  return (
    <div>
      <div className="grid grid-cols-5 gap-y-5 gap-x-1">
        {limitProducts.map((product) => (
          <Link href={`/product-detail/${product.slug}`} key={product.id}>
            <ProductListCard
              src={
                product.images?.[0]?.image
                  ? `/images/products/${product.images[0].image}`
                  : "/images/products/_default.jpg"
              }
              title={product.title}
              priceday={product.price}
              pricedays={product.price * 2}
            />
          </Link>
        ))}
      </div>

      {/* TRIGGER INFINITE LOADING */}
      {limit < products.length && (
        <div ref={ref} className="flex justify-center p-10 items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="ml-2 text-gray-500">Loading more products...</p>
        </div>
      )}

      {/* PRODUCT DITAMPILKAN SEMUA */}
      {limit >= products.length && (
        <p className="text-center p-10 text-gray-400">
          Semua produk telah ditampilkan.
        </p>
      )}
    </div>
  );
};

export default ProductList;
