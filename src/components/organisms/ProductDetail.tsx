import React from "react";
import Carousel from "../molecules/Carousel";
import InfoProduct, { DetailCardProps } from "../molecules/InfoProduct";

const ProductDetail = ({ product }: DetailCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 border p-10 w-full h-full max-w-5xl relative">
      <Carousel images={product.images} />
      <InfoProduct
        name={product.name}
        manufacturer={product.manufacturer?.name}
        price={product.price}
      />
    </div>
  );
};

export default ProductDetail;
