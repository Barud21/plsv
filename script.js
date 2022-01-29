"use strict";

const btnStart = document.getElementById("btn-start");
const btnPickUp = document.getElementById("btn-pick-up");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnEnd = document.getElementById("btn-end");
const btnNextParcel = document.getElementById("btn-next-parcel");
const phoneNumber = document.getElementById("phone-number");
const form = document.querySelector(".form");
const codeInput = document.getElementById("code");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const nextParcel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  codeInput.value = "";
};

const endPickUp = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  codeInput.value = "";
  phoneNumber.value = "";
  form.classList.add("hidden");
  btnPickUp.classList.add("hidden");
  btnStart.classList.remove("hidden");
};

btnStart.addEventListener("click", () => {
  console.log("Kliknięto przycisk");
  form.classList.remove("hidden");
  btnPickUp.classList.remove("hidden");
  btnStart.classList.add("hidden");
});

phoneNumber.addEventListener("keydown", function (e) {
  const txt = this.value;
  if ((txt.length == 3 || txt.length == 7) && e.which !== 8) {
    this.value = this.value + " ";
  }
});

btnPickUp.addEventListener("click", openModal);
btnNextParcel.addEventListener("click", nextParcel);
btnEnd.addEventListener("click", endPickUp);
