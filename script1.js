let coins = parseInt(localStorage.getItem('coins')) || 0;
let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;
const coinsToLevelUp = 1000000;
const maxLevel = 10;

function addCoins() {
    coins += 10;
    localStorage.setItem('coins', coins); // ذخیره تعداد سکه‌ها
    document.getElementById('score').textContent = `$ ${coins.toLocaleString()}`;
    const progressPercent = (coins % coinsToLevelUp) / coinsToLevelUp * 100;
    document.getElementById('progress').style.width = progressPercent + '%';
    if (coins >= coinsToLevelUp * currentLevel && currentLevel < maxLevel) {
        currentLevel++;
        localStorage.setItem('currentLevel', currentLevel); // ذخیره سطح کاربر
        document.getElementById('currentLevel').textContent = currentLevel;
    }
    document.getElementById('clickSound').play();
}

function setGender(gender) {
    localStorage.setItem('userGender', gender);
    document.getElementById('genderSelection').style.display = 'none';
    document.getElementById('nameInput').style.display = 'block';
}

function setName() {
    const name = document.getElementById('nameField').value;
    if (name) {
        localStorage.setItem('userName', name);
        loadProfile();
    }
}

function loadProfile() {
    const userName = localStorage.getItem('userName');
    const profilePic = localStorage.getItem('profilePic');
    const userGender = localStorage.getItem('userGender');
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }
    if (profilePic) {
        document.getElementById('profilePic').src = profilePic;
    }
    document.getElementById('score').textContent = `$ ${coins.toLocaleString()}`; // بارگذاری تعداد سکه‌ها
    document.getElementById('currentLevel').textContent = currentLevel; // بارگذاری سطح کاربر
    const clickableHamster = document.getElementById('clickableHamster');
    clickableHamster.src = 'maleHamster.png'; // تصویر مرد باقی می‌ماند
}

window.onload = loadProfile;
