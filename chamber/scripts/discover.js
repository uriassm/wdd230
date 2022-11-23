//******User Visits Discover Page*******

// initialize display elements
// const todayDisplay = document.querySelector(".today");
// const visitsDisplay = document.querySelector(".visit");
const daysDisplay = document.querySelector(".daysSince");

let lastVisit = Number(window.localStorage.getItem("visitDays-ls"));

let currentTime = Date.now();
let daysPassedMS = currentTime - lastVisit;
let daysPassedDays = Math.floor(daysPassedMS / 86400000)


if (lastVisit != 0) {
  daysDisplay.textContent = daysPassedDays;
} else {
  daysDisplay.textContent = "This is your first visit!";
}

localStorage.setItem("visitDays-ls", currentTime);



// get the stored value in localStorage
// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// increment the number of visits.
// numVisits++;
// store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);
// show todays date.
// todayDisplay.textContent = Date.now();