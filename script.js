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
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(45deg, #ff8c00, #ff2e63);
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h1 {
    margin-bottom: 10px;
}

.dice-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.dice-container img {
    width: 80px;
    height: 80px;
    animation: shake 0.6s;
}

@keyframes shake {
    0% { transform: rotate(0); }
    25% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    100% { transform: rotate(0); }
}

.btn {
    background-color: #ffcc00;
    color: black;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    cursor: pointer;
    margin: 10px;
    border-radius: 5px;
    transition: 0.3s;
}

.btn:hover {
    background-color: #ffea00;
}

#result {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
