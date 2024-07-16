let title = document.getElementById("title");
let description = document.getElementById("description");
let form = document.querySelector("form");
let container = document.querySelector(".container");

const tasks = localStorage.getItem("task") 
? JSON.parse(localStorage.getItem("task")) :[];

  function showalltask(){
    tasks.forEach((value,index) =>{
        let div = document.createElement("div")
        div.setAttribute("class","tasks")

        let innerDiv = document.createElement("div");
        div.append(innerDiv);

        let p = document.createElement("p");
        p.innerText = value.title
        innerDiv.append(p);

        let span = document.createElement("span");
        span.innerText = value.description
        innerDiv.append(span);

        let btn = document.createElement("btn")
        btn.setAttribute("class","deleteBtn");
        btn,innerText ="-";

        div.append(btn);
        container.append(div);
    });
  }
function removeTask(){
    tasks.forEach((value) => {
        let div = document.querySelector(".tasks");
        div.remove();
    });
}

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        tasks.push({
            title: title.value,
            description: description.value,
        });
        localStorage.setItem("task",JSON.stringify(tasks));
        showalltask();
        console.log(tasks);
    });
