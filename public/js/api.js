async function getEmployees() {
  const res = await fetch("api/employees");

  const data = await res.json();

  return data;
}

async function index() {
  const employees = await getEmployees();
  console.log(employees);

  employees.forEach((employee) => {
    const element = new EmployeeCard(employee);
    root.appendChild(element);
  });
}

async function kickEmployee(id) {
  const res = await fetch(`/api/delete/employees/${id}`, {
    method: "POST",
  });
  console.log(await res.json());
  location.reload();
}

class EmployeeCard extends HTMLElement {
  constructor(employee) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.#template());

    this.shadowRoot.querySelector(".name").textContent = employee.name;
    this.shadowRoot.querySelector(".email").textContent = employee.email;
    this.shadowRoot.querySelector(".phone").textContent = employee.phone;
    this.shadowRoot.querySelector(".department_id").textContent =
      employee.department_id;
    this.shadowRoot
      .querySelector("img")
      .setAttribute("src", `/img/${employee.img}.jpg`);
    this.shadowRoot.querySelector(".kick").setAttribute("value", employee.id);
    const kickButton = this.shadowRoot.querySelector(".kick");
    kickButton.addEventListener("click", (event) => {
      event.preventDefault();
      kickEmployee(event.target.value);
    });
  }

  #template() {
    const template = document.createElement("template");
    template.innerHTML = `
       <style>
         .employee-card {
            border: 2px solid rgba(0,0,0,0.4);
            border-radius: 15px;
            padding: 10px;
            width: fit-content;
            min-width: 410px;
            minheight: 270px;
            display: flex;
            flex-direction: row;
          }
         .employee-card img {
            width:150px;
            height: 150px;
            border-radius: 50px;
            margin-right: 20px;
            align-self: center;
            border: 2px solid rgba(0,0,0,0.6);
            border-radius: 15px;
         }
         .employee-card button {
            border: none;
            height: 30px;
            width: 60px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 500;
         }
         #info-card {
            margin-left: 10px;
         }
         .edit {
            background-color: beige;
         }
         .kick {
            background-color: red;
         }
       </style>
       <div class='employee-card'>
         <img src="" >
         <hr/>
         <div id="info-card">
         <div id="data-id"></div>
         <h1 class='name'></h1>
         <p class='email'></p>
         <p class='phone'></p>
         <p class='department_id'></p>
         <button class="edit">Edit</button>
         <button class="kick">Kick</button>   
         </div>
       </div>
     `;
    return template.content.cloneNode(true);
  }
}

window.customElements.define("employee-card", EmployeeCard);
