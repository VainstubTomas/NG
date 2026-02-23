import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const BASE_URL = process.env.BASE_URL;

//POST {BASE_URL}/api/candidate/apply-to-job
const postApply = async (candidateData) => {
    try {
        const url = `${BASE_URL}/api/candidate/apply-to-job`;
        const response = await axios.post(url, candidateData);
        console.log("[SERVICES] Apply to job sended");
        return response.data;
    } catch (error) {
        console.log("[SERVICES] Error fetching open positions: ", error);
    }
}

export default postApply;