let allGames = document.getElementsByClassName("game");

let filters = document.getElementsByClassName("filter");

//Indie filter
let indieFilter = document.getElementById("checkbox-indie");

indieFilter.onchange = function () {
    if (filters[0].checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "indie") {
                allGames[i].style.display = "block";
            }
        }
    } else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "indie") {
                allGames[i].style.display = "none";
            }
        }
    }
}