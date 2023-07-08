import express from "express";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);

export default router;