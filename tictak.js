let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#myresetButton");
let msgContainer = document.querySelector(".containner");
let btn1 = document.querySelector(".btn1");
let message = document.querySelector("#message")

let playerO = true;

// pattern to match the game for winning
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerHTML = "X"
            playerO = false;
        } else {
            box.innerHTML = "O"
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    });
})

// to disable click button after the winner is verified
const boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// to open click button after game is reset or new game
const boxEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

// to print who is winner of game 
const gameWinner = (winner) => {
    boxDisable()
    message.innerText = `Congrulation you ${winner} is winner`
    msgContainer.classList.remove("hide");
}

// to reset or restart new game 
const resertGame = () => {
    boxEnable();
    let playerO = true;
    msgContainer.classList.add("hide")

}

// to check the winning pattern 
let checkWinner = () => {
    for (let pattern of winPattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 == val3) {
                console.log("Winner", val1);
                gameWinner(val1)
            }
        }
    }
}

btn1.addEventListener("click", resertGame);
resetBtn.addEventListener("click", resertGame);