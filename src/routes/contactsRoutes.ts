import { Router } from "express";
import * as contactsController from "../controllers/contactsController";

const router: Router = Router();

router.post("/", contactsController.createContact);
router.get("/search", contactsController.searchContact);
router.get("/:id", contactsController.getContact);
router.patch("/:id", contactsController.updateContact);
router.delete("/:id", contactsController.deleteContact);

export default router;
