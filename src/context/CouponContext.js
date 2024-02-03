import React, { createContext, useState } from "react";

const CouponContext = createContext();

export function CouponProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCard = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  const prices = [1];

  items.map((item) => prices.push(item.price));

  const amount = prices.reduce((a, b) => a * b);

  return (
    <CouponContext.Provider value={{ items, addToCard, amount }}>
      {children}
    </CouponContext.Provider>
  );
}
export default CouponContext;
