import React from "react";
import CardCom from "./CardCom";

export default function NewArrivalsCom({ items }) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url(./assets/lines.png)] bg-center text-4xl font-extrabold ">
          NEW ARRIVALS
        </div>
      </div>
      <div className="mt-20 justify-between grid gap-y-24 gap-x-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item) => (
          <CardCom item={item}></CardCom>
        ))}
      </div>
    </div>
  );
}
