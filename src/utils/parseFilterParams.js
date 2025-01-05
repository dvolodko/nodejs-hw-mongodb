const parseContactType = (contactType) => {
  const isString = typeof contactType === "string";
  if (!isString) return;
  const isContactType = (contactType) =>
    ["work", "home", "personal"].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseString = (string) => {
  const isString = typeof string === "string";
  if (!isString) return;

  return string;
};

const parseIsFavourite = (boolean) => {
  const isString = typeof boolean === "string";
  if (!isString) return;

  const isBoolean = (boolean) => ["true", "false"].includes(boolean);

  if (isBoolean(boolean)) return boolean;
};

export const parseFilterParams = (query) => {
  const { name, phoneNumber, email, isFavourite, contactType } = query;

  const parsedName = parseString(name);
  const parsedPhoneNumber = parseString(phoneNumber);
  const parsedEmail = parseString(email);
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return {
    name: parsedName,
    phoneNumber: parsedPhoneNumber,
    email: parsedEmail,
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
