/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Fadima Macalou
     Date:   05-09-2023

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays); 

// Function to write weekday names into calendar
function addWeekDays() {
    let i = 0; // initial counter value

    // reference the collection of heading cells in the table
    let headingCells = document.getElementsByTagName("th");

    // write each of the seven days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        // increase the counter by 1
        i++;
    }
}

window.addEventListener("load", showGames);

//Function to write game information into the calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        //Open the paragraph
        gameInfo+= "<p>";

        //Display the game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";
        }

        //Include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        //Include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        //Display innings played for suspended, shortened, or extrainning games
        if (gameInnings[i] < 5) {
            gameInfo += " [" + gameInnings[i]+"]***";
             } else if (gameInnings[i] < 9) {
                gameInfo += " [" + gameInnings[i]+"]*";
            } else if (gameInnings[i] > 9) {
                gameInfo += " [" + gameInnings[i] +
            } else

        //Close the paragraph
        gameInfo += "</p>";

        //Write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}