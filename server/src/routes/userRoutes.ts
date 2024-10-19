import e, { Router } from "express";
import { getUsers } from "../controllers/userController";

const router = Router();

router.get('/', getUsers);

export default router;