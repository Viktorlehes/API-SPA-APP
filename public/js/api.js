import {
  rootTemplate,
  formTemplate,
  infoTemplate,
  newEmployeeForm,
} from "./templetes.js";

class EmployeeCards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template);
  }

  connectedCallback() {
    this.loadEmployees();
  }

  async loadEmployees() {
    const employees = await this.getEmployees();
    employees.forEach((employee) => {
      const element = new EmployeeCard(employee);
      this.shadowRoot.querySelector("#root").appendChild(element);
    });
  }

  get template() {
    return rootTemplate.content.cloneNode(true);
  }

  async getEmployees() {
    const res = await fetch("api/employees");
    return res.json();
  }
}

class EmployeeCard extends HTMLElement {
  constructor(employee) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template);
    this.employee = employee;

    this.shadowRoot.querySelector("img").src = `/img/${employee.img}.jpg`;
    this.shadowRoot.querySelector(".employee-card").id = employee.id;

    this.shadowRoot
      .querySelector(".kick")
      .addEventListener("click", () => this.kickEmployee(this.employee.id));
  }

  connectedCallback() {
    const selectors = ["name", "email", "phone", "department_name"];
    selectors.forEach((selector) => {
      this.shadowRoot.querySelector(`.${selector}`).innerHTML =
        this.employee[selector];
    });

    this.shadowRoot
      .querySelector(".edit")
      .addEventListener("click", (e) => this.editEmployee(e));
  }

  async kickEmployee(id) {
    await fetch(`/api/delete/employees/${id}`, { method: "POST" });
    location.reload();
  }

  editEmployee(e) {
    const grandParent = e.target.parentElement.parentElement;
    grandParent.lastElementChild.remove();
    const element = new EmployeeForm(this.employee);
    grandParent.appendChild(element);
  }

  get template() {
    return infoTemplate.content.cloneNode(true);
  }
}

class EmployeeForm extends HTMLElement {
  constructor(employee) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template);
    this.employee = employee;
  }

  async updateEmployee(employeeId, data) {
    const response = await fetch(`/api/employees/${employeeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        department_id: data.department_id,
        id: employeeId,
      }),
    });
    location.reload();
  }

  connectedCallback() {
    const employeeId = this.employee.id;
    this.getEmployee(employeeId).then((employee) => {
      ["name", "email", "phone", "department_id"].forEach((key) => {
        this.shadowRoot.querySelector(`.${key}`).value = employee[key];
      });
    });

    this.shadowRoot.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const employeeId = this.employee.id;
      const data = ["name", "email", "phone", "department_id"].reduce(
        (acc, key) => {
          acc[key] = this.shadowRoot.querySelector(`.${key}`).value;
          return acc;
        },
        {}
      );
      this.updateEmployee(employeeId, data);
    });
  }

  async getEmployee(id) {
    const res = await fetch(`/api/employees/${id}`);
    return res.json();
  }

  get template() {
    return formTemplate.content.cloneNode(true);
  }
}

class NewEmployeeForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template);
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#employeeForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const data = ["name", "email", "phone", "department_id", "img"].reduce(
          (acc, key) => {
            acc[key] = this.shadowRoot.querySelector(`#${key}`).value;
            return acc;
          },
          {}
        );
        console.log(data);
        this.createEmployee(data);
      });
  }

  async createEmployee(data) {
    const response = await fetch("/api/employes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(await response.json());
    // get new employee and add to dom
    // const newEmployee = await fetch(data.location);
    // remove / replace from dom

    location.reload();
  }

  get template() {
    return newEmployeeForm.content.cloneNode(true);
  }
}

window.customElements.define("employee-card", EmployeeCard);
window.customElements.define("employee-form", EmployeeForm);
window.customElements.define("employee-cards", EmployeeCards);
window.customElements.define("new-employee-form", NewEmployeeForm);
