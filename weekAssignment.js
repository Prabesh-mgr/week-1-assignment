let form = document.querySelector("form");
let taskList = document.querySelector(".taskList")

function addTask(event){
    event.preventDefault()
    let inputMess = document.querySelector("input").value;

    if(inputMess === ''){
        alert ("wrong request")
        // form.disabled = true;
    }

    let demo = document.createElement('li');

    demo.innerHTML = `
    <li>${inputMess} <button onclick = delelteItems(this) >Delete</button></li>
    `
    taskList.append(demo);

    document.querySelector("input").value = '';
}

function delelteItems(button){
    let demo = button.closest('li')
    demo.remove();
}