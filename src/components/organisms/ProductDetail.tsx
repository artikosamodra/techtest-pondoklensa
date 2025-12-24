import React from "react";
import Carousel from "../molecules/Carousel";
import InfoProduct from "../molecules/InfoProduct";
import Package from "../molecules/Package";
import { ProductType } from "@/libs/type";

export type ProductDetailProps = {
  product: ProductType;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="w-fit h-full">
      <div className="grid grid-cols-2 gap-8 border p-10 w-full h-full max-w-5xl relative">
        <Carousel images={product.images} />
        <InfoProduct
          id={product.id}
          name={product.name}
          manufacturer={product.manufacturer}
          price={product.price}
          slug={product.slug}
          images={product.images}
        />
      </div>

      <div className="py-10">
        <h1 className="font-medium text-xl text-brand-brown-100">Package</h1>

        <div className="flex gap-4">
          {product.default_package?.components?.map((item: any) => (
            <Package
              key={item.id}
              title={item.product.name}
              src={`/images/products/${item.product.image.image}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
