import { openModal, closeModal } from "./modal.js";
import { inputValidation } from "./formValidation.js";

const codeInput = document.getElementById("code");
const phoneNumber = document.getElementById("phone-number");
const phoneNumberMsg = document.getElementById("phone-msg");
const codeMsg = document.getElementById("code-msg");
const form = document.querySelector(".form");
const btnStart = document.getElementById("btn-start");
const btnPickUp = document.getElementById("btn-pick-up");
const btnEnd = document.getElementById("btn-end");
const btnNextParcel = document.getElementById("btn-next-parcel");
const btnLoading = document.getElementById("btn-loading");
const btnBack = document.querySelector(".btn-back");

const showPhoneMsg = function () {
  phoneNumberMsg.classList.remove("form__msg--opacity");
};

const hidePhoneMsg = function () {
  phoneNumberMsg.classList.add("form__msg--opacity");
};

const showCodeMsg = function () {
  codeMsg.classList.remove("form__msg--opacity");
};

const hideCodeMsg = function () {
  codeMsg.classList.add("form__msg--opacity");
};

const showLoading = function () {
  btnLoading.classList.remove("hidden");
};

const hideLoading = function () {
  btnLoading.classList.add("hidden");
};

const nextParcel = function () {
  codeInput.value = "";
  closeModal();
  showCodeMsg();
  disablePickUp();
};

const endPickUp = function () {
  codeInput.value = "";
  phoneNumber.value = "";
  closeModal();
  form.classList.add("hidden");
  btnPickUp.classList.add("hidden");
  btnStart.classList.remove("hidden");
  btnBack.classList.add("hidden");
  showCodeMsg();
  showPhoneMsg();
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

btnStart.addEventListener("click", () => {
  console.log("Kliknięto przycisk");
  form.classList.remove("hidden");
  btnPickUp.classList.remove("hidden");
  btnStart.classList.add("hidden");
  btnBack.classList.remove("hidden");
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
  showLoading();
  setTimeout(() => {
    openModal(), hideLoading();
  }, 2000);
});

btnBack.addEventListener("click", endPickUp);

btnNextParcel.addEventListener("click", nextParcel);
btnEnd.addEventListener("click", endPickUp);

codeInput.addEventListener("keyup", function (e) {
  inputValidation(phoneNumber, codeInput);
});

phoneNumber.addEventListener("keyup", function (e) {
  inputValidation(phoneNumber, codeInput);
});

export {
  codeInput,
  phoneNumber,
  form,
  showPhoneMsg,
  hidePhoneMsg,
  showCodeMsg,
  hideCodeMsg,
  enablePickUp,
  disablePickUp,
  nextParcel,
  endPickUp,
};
