"use strict";

const cardHolder = document.querySelector("#cardholder");
const cardNumber = document.querySelector("#cardnumber");
const cardExpiredMonth = document.querySelector("#exp-month");
const cardExpiredYear = document.querySelector("#exp-year");

const errorMsg = document.getElementById("errorMsgName");
const blankInput = document.getElementById("noInput");
const noInputMsg = document.getElementById("noInputMsg");
const blankMessage = document.getElementById("noInputMessage");
const erroMsgMon = document.getElementById("err_msg_mon");
const erroMsgYr = document.getElementById("err_msg_year");
const noInputYear = document.getElementById("noInputYear");

const userInput = document.querySelector(".userinput");
const cardUserInput = document.querySelector(".carduserinput");
const monthExpired = document.querySelector(".month-expired");
const yearExpired = document.querySelector(".year-expired");

let currentYear = 2026;
let currentMonth = 10;
// if (currentMonth < 10) {
//   currentMonth = `0${currentMonth}`;
// }

const cardInfo = {
  cardName: "John Smith",
  cardNumber: "1268768545760033",
  // expiredMonth: parseInt(document.querySelector("#exp-month").value), // format MM
  // expiredYear: parseInt(document.querySelector("#exp-year").value), // format YY
  expiredMonth:
    currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString(), // format MM
  expiredYear: currentYear.toString().substring(2), // format YY
  cvc: "343",
};
/*

// console.log(currentYear);
// console.log(`Current Month is : ${currentMonth}`);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const customerName = cardHolder.value;
  const customerNumber = cardNumber.value;
  const expiredMonth = cardExpiredMonth.value;
  const expiredYear = cardExpiredYear.value;

  
  if (
    customerName === cardInfo.cardName ||
    customerNumber === cardInfo.cardNumber
  ) {
    console.log(true, "Valid customer");

    userInput.style.borderRadius = "0.3125rem";
    cardUserInput.style.border = "2px solid";
    cardUserInput.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
  } else {
    errorMsg.textContent = "Wrong customer, card Holder";
    noInputMsg.textContent = "Wrong format, numbers only";
    userInput.style.border = "2px solid hsl(0, 100%, 66%)";
    cardUserInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }
  

  // if (!customerName && !customerNumber) {}
  if (customerName === cardInfo.cardName) {
    userInput.style.border = "2px solid";
    userInput.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    errorMsg.textContent = "";

    //
  } else {
    errorMsg.textContent = "Wrong customer, card Holder";
    userInput.style.border = "2px solid hsl(0, 100%, 66%)";
    noInputMsg.textContent = "Wrong format, numbers only";
    cardUserInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }

  if (customerNumber === cardInfo.cardNumber) {
    cardUserInput.style.border = "2px solid";
    userInput.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
  }

  if (cardHolder.value === "") {
    // blankMessage.classList.add("show");
    blankInput.textContent = "Can't be, blank";
    errorMsg.textContent = "";
    userInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    // errorMsg.textContent = "Wrong customer, card Holder";
    blankInput.textContent = "";
    // userInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }

  if (cardNumber.value === "") {
    blankMessage.textContent = "Can't be, blank";
    noInputMsg.textContent = "";
    cardUserInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    blankMessage.textContent = "";
  }

  if (
    expiredMonth === cardInfo.expiredMonth &&
    expiredYear === cardInfo.expiredYear
  ) {
    console.log("true");
  } else {
    console.log("false");
  }

  if (expiredMonth === "") {
    erroMsgMon.textContent = "Can't be, blank";
    // blankMessage.textContent = "Can't be, blank";
    monthExpired.style.border = "2px solid hsl(0, 100%, 66%)";
  }
});
*/

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const customerName = cardHolder.value;
  const expiredMonth = cardExpiredMonth.value;
  const expiredYear = cardExpiredYear.value;

  // Cardholder name
  if (customerName === cardInfo.cardName) {
    userInput.style.border = "2px solid";
    userInput.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Wrong customer, card Holder";
    blankInput.textContent = "";
    userInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }

  if (customerName === "") {
    blankInput.textContent = "Can't be, blank";
    errorMsg.textContent = "";
    userInput.style.border = "2px solid hsl(0, 100%, 66%)";
  }

  // Cardholder number

  // expired month
  if (expiredMonth === cardInfo.expiredMonth) {
    monthExpired.style.board = "2px solid";
    monthExpired.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    erroMsgMon.textContent = "";
    blankMessage.textContent = "";
  } else {
    erroMsgMon.textContent = "Wrong Month";
    blankMessage.textContent = "";
    monthExpired.style.border = "2px solid hsl(0, 100%, 66%)";
  }
  if (expiredMonth === "") {
    blankMessage.textContent = "can't be blank";
    erroMsgMon.textContent = "";
    monthExpired.style.border = "2px solid hsl(0, 100%, 66%)";
  }

  // epired year
  if (expiredYear === cardInfo.expiredYear) {
    yearExpired.style.border = "2px solid";
    yearExpired.style.borderImage =
      "linear-gradient(90deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1";
    erroMsgYr.textContent = "";
    noInputYear.textContent = "";
  } else {
    erroMsgYr.textContent = "Wrong Month";
    noInputYear.textContent = "";
    yearExpired.style.border = "2px solid hsl(0, 100%, 66%)";
  }
  if (expiredYear === "") {
    noInputYear.textContent = "can't be blank";
    erroMsgYr.textContent = "";
    monthExpired.style.border = "2px solid hsl(0, 100%, 66%)";
  }
});
