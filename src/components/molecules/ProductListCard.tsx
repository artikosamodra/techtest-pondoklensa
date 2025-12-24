import { formatIDR } from "@/libs/utils/format";
import Image from "next/image";
import React from "react";

export type ProductListCardProps = {
  src: string;
  title?: string;
  priceday?: number;
  pricedays?: number;
};

const ProductListCard = ({
  src,
  title,
  priceday,
  pricedays,
}: ProductListCardProps) => {
  return (
    <div className="group flex flex-col items-center justify-center animates hover:bg-gray-100 hover:shadow-lg rounded-md overflow-hidden text-center py-4 bg-white">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={src}
          alt={`${title}-img`}
          fill
          className="object-cover p-10"
        />
      </div>

      <div className="px-10 space-y-2">
        <h1 className="line-clamp-2 font-medium">{title}</h1>
        <div>
          <p className="group-hover:text-brand-brown-200 animates">
            {formatIDR(priceday)}
          </p>
          <p className="group-hover:text-brand-brown-200 animates">
            {formatIDR(pricedays)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
