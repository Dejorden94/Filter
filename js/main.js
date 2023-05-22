let allGames = document.getElementsByClassName("game");

for (let i = 0; i < allGames.length; i++) {

}

let filters = document.getElementsByClassName("filter");

//Indie filter
filters[0].onchange = function () {
    if (filters[0].checked === true) {
        console.log("filter staat aan");
    } else {
        console.log("filter staat uit");
    }
}