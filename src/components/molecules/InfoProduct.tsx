"use client";
import {
  CircleIcon,
  ListIcon,
  QrCodeIcon,
} from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import Button from "../atoms/Button";
import { formatIDR } from "@/libs/utils/format";
import Available from "../atoms/Available";
import Pricing from "../atoms/Pricing";
import PriceChart from "./PriceChart";

export type DetailCardProps = {
  id: string;
  title: string;
  name: string;
  manufacturer?: string;
  price: number;
};

const InfoProduct = ({ name, manufacturer, price }: DetailCardProps) => {
  const [view, setView] = useState(false);
  const handleClick = () => {
    setView(true);
  };
  const handleClose = () => {
    setView(false);
  };
  return (
    <div className="space-y-4 relatice">
      {/* Title and Brand */}
      <div className="p-5 border-b border-gray-300">
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-sm">
          Brand{" "}
          <span className="text-brand-brown-100 font-medium">
            {manufacturer}
          </span>{" "}
        </p>
      </div>

      {/* Price  */}
      <div className="flex justify-between p-5 border-b border-gray-300">
        <div>
          <div className="w-full flex gap-1 relative">
            <div className="w-full whitespace-nowrap">
              <span className="font-bold text-xl">{formatIDR(price)}</span> /
              days{" "}
            </div>
            <Pricing />
          </div>
          <div className="text-sm">
            <span className="font-bold text-brand-brown-100">
              {formatIDR(price * 2)}
            </span>{" "}
            / 3 days{" "}
          </div>
        </div>

        <button
          onClick={handleClick}
          className="font-medium text-brand-brown-100 flex gap-2 items-center cursor-pointer drop-shadow-sm"
        >
          <div>Price Chart</div> <ListIcon size={20} />
        </button>
      </div>

      {/* Available */}
      <div className="p-5 border-b border-gray-300">
        <div className="flex gap-1">
          Available
          <Available />
        </div>
        <div className="flex items-center gap-2">
          <CircleIcon
            size={10}
            weight="fill"
            className="text-brand-green-200"
          />
          <div>Jakarta</div>
        </div>
        <div className="flex items-center gap-2">
          <CircleIcon
            size={10}
            weight="fill"
            className="text-brand-green-200"
          />
          <div>Surabaya</div>
        </div>
      </div>

      {/* Button Action */}
      <div className="flex gap-2">
        <Button className="w-full h-full flex items-center justify-center gap-2 border-2 border-brand-brown-100 bg-brand-brown-100 text-white font-medium hover:bg-gray-900 animates">
          <div>Add to Project</div>
          <QrCodeIcon size={20} weight="bold" />
        </Button>
        <Button className="w-full h-full bg-white text-brand-brown-100 border-2 border-brand-brown-100 hover:bg-gray-900 hover:text-white animates">
          Book Now
        </Button>
      </div>

      {view && <PriceChart basePrice={price} onClick={handleClose} />}
    </div>
  );
};

export default InfoProduct;
