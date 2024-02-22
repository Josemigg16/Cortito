import { Router } from "express";
import { register, login, createLink, getShortcuts, getUserShortcuts, deleteShortcut, getOneShortcut, editShortcut, getOneUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/register', register)
router.post('/login', login)
router.get('/users/:email', getOneUser)
router.post('/create-link', createLink)
router.get('/shortcuts', getShortcuts)
router.get('/shortcuts/:newlink', getOneShortcut)
router.get('/get-user-shortcuts', getUserShortcuts)
router.post('/delete-shortcut', deleteShortcut)
router.post('/edit-shortcut', editShortcut)

export default router