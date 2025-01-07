import Joi from "joi";

import { contactTypeList } from "../constants/index.js";

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    "string.base": "Name should be a string",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name should have at most {#limit} characters",
    "any.required": "Name is required",
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    "string.base": "Phone number should be a string",
    "string.min": "Phone number should have at least {#limit} characters",
    "string.max": "Phone number should have at most {#limit} characters",
    "any.required": "Phone number is required",
  }),
  email: Joi.string().min(3).max(20).messages({
    "string.base": "email should be a string",
    "string.min": "email should have at least {#limit} characters",
    "string.max": "email should have at most {#limit} characters",
  }),
  isFavourite: Joi.boolean().required().messages({
    "boolean.base": "IsFavourite should be a boolean",
    "any.required": "IsFavourite is required",
  }),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    "string.base": "Name should be a string",
    "string.min": "Name should have at least {#limit} characters",
    "string.max": "Name should have at most {#limit} characters",
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    "string.base": "Phone number should be a string",
    "string.min": "Phone number should have at least {#limit} characters",
    "string.max": "Phone number should have at most {#limit} characters",
  }),
  email: Joi.string().min(3).max(20).messages({
    "string.base": "email should be a string",
    "string.min": "email should have at least {#limit} characters",
    "string.max": "email should have at most {#limit} characters",
  }),
  isFavourite: Joi.boolean().messages({
    "boolean.base": "IsFavourite should be a boolean",
  }),
  contactType: Joi.string().valid(...contactTypeList),
});
