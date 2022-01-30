"use strict";

import { numberValidation } from "./numberValidation.js";
import {
  showPhoneMsg,
  hidePhoneMsg,
  showCodeMsg,
  hideCodeMsg,
  enablePickUp,
  disablePickUp,
} from "./domManipulation.js";

const phoneValidation = function (phoneNumber) {
  const number = phoneNumber.value.replaceAll(" ", "");

  if (numberValidation(number, 9)) {
    hidePhoneMsg();
    return true;
  } else {
    showPhoneMsg();
    return false;
  }
};

const codeValidation = function (code) {
  const pickUpCode = code.value.replaceAll(" ", "");

  if (numberValidation(pickUpCode, 4)) {
    hideCodeMsg();
    return true;
  } else {
    showCodeMsg();
    return false;
  }
};

const inputValidation = function (phoneNumber, code) {
  const number = phoneValidation(phoneNumber);
  const pickUpCode = codeValidation(code);

  if (number && pickUpCode) {
    enablePickUp();
  } else {
    disablePickUp();
  }
};

export { inputValidation };
