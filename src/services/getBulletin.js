import axios from "axios";

const getBulletin = async () => {
    let res = await axios.get(`https://nesine-case-study.onrender.com/bets`);
    return res;
};

export default getBulletin