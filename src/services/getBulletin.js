import axios from "axios";

const getBulletin = async () => {
    let res = await axios.get(`https://nesine-case-study.onrender.com/bets`);
    const tableData = [];
     
    res.data.map(item => {
        tableData.push({
            "eventInfo" : item?.D + " " + item?.DAY + " " + item?.LN,
            "eventName" : item?.C + " " + item?.T + " " + item?.N,
            "comments" : 4,
            "x" : item?.OCG[1].OC[1]?.O,
            "top": item?.OCG[5]?.OC[26]?.O,
            "onex": item?.OCG[2].OC[3]?.O,
            "onetwo" : item?.OCG[2].OC[4]?.O,
            "xtwo" : item?.OCG[2].OC[5]?.O
        })
    })
    return tableData;
};

export default getBulletin