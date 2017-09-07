export const isString = /^[a-zA-Z]/;

export const isEmail = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

export const isPhoneNumber = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;

export function validateInputFields({ name, email, tel, message }) {
  const isNameValid = isString.test(name);
  const isEmailValid = isEmail.test(email);
  const isTelValid = isPhoneNumber.test(tel);
  const isMessageValid = (typeof message === 'string' && message.trim().length !== 0);
  return (isNameValid && isEmailValid && isMessageValid && isTelValid);
}
