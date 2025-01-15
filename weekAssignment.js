
    let form = document.getElementById("form-submit");
    let btn = document.getElementById("addBtn");
    let task = document.getElementById("task");
    let errorMess = document.getElementById("error-message");
    let taskList = document.getElementById("taskList");
    let count = document.getElementById("taskCount");

    let taskcounter = 0;
    let taskSet = new Set();

    function updatedTaskCount(){
        count.textContent = `Task Remaining: ${taskcounter}`
    }

    form.addEventListener("submit", function (event){
        event.preventDefault();
        let inputValue = task.value.trim();


        if(inputValue === ""){
            errorMess.textContent = "!! Please enter a task !!";
            return;
        }

        if(taskSet.has(inputValue)){
            errorMess.textContent = "!! Sorry, Task already taken !!"
            return;
        }

        errorMess.textContent = "";

        let li = document.createElement('li');

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", function(){
            li.classList.toggle("completed", checkbox.checked);
        })

        let deletBtn = document.createElement("button");
        deletBtn.textContent = "Delete";
        deletBtn.classList.add("delete-btn");
        deletBtn.addEventListener("click", function(){
            li.remove();
            taskSet.delete(inputValue);
            taskcounter--;
            updatedTaskCount();
        })

        let todoList = document.createElement("span");
        todoList.textContent = inputValue;

        li.appendChild(checkbox);
        li.appendChild(todoList);
        li.appendChild(deletBtn);

        taskList.appendChild(li);
        taskSet.add(inputValue)

        task.value = "";

        taskcounter++;
        updatedTaskCount();
    })
    updatedTaskCount()
