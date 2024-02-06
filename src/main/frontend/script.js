const nameUserSpan = document.getElementById("user_name");
const updateImg = document.getElementById("update_img");
const trashImg = document.getElementById("trash_img");

function removeTask(stringId) {
    document.getElementById(stringId)
        .addEventListener("click",
            () => alert("Tarefa removida com sucesso.")
    );
}

function editTask(stringId) {
    document.getElementById(stringId)
        .addEventListener("click",
            () => alert("Tarefa editada com sucesso.")
    );
}

//modal script:

const modal = document.getElementById("myModal");
const btn = document.getElementById("new_task");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", ()=> modal.style.display = "block");
span.addEventListener("click", ()=> modal.style.display = "none");

//handle with backend:

const taskName = document.getElementById("task_name");
const description = document.getElementById("description");
const isAvaliable = document.getElementsByName("isavaliable");
const priority = document.getElementById("priority");
const saveNewTask = document.getElementById("save_new_task");

let data = {
    "nome": "teste",
    "descricao": "testanto frontend",
    "realizado": true,
    "prioridade": 0
  }

async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

 saveNewTask.addEventListener("click", ()=> postJSON(data))

