const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

//In JS, there are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.

const date = new Date();
const day = date.getDate();

//The .getMonth() method returns a number between 0 and 11. This represents the month for the date provided, where 0 is January and 11 is December. Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

//In JS, the 'change' event is used to detect when the value of an HTML element has changed:
dateOptionsSelectElement.addEventListener("change", () => {

    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
            break;

    }
});
