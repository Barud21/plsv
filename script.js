"use strict";

const btnStart = document.getElementById("btn-start");
const btnPickUp = document.getElementById("btn-pick-up");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnEnd = document.getElementById("btn-end");
const btnNextParcel = document.getElementById("btn-next-parcel");
const phoneNumber = document.getElementById("phone-number");
const phoneNumberMsg = document.getElementById("phone-msg");
const form = document.querySelector(".form");
const codeInput = document.getElementById("code");
const codeMsg = document.getElementById("code-msg");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const nextParcel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  codeInput.value = "";
  codeMsg.classList.remove("hidden");
  disablePickUp();
};

const endPickUp = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  codeInput.value = "";
  phoneNumber.value = "";
  form.classList.add("hidden");
  btnPickUp.classList.add("hidden");
  btnStart.classList.remove("hidden");
  codeMsg.classList.remove("hidden");
  phoneNumberMsg.classList.remove("hidden");
  disablePickUp();
};

const enablePickUp = function () {
  btnPickUp.disabled = false;
  btnPickUp.classList.remove("btn--inactive");
};

const disablePickUp = function () {
  btnPickUp.disabled = true;
  btnPickUp.classList.add("btn--inactive");
};

const phoneValidation = function (phoneNumber) {
  const number = phoneNumber.value;
  let isPhoneNumber = /^\d+$/.test(number.replaceAll(" ", ""));
  if (phoneNumber.value.length === 11 && isPhoneNumber) {
    phoneNumberMsg.classList.add("hidden");
    return true;
  } else {
    phoneNumberMsg.classList.remove("hidden");
    return false;
  }
};

const codeValidation = function (code) {
  const pickUpCode = code.value;
  let isPickUpCode = /^\d+$/.test(pickUpCode.replaceAll(" ", ""));
  if (code.value.length === 4 && isPickUpCode) {
    codeMsg.classList.add("hidden");
    return true;
  } else {
    codeMsg.classList.remove("hidden");
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

btnStart.addEventListener("click", () => {
  console.log("Kliknięto przycisk");
  form.classList.remove("hidden");
  btnPickUp.classList.remove("hidden");
  btnStart.classList.add("hidden");
});

phoneNumber.addEventListener("input", function (e) {
  let target = e.target;
  let position = target.selectionEnd;
  length = target.value.length;
  target.value = target.value
    .replace(/[^\d]/g, "")
    .replace(/(.{3})/g, "$1 ")
    .trim();
  target.selectionEnd = position +=
    target.value.charAt(position - 1) === " " &&
    target.value.charAt(length - 1) === " " &&
    length !== target.value.length
      ? 1
      : 0;
});

codeInput.addEventListener("input", function (e) {
  let target = e.target;
  let position = target.selectionEnd;
  length = target.value.length;
  target.value = target.value.replace(/[^\d]/g, "").trim();
  target.selectionEnd = position +=
    target.value.charAt(position - 1) === " " &&
    target.value.charAt(length - 1) === " " &&
    length !== target.value.length
      ? 1
      : 0;
});

btnPickUp.addEventListener("click", () => {
  openModal();
  inputValidation(phoneNumber, codeInput);
});

btnNextParcel.addEventListener("click", nextParcel);
btnEnd.addEventListener("click", endPickUp);

codeInput.addEventListener("keyup", function (e) {
  inputValidation(phoneNumber, codeInput);
});

phoneNumber.addEventListener("keyup", function (e) {
  inputValidation(phoneNumber, codeInput);
});
