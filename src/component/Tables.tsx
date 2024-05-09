import React, { useState } from "react";
import { Button, Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";

interface DataType {
  key: number;
  location: string;
  email: string;
  ipaddress: string;
  time: string;
  activityStatus: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Location",
    dataIndex: "location",
    render: (item) => <p className="text-[12px] sm:text-sm">{item}</p>,
  },
  {
    title: "Email",
    dataIndex: "email",
    render: (item) => <p className="text-[12px] sm:text-sm">{item}</p>,
  },
  {
    title: "IP Address",
    dataIndex: "ipaddress",
    render: (item) => <p className="text-[12px] sm:text-sm">{item}</p>,
  },
  {
    title: "Time",
    dataIndex: "time",
    render: (item) => <p className="text-[12px] sm:text-sm">{item}</p>,
  },
  {
    title: "Activity Status",
    dataIndex: "activityStatus",
    render: (item) => (
      // #B54708
      <div
        className={` w-[80px] rounded-full ${
          item === "Active"
            ? "border-[#067647] bg-[#ABEFC6]"
            : "bg-[#FEDF89] border-[#067647]"
        } border border-[#067647] bg-[#ABEFC6] sm:px-2 `}>
        <p
          className={`text-center ${
            item === "Active" ? "text-[#067647]" : "text:[#B54708]"
          }
          text-[#067647] text-[10px] sm:text-[12px] font-sans`}>
          {item}
        </p>
      </div>
    ),
  },
];

const tableData = [
  {
    key: 1,
    location: "Australia",
    email: "Chrome - Windows",
    ipaddress: "207.40.22.358",
    time: "3 days ago",
    activityStatus: "Active",
  },
  {
    key: 2,
    location: "Australia",
    email: "Safari - IOS",
    ipaddress: "207.40.22.358",
    time: "3 days ago",
    activityStatus: "Active",
  },
  {
    key: 3,
    location: "Australia",
    email: "Chrome - Windows",
    ipaddress: "207.40.22.358",
    time: "last week",
    activityStatus: "Expired",
  },
  {
    key: 4,
    location: "Australia",
    email: "Safari - IOS",
    ipaddress: "207.40.22.358",
    time: "3 days ago",
    activityStatus: "Signed out",
  },
  {
    key: 5,
    location: "Australia",
    email: "Chrome - Windows",
    ipaddress: "207.40.22.358",
    time: "last week",
    activityStatus: "Signed out",
  },
];
const data: DataType[] = tableData;

// for (let i = 0; i < 5; i++) {
//   data.push({
//     key: i,
//     location: "Australia",
//     email: 30,
//     ipaddress: "207.40.22.358",
//     time: "3 days ago",
//     activityStatus: "Active",
//   });
// }

const TableComponent: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="border border-gray-200 rounded-md py-4 my-4">
      <div className="flex justify-between items-center px-8">
        <h2 className="text-#101828 text-md sm:text-xl">Session Logs</h2>
        <button
          style={{ background: "#101828" }}
          className="p-2 text-white rounded-md text-[12px] sm:text-sm bg-[#101828]">
          Sign out All session
        </button>
      </div>

      <Divider />
      <Table scroll={{ x: true }} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableComponent;
