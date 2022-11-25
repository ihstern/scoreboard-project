let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeNum = 0
guestNum = 0
homeScore.textContent = 0
guestScore.textContent = 0

function homeBtn1() {
    homeNum += 1;
    hilight();
    return homeScore.textContent = homeNum;
}

function homeBtn2() {
    homeNum += 2;
    hilight();
    return homeScore.textContent = homeNum;
}

function homeBtn3() {
    homeNum += 3;
    hilight();
    return homeScore.textContent = homeNum;
}

function guestBtn1() {
    guestNum += 1;
    hilight();
    return guestScore.textContent = guestNum;
}

function guestBtn2() {
    guestNum += 2;
    return guestScore.textContent = guestNum;
}

function guestBtn3() {
    guestNum += 3;
    hilight();
    return guestScore.textContent = guestNum;
}

function newGame() {
    homeNum = 0;
    guestNum = 0;
    hilight();
    return (homeScore.textContent = homeNum) & (guestScore.textContent = guestNum);
}

let homeHead = document.getElementById("home")
let guestHead = document.getElementById("guest")

function hilight() {
    if (homeNum === guestNum) {
        homeHead.style.color = "yellow";
        guestHead.style.color = "yellow";
    } else if (homeNum > guestNum) {
        homeHead.style.color = "green";
        guestHead.style.color = "red";
    } else if (homeNum < guestNum) {
        homeHead.style.color = "red";
        guestHead.style.color = "green";
    } else {
        homeHead.style.color = "blue";
        guestHead.style.color = "blue";
    }
}

