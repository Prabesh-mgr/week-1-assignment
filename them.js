let todo = [];

function toNextPage(event){
    event.preventDefault();
    let name1 = document.getElementById("name").value
    todo.push(name1);
    toEditiable()
}

function deleteDemo(idx){
    todo = todo.filter((el, index)=> index !== idx)
     toEditiable();
}

function toEditiable(){
    let output = ``;
    todo.forEach((el, idx)=>{
        output += `<li>${el}</li> <button onClick="deleteDemo(${idx})">Delete</button>`
    })
    document.getElementById("todo-list").innerHTML = output
}
