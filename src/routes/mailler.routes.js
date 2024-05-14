import { Router } from "express";
import { sendaMail } from "../controller/mailler.controllers.js";

const router = Router();

router.post('/send-email', sendaMail)

export default router;