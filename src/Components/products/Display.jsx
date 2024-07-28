import React from "react";
import { Btn1 } from "../Buttons";
import { MdFavoriteBorder } from "react-icons/md";

import Product from "../../Product.json";

// function () {
const Display = ({ image, title, price }) => {
  return (
    <>
      {Product.map((item) => {
        return (
          <div id="box" className="w-[25rem] h-full ">
            <div id="card" className="rounded-md ">
              <div id="card-image" className="h-[20rem]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div id="card_details" className="p-4">
                <div>
                  <h1 className="text-[32px] font-bold">{item.title}</h1>
                  <h4 className="text-[20px] font-normal text-[#dadada]">
                    {/* {props.des} */}
                  </h4>
                  <p>
                    Rs: <span>{item.Price}</span>
                  </p>
                </div>

                <div className="pt-4 flex justify-between ">
                  <div>
                    <Btn1 />
                  </div>
                  <div className="text-[32px]">
                    <MdFavoriteBorder />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
// }

export default Display;
