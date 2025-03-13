
const dayTracker = document.querySelector(".day-tracker")
for (let i = 1; i <= 365; i++) {
    dayTracker.innerHTML += `<div class='day'></div>`
}