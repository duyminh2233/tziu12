function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame(choice) {
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let total = dice1 + dice2 + dice3;
    
    let resultText = `Kết quả: 🎲 ${dice1} + 🎲 ${dice2} + 🎲 ${dice3} = ${total}. `;
    
    if ((total >= 11 && total <= 18 && choice === "Tài") || (total >= 3 && total <= 10 && choice === "Xỉu")) {
        resultText += "Bạn thắng! 🎉";
    } else {
        resultText += "Bạn thua! 😢";
    }

    document.getElementById("result").innerHTML = resultText;
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame(choice) {
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let total = dice1 + dice2 + dice3;

    // Cập nhật hình ảnh xúc xắc
    document.getElementById("dice1").src = `dice${dice1}.png`;
    document.getElementById("dice2").src = `dice${dice2}.png`;
    document.getElementById("dice3").src = `dice${dice3}.png`;

    let resultText = `🎲 ${dice1} + 🎲 ${dice2} + 🎲 ${dice3} = ${total}. `;

    if ((total >= 11 && total <= 18 && choice === "Tài") || (total >= 3 && total <= 10 && choice === "Xỉu")) {
        resultText += "<span style='color: #00ff00;'>Bạn thắng! 🎉</span>";
    } else {
        resultText += "<span style='color: #ff0000;'>Bạn thua! 😢</span>";
    }

    document.getElementById("result").innerHTML = resultText;
}
