function robotPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playScissors(robot) {
    switch (robot) {
        case "paper":
            alert("Robot escogio papel, tu ganas");
            break;
        case "rock":
            alert("Robot escogio piedra, tu pierdes");
            break;
        default:
            alert("Empate");
    }

}

function playRock(robot) {
    switch (robot) {
        case "paper":
            alert("Robot escogio papel, tu pierdes");
            break;
        case "scissors":
            alert("Robot escogio tijeras, tu ganas");
            break;
        default:
            alert("Empate");
    }

}

function playPaper(robot) {
    switch (robot) {
        case "rock":
            alert("Robot escogio piedra, tu ganas");
            break;
        case "scissors":
            alert("Robot escogio tijeras, tu pierdes");
            break;
        default:
            alert("Empate");
    }

}

function scissors() {
    var robot = robotPlay();
    scissors.addEventListener('click', playScissors(robot));
}

function rock() {
    var robot = robotPlay();
    rock.addEventListener('click', playRock(robot));
}

function paper() {
    var robot = robotPlay();
    paper.addEventListener('click', playPaper(robot));
}

var imgRock = document.getElementById("rock");
var imgPaper = document.getElementById("paper");
var imgScissors = document.getElementById("scissors");