import { Button, Table } from "antd";
import React, { useEffect, useState, useContext } from "react";
import getBulletin from "../services/getBulletin";
import CardContext from "../context/CardContext";

const columns = [
  {
    title: "Event Count: 3000",
    dataIndex: "LN",
    key: "LN",
    width: 400,
    render: (text, record) => {
      console.log(record)
      return (
        <div style={{ display: "list-item" }}>
          <div>
            {record.eventInfo}
          </div>
          <div>
            {record.eventName} 
          </div>
        </div>
      );
    },
  },
  
  {
    title: "Yorumlar",
    dataIndex: "comments",
    key: "comment",
  },
  
  {
    title: "1",
    dataIndex: "",
    key: "",
  },
  {
    title: "x",
    dataIndex: "x",
    key: "x",
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
    dataIndex: "top",
    key: "top",
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
    dataIndex: "1x",
    key: "1x",
  },
  {
    title: "1-2",
    dataIndex: "12",
    key: "12",
  },
  {
    title: "X-2",
    dataIndex: "x2",
    key: "x2",
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
    render: (text, record,index) => {
      return <div>{3}</div>;
    },
  },
  
];

const Bulletin = () => {
  const { addToCard, items } = useContext(CardContext);

  const [bulletin, setBulletin] = useState([]);
  useEffect(() => {
    getBulletin().then((tableData) => {
      setBulletin(tableData)
    });
  }, []);

  return <Table pagination={false} dataSource={bulletin}  columns={columns} />;
};

export default Bulletin;
