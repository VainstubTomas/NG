import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const BASE_URL = process.env.BASE_URL;

const fetchCandidateInformation = async (candidateEmail) => {
    try {
        const url = `${BASE_URL}/api/candidate/get-by-email?email=${candidateEmail}`;
        const response = await axios.get(url);
        console.log("[SERVICES] Candidate information: ", response.data);
        return response.data;
    } catch (error) {
        console.log("[SERVICES] Error fetching candidate information: ", error);
    }
}

export default fetchCandidateInformation;