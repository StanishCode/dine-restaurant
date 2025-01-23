import "./style.css";
import dineLogo from "/dine.svg";
import topLeftCurve from "/pattern-curve-top-left.svg";
import topRightCurve from "/pattern-curve-top-right.svg";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

document.querySelector("#dine-logo").innerHTML = `<img src="${dineLogo}" />`;
document.querySelector(".footer-logo").innerHTML = `<img src="${dineLogo}" />`;
document.querySelector(
  "#feature-background--second"
).innerHTML = `<img src="${topLeftCurve}" />`;
document.querySelector(
  "#feature-background--first"
).innerHTML = `<img src="${topRightCurve}" />`;
document.querySelector(
  ".events-background"
).innerHTML = `<img src="${topRightCurve}" />`;

const eventSelections = document.querySelectorAll(".events-selection");
const eventImages = document.querySelectorAll(".events-image");
const eventDescriptions = document.querySelectorAll(".event-description");

const activateSelection = (selected) => {
  for (let image of eventImages) {
    image.classList.remove("events-image--active");
  }
  for (let description of eventDescriptions) {
    description.classList.remove("event-description--active");
  }
  for (let selection of eventSelections) {
    selection.classList.remove("events-selection--active");
  }

  const current = selected.closest("div");
  eventImages[+current.dataset.id].classList.add("events-image--active");
  eventDescriptions[+current.dataset.id].classList.add(
    "event-description--active"
  );
  current.classList.add("events-selection--active");
};

eventSelections.forEach((selection) =>
  selection.addEventListener("click", () => {
    activateSelection(event.target);
  })
);

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
