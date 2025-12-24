"use client";
import { WarningCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const Pricing = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full relative cursor-pointer">
      <WarningCircleIcon
        size={16}
        className="text-brand-brown-100 cursor-pointer"
        weight="bold"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />

      {show && (
        <div className="absolute left-5 top-0 px-4 py-2 shadow-md bg-white rounded-md border border-gray-400/30 text-[14px] w-48 z-10">
          <p>1 day = 24 hours</p>
          <p>Rent 2 days, free 1 day</p>
        </div>
      )}
    </div>
  );
};

export default Pricing;
