import { Card, List } from "antd";
import React, { useEffect, useState, useContext } from "react";
import getBulletin from "../services/getBulletin";
import CardContext from "../context/CardContext";

const Bulletin = () => {
  const { addToCard, items, totalPrice } = useContext(CardContext);
  const [bulletin, setBulletin] = useState([]);
  useEffect(() => {
    getBulletin().then((tableData) => {
      setBulletin(tableData);
    });
  }, []);

  return (
    <>
      <Card
        title="Kupon Bilgileri"
        bordered={false}
        style={{
          width: 600,
          bottom: "0px",
          position: "fixed",
          zIndex: 999,
          marginRight: "auto",
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={items}
          split={false}
          renderItem={(item, index) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <List.Item>{item.name}</List.Item>
              <List.Item>{item.price}</List.Item>
            </div>
          )}
        />
        <div style={{ float: "right" }}>
          Toplam Tutar : {totalPrice.reduce((a, b) => a * b)} TL{" "}
        </div>
      </Card>

      <List
        dataSource={bulletin}
        renderItem={(item) => (
          <>
            <List.Item>
              <List.Item.Meta
                title={<div>{item?.eventInfo}</div>}
                description={item.eventName}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "1000px",
                }}
              >
                <div>{item?.comments}</div>
                <div>-</div>
                <button>{item?.x}</button>
                <div>-</div>
                <div>{item?.top}</div>
                <div>-</div>
                <div>-</div>
                <div>-</div>
                <div>-</div>
                <div>-</div>
                <div>{item.onex}</div>
                <div>{item.onetwo}</div>
                <div>{item.xtwo}</div>
                <div>3</div>
              </div>
            </List.Item>
          </>
        )}
      />
    </>
  );
};

export default Bulletin;
