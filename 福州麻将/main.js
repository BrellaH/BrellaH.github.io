const playerScore = [0, 0, 0, 0]

const players = document.querySelector(".container")
let p0Score = document.querySelector("#p0Score")
let p1Score = document.querySelector("#p1Score")
let p2Score = document.querySelector("#p2Score")
let p3Score = document.querySelector("#p3Score")

const updateScore = function () {
    p0Score.innerText = playerScore[0];
    p1Score.innerText = playerScore[1];
    p2Score.innerText = playerScore[2];
    p3Score.innerText = playerScore[3];
}

players.addEventListener("click", function (event) {

    if (event.target.nodeName === "BUTTON" && event.target.className === "name") {
        let name = prompt("Enter name of this player: ")
        if (name != "") {
            event.target.innerText = name;
        }
    }
    if (event.target.nodeName === "BUTTON" && event.target.className === "won") {
        let score = prompt("Enter amount: ")
        let p = parseInt(event.target.id[1])
        for (let i = 0; i < 4; i++) {
            if (i == p) {
                playerScore[i] += 3 * score;
            }
            else {
                playerScore[i] -= score;
            }
        }
        updateScore();
    }
})