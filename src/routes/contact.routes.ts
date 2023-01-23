import {Router} from 'express';
import { create, list, listOne, remove, update } from '../cotrollers/contacts.controller.js';
import { contactSchemaValidation } from '../midlewares/validateContact.midleware.js';


const router = Router();

router.get("/list/:id", listOne);
router.get("/list", list);
router.post("/create", contactSchemaValidation, create);
router.put("/update/:id", contactSchemaValidation, update);
router.delete("/delete/:id", remove);

export default router;
