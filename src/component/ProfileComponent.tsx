import React from "react";
import image from "../assets/icon.png";
import Home from "../assets/home.png";
import arrowUp from "../assets/chevron-up.png";
import Avatar from "../assets/Avatar.png";
import LogoutButton from "../assets/Button.png";

const ProfileComponent = () => {
  return (
    <div className="flex  w-100 justify-between items-center py-3 mt-4 border-t-gray-600 border-t">
      <div className="flex">
        <img className="w-[48px] h-[48px] mr-2" src={Avatar} />
        <div>
          <p className="text-white font-semibold text-sm md:text-md font-sans">
            olivia Rhye
          </p>
          <p className="text-white font-thin text-sm md:text-md  font-sans">
            olivia@untitledui.com
          </p>
        </div>
      </div>

      <img
        className="w-[34px] h-[34px] lg:w-[48px] lg:h-[48px]"
        src={LogoutButton}
      />
    </div>
  );
};

export default ProfileComponent;
