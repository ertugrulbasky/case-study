import { useContext } from "react";
import CouponContext from "../../../context/CouponContext";
import { Table } from "antd";
import useBulletinHelper from "../../hooks/useBulletinHelper";
import React from "react";
import "./styles/dataTable.scss";

const DataTable = () => {
  const { addToCard } = useContext(CouponContext);
  const { bulletin } = useBulletinHelper();

  const columns = [
    {
      title: "Event Count: 3000",
      dataIndex: "LN",
      key: "LN",
      width: 400,
      render: (text, record) => {
        return (
          <div className="tableEventRow">
            <div>{record.eventInfo}</div>
            <div>{record.eventName}</div>
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
      render: (text, record, index) => {
        return (
          <a onClick={(e) => addToCard(record?.eventName, parseFloat(text))}>
            {record?.x}
          </a>
        );
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
      dataIndex: "top",
      key: "top",
      render: (text, record, index) => {
        return (
          <a onClick={(e) => addToCard(record?.eventName, parseFloat(text))}>
            {record?.top}
          </a>
        );
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
      dataIndex: "onex",
      key: "onex",
      render: (text, record, index) => {
        return (
          <a onClick={(e) => addToCard(record?.eventName, parseFloat(text))}>
            {record?.onex}
          </a>
        );
      },
    },
    {
      title: "1-2",
      dataIndex: "onetwo",
      key: "onetwo",
      render: (text, record, index) => {
        return (
          <a onClick={(e) => addToCard(record?.eventName, parseFloat(text))}>
            {record?.onetwo}
          </a>
        );
      },
    },
    {
      title: "X-2",
      dataIndex: "xtwo",
      key: "xtwo",
      render: (text, record, index) => {
        return (
          <a onClick={(e) => addToCard(record?.eventName, parseFloat(text))}>
            {record?.xtwo}
          </a>
        );
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
        return <div>{3}</div>;
      },
    },
  ];

  return <Table columns={columns} pagination={false} dataSource={bulletin} />;
};

export default DataTable;
