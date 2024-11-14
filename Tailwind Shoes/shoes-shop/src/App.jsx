import React from "react";
import NavCom from "./components/NavCom";
import ShoesDetailsCom from "./components/ShoesDetailsCom";
import CardCom from "./components/CardCom";
import { SHOE_LIST } from "./constant";
import NewArrivalsCom from "./components/NewArrivalsCom";

export default function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <NavCom></NavCom>
      <ShoesDetailsCom></ShoesDetailsCom>
      {/* <CardCom item={SHOE_LIST[0]}></CardCom> */}
      <NewArrivalsCom items={SHOE_LIST}></NewArrivalsCom>
    </div>
  );
}
