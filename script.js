"use strict";

const btnStart = document.getElementById("btn-start");
const btnPickUp = document.getElementById("btn-pick-up");
const phoneNumber = document.getElementById("phone-number");
const form = document.querySelector(".form");

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
