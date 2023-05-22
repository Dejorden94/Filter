let allGames = document.getElementsByClassName("game");

for (let i = 0; i < allGames.length; i++) {
    console.log(allGames[i].dataset.category);
}