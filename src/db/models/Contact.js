import { Schema, model } from "mongoose";

import { contactTypeList } from "../../constants/index.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      requred: true,
    },
    phoneNumber: {
      type: String,
      requred: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
      required: true,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      default: "personal",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ContactCollection = model("contact", contactSchema);

export default ContactCollection;
