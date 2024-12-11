let cookies = 0;
let cookiePerClick = 1;
let upgradeCost = 10;

const cookieElement = document.getElementById('cookie');
const scoreElement = document.getElementById('score');
const upgradeButton = document.getElementById('upgradeButton');

// Sound effect for clicking
const clickSound = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');

cookieElement.addEventListener('click', () => {
    cookies += cookiePerClick;
    updateScore();
    clickSound.play(); // Play sound on click
});

upgradeButton.addEventListener('click', () => {
    if (cookies >= upgradeCost) {
        cookies -= upgradeCost;
        cookiePerClick++;
        upgradeCost = Math.floor(upgradeCost * 1.5); // Increase cost for next upgrade
        updateScore();
        upgradeButton.innerText = `Upgrade (Cost: ${upgradeCost} cookies)`;
    } else {
        alert("Not enough cookies!");
    }
});

function updateScore() {
    scoreElement.innerText = `Cookies: ${cookies}`;
}