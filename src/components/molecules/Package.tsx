import Image from "next/image";
import React from "react";
import { ProductListCardProps } from "./ProductListCard";

const Package = ({ src, title }: ProductListCardProps) => {
  return (
    <div className="w-fit py-5">

      <div className="w-40 rounded-md space-y-4 group animates hover:shadow-lg overflow-hidden text-center py-4 bg-white border border-gray-600/30 shadow-md">
        <div className="w-40 h-40 overflow-hidden">
          <Image
            src={src}
            alt={`${title}-img`}
            width={200}
            height={200}
            className="object-cover p-10"
          />
        </div>

        <h1 className="line-clamp-2 font-medium px-4">{title}</h1>
      </div>
    </div>
  );
};

export default Package;
