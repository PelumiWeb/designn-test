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
import SidebarComponent from "./sidebarComponent";
import ProfileComponent from "./ProfileComponent";


const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


const SideDrawer: React.FC = () => {
  return (
    <div
      className="hidden sm:flex max-w-1/4 py-2  flex-col flex-grow px-8 max-h-full "
      style={{ backgroundColor: "#0B0E54" }}>
      <img src={logo} className="my-6 w-[120px] h-[25px]  sm:w-[220px] sm:h-[42px] " />
      <div className="flex flex-col">
        {sideDrawerData.slice(0, 8).map((data: any) => (
          <SidebarComponent
            componentChildren={data.componentChildren}
            arrowRight={data.arrowRight}
            text={data.label}
            image={data.icon}
          />
        ))}
        <div>
          <p className="text-gray-500 font-sans">INTERNAL TOOLS</p>
          {sideDrawerData.slice(8, sideDrawerData.length).map((data: any) => (
            <SidebarComponent
              arrowRight={data.arrowRight}
              text={data.label}
              image={data.icon}
            />
          ))}
        </div>
        <ProfileComponent />
      </div>
    </div>
  );
};

export default SideDrawer;
