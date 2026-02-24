import fetchOpenPositions from "../services/openPositions.js";

const openPositionsControll = async (req, res) => {
    try {
        const positions = req.params;
        const data = await fetchOpenPositions(positions);
        res.status(200).json({status: "success", payload: data});
    } catch (error) {
        console.log("[CONTROLLER] Fail fetching open positions data.");
        res.status(500).json({status: "error", message: error.message});
    }
}

export default openPositionsControll;