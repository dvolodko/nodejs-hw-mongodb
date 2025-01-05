import { Router } from "express";

import * as contactsController from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";

const router = Router();

router.get("/contacts", ctrlWrapper(contactsController.getContactsController));

router.get(
  "/contacts/:id",
  isValidId,
  ctrlWrapper(contactsController.getContactByIdController)
);

router.post(
  "/contacts",
  validateBody(createContactSchema),
  ctrlWrapper(contactsController.addContactController)
);

router.put(
  "/contacts/:id",
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(contactsController.upsertContactController)
);

router.patch(
  "/contacts/:id",
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(contactsController.patchContactController)
);

router.delete(
  "/contacts/:id",
  isValidId,
  ctrlWrapper(contactsController.deleteContactController)
);

export default router;
