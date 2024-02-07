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

btn.addEventListener("click", () => modal.style.display = "block");
span.addEventListener("click", () => modal.style.display = "none");

//handle with backend:

const taskName = document.getElementById("task_name");
const description = document.getElementById("description");
const isAvaliable = document.getElementsByName("isavaliable");
const priority = document.getElementById("priority");
const saveNewTask = document.getElementById("save_new_task");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");
let todosList = [];

let data = {
  "nome": "response",
  "descricao": "testando response",
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

    const result = await response.json(); //--> lista de todos
    todosList = result;
    console.log("Success:", todosList);
  } catch (error) {
    console.error("Error:", error);
  }
}

function fillTable(response) {

  //LIMPAR A TABELA ANTES DE PREENCHER.

  console.log("fillTable() ...");
  console.log(response);

  if (response == null || response == "") {
    console.log("response -> nullo ou vazio");
  }else{
    response.map(
      r => {
        let tr = document.createElement('tr');

        let rowNome = document.createElement('td');
        rowNome.innerHTML = r.nome;

        let rowDescricao = document.createElement('td');
        rowDescricao.innerHTML = r.descricao;

        let rowRealizado = document.createElement('td');
        rowRealizado.innerHTML = r.realizado;

        let rowPrioridade = document.createElement('td');
        rowPrioridade.innerHTML = r.prioridade;

        tr.appendChild(rowNome);
        tr.appendChild(rowDescricao);
        tr.appendChild(rowRealizado);
        tr.appendChild(rowPrioridade);
        tbody.appendChild(tr);

        console.log("tabela criada");
      })
  }
}
//carregando os dados na página:
postJSON(data)

saveNewTask.addEventListener("click", () => {
  console.log(todosList);
  modal.style.display = "none"
  fillTable(todosList);
});

