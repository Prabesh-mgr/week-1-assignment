let btn = document.querySelector("#btn");
let message = document.querySelector(".weather-box")
console.log(message);



btn.addEventListener("click", ()=>{
    let newText = document.createElement("p")
    newText.innerText = "Hi my name is prabesh magar"
    message.append(newText);
})