let allGames = document.getElementsByClassName("game");

let filters = document.getElementsByClassName("filter");

//Indie filter
let indieFilter = document.getElementById("checkbox-indie");

indieFilter.onchange = function () {
    if (indieFilter.checked === true) {
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

//Open world filter
let openWorldFilter = document.getElementById("checkbox-open-world");

openWorldFilter.onchange = function () {
    if (openWorldFilter.checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "open-world") {
                allGames[i].style.display = "block"
            }
        }
    } else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "open-world") {
                allGames[i].style.display = "none";
            }
        }
    }
}

//Action filter
let actionFilter = document.getElementById("checkbox-action");

actionFilter.onchange = function () {
    if (actionFilter.checked === true) {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "action") {
                allGames[i].style.display = "block"
            }
        }
    } else {
        for (let i = 0; i < allGames.length; i++) {
            if (allGames[i].dataset.category === "action") {
                allGames[i].style.display = "none";
            }
        }
    }
}