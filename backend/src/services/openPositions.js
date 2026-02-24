import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const BASE_URL = process.env.BASE_URL;

const fetchOpenPositions = async () => {
    try {
        const url = `${BASE_URL}/api/jobs/get-list`;
        const response = await axios.get(url);
        console.log("[SERVICES] Open positions: ", response.data);
        return response.data;
    } catch (error) {
        console.log("[SERVICES] Error fetching open positions: ", error);
    }
}

export default fetchOpenPositions;