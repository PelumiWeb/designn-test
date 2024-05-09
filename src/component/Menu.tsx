import React from "react";
import homeMenu from "../assets/homeMenu.png";
import chevronRight from "../assets/chevron-right.png";

const Menu: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-white py-5 w-[300px] sm:w-[400px]">
      {/*  */}
      <div className="flex items-center w-[20px] sm:w-[50px]">
        <img
          className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
          src={homeMenu}
        />
        <img
          className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
          src={chevronRight}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-[12px] sm:text-sm  text-center mr-2 font-sans">
          User Management
        </p>
        <img
          className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
          src={chevronRight}
        />
      </div>

      <div className="flex items-center border-transparent round-md bg-gray-100 p-2 cursor-pointer">
        <p className="text-[10px] sm:text-sm  text-center mr-2 font-sans">
          Abdullah Nasir
        </p>
        {/* <img style={{ width: 14, height: 14 }} src={chevronRight} /> */}
      </div>
    </div>
  );
};

export default Menu;
