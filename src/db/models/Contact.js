import { Schema, model } from "mongoose";

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
      enum: ["work", "home", "personal"],
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
