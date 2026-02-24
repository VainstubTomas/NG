import fetchCandidateInformation from "../services/candidateInformation.js";

const candidateInformationControll = async (req, res) => {
    try {
        const email = req.params.candidateEmail;
        const data = await fetchCandidateInformation(email);
        res.status(200).json({status: "success", payload: data});
    } catch (error) {
        console.log("[CONTROLLER] Fail fetching candidate data.");
        res.status(500).json({status: "error", message: error.message});
    }
}

export default candidateInformationControll;