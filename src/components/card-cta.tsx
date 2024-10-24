import React from "react";
import trophy from "../assets/trophy.svg";

const CTACard = () => {
  return (
    <div className="relative bg-warn h-28 flex items-center pl-5 pr-4 shadow">
      <img width={53} height={40} src={trophy} className=" shrink-0 mr-6" />
      <h3 className=" font-bold text-secondary text-lg [text-shadow:_0_1px_0_#fff]">Go Pro Upgrade Now</h3>
      <div className=" absolute top-0 right-4 flex items-center justify-center bg-secondary text-warn w-[4.125rem] h-[4.687rem] font-semibold text-lg">$1</div>
    </div>
  );
};

export default CTACard;
