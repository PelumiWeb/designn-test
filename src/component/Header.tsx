import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import logo from "../assets/icon.png";
import { sideDrawerData } from "./sideDrawerData";
import search from "../assets/search-lg.png";
import Notification from "../assets/navButton.png"
import Avatar from "../assets/Avatar.png"

const Header: React.FC = () => {
  return (
    <div className="flex justify-between bg-white items-center flex-1 px-4 border-b border-gray-200 py-4">
      {/*  */}
      <div className="flex flex-full w-7/12 bg-gray-200 rounded-md py-4 px-2">
        <img  className="mr-5 w-[20px] h-[20px]" src={search} />
        <input
          placeholder="Search"
          className="text-md text-gray-300 bg-transparent border-none focus:border-none w-full outline-none"
        />
      </div>
      {/*  */}
      <div className="flex ">
        <img className="mr-5 w-[40px] h-[40px]" src={Notification} />
        <img
          className="mr-5 w-[40px] h-[40px]"
          src={Avatar}
        />
      </div>
    </div>
  );
};

export default Header;
