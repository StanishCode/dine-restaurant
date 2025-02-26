import "./style.css";
import dineLogo from "/dine.svg";
import topLeftCurve from "/pattern-curve-top-left.svg";
import topRightCurve from "/pattern-curve-top-right.svg";

document.querySelector(
  "#dine-logo--home"
).innerHTML = `<img src="${dineLogo}" />`;
document.querySelector(".footer-logo").innerHTML = `<img src="${dineLogo}" />`;
document.querySelector(
  "#feature-background--second"
).innerHTML = `<img src="${topLeftCurve}" />`;
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
  selection.addEventListener("click", (event) => {
    console.log("selection clicked!");
    activateSelection(event.target);
  })
);
