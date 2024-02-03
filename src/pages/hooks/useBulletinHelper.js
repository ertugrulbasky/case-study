
import getBulletin from "../../services/getBulletin";
import { useEffect, useState } from "react";

const useBulletinHelper = () => {
  const [bulletin, setBulletin] = useState([]);
  
  useEffect(() => {
    getBulletin().then((tableData) => {
      setBulletin(tableData);
    }).catch(console.log("error"));
  }, []);

  return { bulletin };
};

export default useBulletinHelper;
