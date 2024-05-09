import React from "react";
import Avatar from "../assets/Avatar.png";
import VerifiedTick from "../assets/Verified tick.png";
import profileImage from "../assets/Image-7.png";

const profileImageComponent = ({handleOpen}: any) => {

  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center">
        <div className="relative w-[60px]">
          <img
            className="w-[46px] h-p[46px] sm:w-[56px] sm:h-[56px]"
            src={profileImage}
          />
          <img
            className="absolute w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] sm:right-0 bottom-1 top-15 right-3 sm:top-10"
            src={VerifiedTick}
          />
        </div>
        <h2 className="ml-3 font-bold text-md sm:text-lg">Abdullah Nasir</h2>
      </div>

      <button
        className="py-2 px-4 bg-black text-sm text-white cursor-pointer rounded-lg focus-within:outline-0 focus:border-transparent "
        onClick={handleOpen}>
        Open modal
      </button>
    </div>
  );
};

export default profileImageComponent;
