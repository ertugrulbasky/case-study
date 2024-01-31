import React, { createContext, useState } from "react";


const CardContext = createContext();

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCard = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  return (
    <CardContext.Provider value={{ items, addToCard }}>
      {children}
    </CardContext.Provider>
  );
}
 export default CardContext;