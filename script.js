"use strict";

const btnPickUp = document.querySelector(".btn--pick-up");
const phoneNumber = document.getElementById("phone-number");

btnPickUp.addEventListener("click", () => {
  console.log("Kliknięto przycisk");
});

phoneNumber.addEventListener("keydown", function (e) {
  const txt = this.value;
  if ((txt.length == 3 || txt.length == 7) && e.which !== 8) {
    this.value = this.value + " ";
  }
});
