import "./style.css";
import dineLogo from "/dine.svg";
import topLeftCurve from "/pattern-curve-top-left.svg";
import topRightCurve from "/pattern-curve-top-right.svg";

document.querySelector(
  "#dine-logo--reserve"
).innerHTML = `<img src="${dineLogo}" />`;

const fullName = document.querySelector("#fullName");
const nameContainerClasses = fullName.closest("div").classList;
const email = document.querySelector("#email");
const emailContainerClasses = email.closest("div").classList;
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const dateContainer = document.querySelector(".dateContainer");
const dateLegend = document.querySelector(".dateLegend");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const timeContainer = document.querySelector(".timeContainer");
const timeLegend = document.querySelector(".timeLegend");
const reserveForm = document.querySelector(".reserveForm");

reserveForm.addEventListener("submit", (event) => {
  event.preventDefault();

  /* TODO: form vaildation logic after user submits */
  /* if any fields are not filled out then initiate error checking */
  /* Reset all values in inputs to default */
  if (
    fullName.value.trim() === "" ||
    email.value.trim() === "" ||
    month.value.trim() === "" ||
    day.value.trim() === "" ||
    year.value.trim() === "" ||
    hour.value.trim() === "" ||
    minute.value.trim() === ""
  ) {
    if (
      fullName.value.trim() === "" &&
      !nameContainerClasses.contains("error")
    ) {
      nameContainerClasses.add("error");
      fullName.insertAdjacentHTML(
        "afterend",
        `<span class="errorMessage">This field is required</span>`
      );
    }

    if (email.value.trim() === "" && !emailContainerClasses.contains("error")) {
      emailContainerClasses.add("error");
      email.insertAdjacentHTML(
        "afterend",
        `<span class="errorMessage">This field is required</span>`
      );
    }

    if (
      month.value.trim() === "" ||
      day.value.trim() === "" ||
      year.value.trim() === ""
    ) {
      if (!dateContainer.classList.contains("error")) {
        dateContainer.classList.add("error");
        dateLegend.insertAdjacentHTML(
          "afterend",
          `<span class="errorMessage">This field is required</span>`
        );
      }
    }

    if (hour.value.trim() === "" || minute.value.trim() === "") {
      if (!timeContainer.classList.contains("error")) {
        timeContainer.classList.add("error");
        timeLegend.insertAdjacentHTML(
          "afterend",
          `<span class="errorMessage">This field is required</span>`
        );
      }
    }

    return;
  }

  /* if no errors or errors fixed, then remove all error messages and remove error classes */
  const errorMessages = document.querySelectorAll(".errorMessage");
  errorMessages.forEach((message) => {
    message.remove();
  });
  nameContainerClasses.remove("error");
  emailContainerClasses.remove("error");
  dateContainer.remove("error");
  /* Rmove when done */
  console.log("form submitted!");
});

reserveForm.addEventListener("focusout", (event) => {
  if (!event.target.closest("input")) {
    return;
  }
  const currentContainer = event.target.parentElement;
  const childErrorMEssage = currentContainer.querySelector(".errorMessage");
  currentContainer.classList.remove("error");
  if (childErrorMEssage !== null) {
    childErrorMEssage.remove();
  }
});
