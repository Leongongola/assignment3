/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let calculatedCost = document.getElementById("calculated-cost");
let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");

let dayCounter = 0;
let dailyRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
/********* colour change days of week *********/
mondayButton.addEventListener("click", function() {
    if (!mondayButton.classList.contains("clicked")) {
        mondayButton.classList.add("clicked");
        mondayButton.style.backgroundColor = "#4278e5";
        dayCounter++;
    }
});

tuesdayButton.addEventListener("click", function() {
    if (!tuesdayButton.classList.contains("clicked")) {
        tuesdayButton.classList.add("clicked");
        tuesdayButton.style.backgroundColor = "#4278e5";
        dayCounter++;
    }
});

wednesdayButton.addEventListener("click", function() {
    if (!wednesdayButton.classList.contains("clicked")) {
        wednesdayButton.classList.add("clicked");
        wednesdayButton.style.backgroundColor = "#4278e5";
        dayCounter++;
    }
});

thursdayButton.addEventListener("click", function() {
    if (!thursdayButton.classList.contains("clicked")) {
        thursdayButton.classList.add("clicked");
        thursdayButton.style.backgroundColor = "#4278e5";
        dayCounter++;
    }
});

fridayButton.addEventListener("click", function() {
    if (!fridayButton.classList.contains("clicked")) {
        fridayButton.classList.add("clicked");
        fridayButton.style.backgroundColor = "#4278e5";
        dayCounter++;
    }
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* clear days *********/
clearButton.addEventListener("click", function() {
    mondayButton.classList.remove("clicked");
    mondayButton.style.backgroundColor = "";
    tuesdayButton.classList.remove("clicked");
    tuesdayButton.style.backgroundColor = "";
    wednesdayButton.classList.remove("clicked");
    wednesdayButton.style.backgroundColor = "";
    thursdayButton.classList.remove("clicked");
    thursdayButton.style.backgroundColor = "";
    fridayButton.classList.remove("clicked");
    fridayButton.style.backgroundColor = "";
    dayCounter = 0;
    calculatedCost.innerHTML = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", function() {
    if (!halfButton.classList.contains("clicked")) {
        halfButton.classList.add("clicked");
        fullButton.classList.remove("clicked");
        dailyRate = 20;
        calculate();
    }
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", function() {
    if (!fullButton.classList.contains("clicked")) {
        fullButton.classList.add("clicked");
        halfButton.classList.remove("clicked");
        dailyRate = 35;
        calculate();
    }
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    let totalCost = dayCounter * dailyRate;
    calculatedCost.innerHTML = totalCost;
}