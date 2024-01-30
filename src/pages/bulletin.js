import { Table } from "antd";
import React, { useEffect, useState } from "react";
import getBulletin from "../services/getBulletin";

const columns = [
  {
    title: "Event Count: 3000",
    dataIndex: "LN",
    key: "LN",
    width: 400,
    render: (text, record) => {
      console.log(record);
      return (
        <div style={{ display: "list-item" }}>
          <div>
            {record.D} {record.DAY} {record.LN}
          </div>
          <div>
            {record.C} {record.T} {record.N}
          </div>
        </div>
      );
    },
  },
  {
    title: "Yorumlar",
    dataIndex: "MBS",
    key: "MBS",
    render: (text, record) => {
        console.log(record);
        return <div>{4}</div>;
      },
  },
  {
    title: "1",
    dataIndex: "",
    key: "",
  },
  {
    title: "x",
    dataIndex: "",
    key: "",
    render: (text, record) => {
      console.log(record);
      return <div>{record?.OCG[1].OC[1]?.O}</div>;
    },
  },
  {
    title: "2",
    dataIndex: "",
    key: "",
  },
  {
    title: "ALT",
    dataIndex: "",
    key: "",
  },
  {
    title: "ÜST",
    dataIndex: "",
    key: "",
    render: (text, record) => {
      console.log(record);
      return <div>{record?.OCG[5]?.OC[26]?.O}</div>;
    },
  },
  {
    title: "H1",
    dataIndex: "",
    key: "",
  },
  {
    title: "1",
    dataIndex: "",
    key: "",
  },
  {
    title: "x",
    dataIndex: "",
    key: "",
  },
  {
    title: "2",
    dataIndex: "",
    key: "",
  },
  {
    title: "H2",
    dataIndex: "",
    key: "",
  },
  {
    title: "1-X",
    dataIndex: "",
    key: "",
    render: (text, record) => {
      console.log(record);
      return <div>{record?.OCG[2].OC[3]?.O}</div>;
    },
  },
  {
    title: "1-2",
    dataIndex: "",
    key: "",
    render: (text, record) => {
      console.log(record);
      return <div>{record?.OCG[2].OC[4]?.O}</div>;
    },
  },
  {
    title: "X-2",
    dataIndex: "",
    key: "",
    render: (text, record) => {
      console.log(record);
      return <div>{record?.OCG[2].OC[5]?.O}</div>;
    },
  },
  {
    title: "VAR",
    dataIndex: "",
    key: "",
  },
  {
    title: "YOK",
    dataIndex: "",
    key: "",
  },
  {
    title: "+99",
    dataIndex: "",
    key: "",
    render: (text, record) => {
        console.log(record);
        return <div>{3}</div>;
      },
  },
];

const Bulletin = () => {
  const [bulletin, setBulletin] = useState([]);
  useEffect(() => {
    getBulletin().then((res) => {
      setBulletin(res?.data);
    });
  }, []);
  return <Table pagination={false} dataSource={bulletin} columns={columns} />;
};

export default Bulletin;
