import React from "react";

export default function CardCom({ item }) {
  return (
    <div className={`${item.className} transform transistion hover:scale-105`}>
      <div className="p-8">
        <div className="text-2xl font-bold ">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          Shop NOW +
        </div>
      </div>
      <div>
        <img src={item.src} className="h-40 w-56 absolute top-5 left-[40%]" />
      </div>
    </div>
  );
}
