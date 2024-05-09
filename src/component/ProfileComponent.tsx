import React from "react";
import image from "../assets/icon.png";
import Home from "../assets/home.png";
import arrowUp from "../assets/chevron-up.png";
import Avatar from "../assets/Avatar.png";
import LogoutButton from "../assets/Button.png";

const ProfileComponent = () => {
  return (
    <div className="flex  w-100 justify-between items-center py-3 mt-4 border-t-gray-300 border-t">
      <div className="flex">
        <img style={{ width: 48, height: 48 }} className="mr-2" src={Avatar} />
        <div>
          <p className="text-white font-bold font-sans">olivia Rhye</p>
          <p className="text-white font-semibold font-sans">olivia@</p>
        </div>
      </div>

      <img style={{ height: 48, width: 48 }} src={LogoutButton} />
    </div>
  );
};

export default ProfileComponent;
