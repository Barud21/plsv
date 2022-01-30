"use strict";

import {
  showPhoneMsg,
  hidePhoneMsg,
  showCodeMsg,
  hideCodeMsg,
  enablePickUp,
  disablePickUp,
} from "./domManipulation.js";

const phoneValidation = function (phoneNumber) {
  const number = phoneNumber.value;
  let isPhoneNumber = /^\d+$/.test(number.replaceAll(" ", ""));
  if (phoneNumber.value.length === 11 && isPhoneNumber) {
    hidePhoneMsg();
    return true;
  } else {
    showPhoneMsg();
    return false;
  }
};

const codeValidation = function (code) {
  const pickUpCode = code.value;
  let isPickUpCode = /^\d+$/.test(pickUpCode.replaceAll(" ", ""));
  if (code.value.length === 4 && isPickUpCode) {
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
