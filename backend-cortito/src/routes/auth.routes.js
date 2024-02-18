import { Router } from "express";
import { register, login, createLink, getShortcuts } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/register', register)
router.post('/login', login)
router.post('/create-link', createLink)
router.get('/get-shortcuts', getShortcuts)

export default router