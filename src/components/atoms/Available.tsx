"use client";
import { CircleIcon, WarningCircleIcon } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const Available = () => {
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
        <div className="absolute left-5 top-0 px-6 py-4 shadow-md bg-white rounded-md border border-gray-400/30">
          <p className="font-medium mb-2">Availability Info</p>
          <div>
            <div className="flex items-center gap-2">
              <CircleIcon
                size={10}
                weight="fill"
                className="text-brand-green-200"
              />
              <div>Available</div>
            </div>
            <div className="flex items-center gap-2">
              <CircleIcon
                size={10}
                weight="fill"
                className="text-brand-yellow-200"
              />
              <div>Available by request</div>
            </div>
            <div className="flex items-center gap-2">
              <CircleIcon
                size={10}
                weight="fill"
                className="text-brand-red-200"
              />
              <div>Unvailable</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Available;
