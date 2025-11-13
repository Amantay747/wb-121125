import { Router } from "express";
import { TariffsController } from "../controllers/tariffs.controller";

const router = Router();

router.get("/tariffs", TariffsController.getToday);
router.post("/tariffs/update", TariffsController.update);

export default router;
