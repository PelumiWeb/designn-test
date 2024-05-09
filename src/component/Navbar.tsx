import React from "react";
import homeMenu from "../assets/homeMenu.png";
import chevronRight from "../assets/chevron-right.png";
import { Tabs, TabsProps } from "antd";
import Table from "../component/Tables";


const Navbar = ({ active }: { active: boolean }) => {
const onChange = (key: string) => {
  console.log(key);
};
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: <Table />,
    },
    {
      key: "2",
      label: "Branch",
      children: <Table />,
    },
    {
      key: "3",
      label: "KYC Document",
      children: <Table />,
    },
    {
      key: "4",
      label: "Activity Log",
      children: <Table />,
    },
  ];
  return (
    <div className="mt-8">
      <Tabs
       className="tab-header"
        //   itemColor={"#667085"}
        //   itemHoverColor
        //   itemActiveColor={"#0B0E54"}
        //   itemSelectedColor={"#0B0E54"}
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default Navbar;
