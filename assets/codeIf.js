function play(j1, j2) {
    if (j1 === j2) {
        alert("Empate");
    } else if (j1 === "rock" && j2 === "paper") {
        alert("Robot escogio papel tu pierdes");
    } else if (j1 === "rock" && j2 === "scissors") {
        alert("Robot escogio tijeras tu ganas");
    } else if (j1 === "paper" && j2 === "rock") {
        alert("Robot escogio piedra tu ganas");
    } else if (j1 === "paper" && j2 === "scissors") {
        alert("Robot escogio tijeras tu pierdes");
    } else if (j1 === "scissors" && j2 === "rock") {
        alert("Robot escogio piedra tu pierdes");
    } else if (j1 === "scissors" && j2 === "paper") {
        alert("Robot escogio papel tu ganas");
    }
}

function robotPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playScissors() {
    var robot = robotPlay();
    scissors.addEventListener('click', play("scissors", robot));
}

function playRock() {
    var robot = robotPlay();
    rock.addEventListener('click', play("rock", robot));
}

function playPaper() {
    var robot = robotPlay();
    paper.addEventListener('click', play("paper", robot));
}

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
