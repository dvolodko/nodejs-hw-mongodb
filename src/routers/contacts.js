import { Router } from "express";

import * as contactsController from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/contacts", ctrlWrapper(contactsController.getContactsController));

router.get(
  "/contacts/:id",
  ctrlWrapper(contactsController.getContactByIdController)
);

router.post("/contacts", ctrlWrapper(contactsController.addContactController));

router.put(
  "/contacts/:id",
  ctrlWrapper(contactsController.upsertContactController)
);

router.patch(
  "/contacts/:id",
  ctrlWrapper(contactsController.patchContactController)
);

router.delete(
  "/contacts/:id",
  ctrlWrapper(contactsController.deleteContactController)
);

export default router;
