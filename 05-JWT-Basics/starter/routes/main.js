import express from "express";
import { login, dashboard } from "../controllers/main.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/dashboard").get(dashboard);

export default router;
