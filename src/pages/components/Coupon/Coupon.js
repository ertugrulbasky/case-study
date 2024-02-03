import { Card, List } from "antd";
import React, { useContext } from "react";
import CouponContext from "../../../context/CouponContext";
import "./styles/coupon.scss";

const Coupon = () => {
  const { items, amount } = useContext(CouponContext);

  return (
    <Card title="Kupon Bilgileri" bordered={false} className="couponCard">
      <List
        itemLayout="horizontal"
        dataSource={items}
        split={false}
        renderItem={(item, index) => (
          <div className="eventList">
            <List.Item>{item.name}</List.Item>
            <List.Item>{item.price}</List.Item>
          </div>
        )}
      />
      <div className="totalAmountInfo">
        Toplam Tutar : {amount === 1 ? 0 : amount.toFixed(2)} TL
      </div>
    </Card>
  );
};

export default Coupon;
