let tbody = document.querySelector(".tbody");
let table = document.querySelector("table")
let loader = document.querySelector(".spinner")
let URL = "https://dummyjson.com/users"

window.addEventListener("load",()=>{
  apiHandling();
})

async function apiHandling() {
  let response = await fetch(URL);
  let data = await response.json()
  let users = data.users;
  console.log(users);

  if(response.ok){
    loader.classList.add("spinner-hide");
    loader.addEventListener("transitionend", ()=>{
    loader.remove()
    })
  }

  users.map((user, index) => {
    let demo = document.createElement("tr");

    if(user.age < 30){
      demo.style.color = "blue";
    }

    demo.innerHTML = `
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        `
    tbody.append(demo)
  })

}
apiHandling()