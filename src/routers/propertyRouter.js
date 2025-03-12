import express from "express";
import getPropertyController from "../controllers/property/getPropertyController.js";
import postPropertyController from "../controllers/property/postPropertyController.js";
import putPropertyController from "../controllers/property/putPropertyController.js";
import changeTypePropertyController from "../controllers/property/changeTypePropertyController.js";
import deletePropertyController from "../controllers/property/deletePropertyController.js";

const router = express.Router();

router.get("/", getPropertyController);
router.post("/", postPropertyController);
router.put("/", putPropertyController);
router.patch("/", changeTypePropertyController);
router.delete("/", deletePropertyController);

export default router;
