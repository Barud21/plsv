const numberValidation = function (phoneNumber, strLength) {
  let isPhoneNumber = /^\d+$/.test(phoneNumber);
  if (phoneNumber.length === strLength && isPhoneNumber) {
    return true;
  } else {
    return false;
  }
};

export { numberValidation };

export default numberValidation;
