import postApply from "../services/sendApply.js";

const postApplyControll = async (req, res) => {
    try {
        const apply = req.body;
        const data = await postApply(apply);
        res.status(200).json({status: "success", payload: data});
    } catch (error) {
        console.log("[CONTROLLER] Fail posting apply job.");
        res.status(500).json({status: "error", message: error.message});
    }
}

export default postApplyControll;