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
