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
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        #root {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
          align-items: center;
          justify-items: center;
        }
      </style>
      <div id="root"> </div>
    `;
    return template.content.cloneNode(true);
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
      .addEventListener("click", (e) => this.kickEmployee(e));
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
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .employee-card {
          border: 2px solid rgba(0, 0, 0, 0.4);
          border-radius: 15px;
          padding: 10px;
          width: fit-content;
          min-width: 410px;
          minheight: 270px;
          display: flex;
          flex-direction: row;
        }
        .employee-card img {
          width: 150px;
          height: 150px;
          border-radius: 50px;
          margin-right: 20px;
          align-self: center;
          border: 2px solid rgba(0, 0, 0, 0.6);
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
      <div class="employee-card">
        <img src="" />
        <hr />
        <div id="info-card">
          <div id="data-id"></div>
          <h1 class="name"></h1>
          <p class="email"></p>
          <p class="phone"></p>
          <p class="department_name"></p>
          <button class="edit">Edit</button>
          <button class="kick">Kick</button>
        </div>
      </div>
    `;
    return template.content.cloneNode(true);
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
    const template = document.createElement("template");
    template.innerHTML = `
    <style>
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    input {
      margin: 10px;
      width: 200px;
      height: 30px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
    }
    button {
      margin: 10px;
      width: 100px;
      height: 30px;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      background-color: lightgreen;
    }
    </style>
    <form>
      <input class="name"></input>
      <input class="email"></input>
      <input class="phone"></input>
      <input class="department_id"></input>
      <button class="">Update</button>
    </form>
    `;
    return template.content.cloneNode(true);
  }
}

window.customElements.define("employee-card", EmployeeCard);
window.customElements.define("employee-form", EmployeeForm);
window.customElements.define("employee-cards", EmployeeCards);

// class ImageUploader extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(this.#template().content.cloneNode(true));
//     this.fileInput = this.shadowRoot.querySelector("#file-input");
//     this.previewImage = this.shadowRoot.querySelector("#preview-image");
//   }

//   connectedCallback() {
//     this.fileInput.addEventListener("change", () => {
//       const file = this.fileInput.files[0];
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.previewImage.src = reader.result;
//         this.#saveImage(file);
//       };
//       reader.readAsDataURL(file);
//     });
//   }

//   #template() {
//     const template = document.createElement("template");
//     template.innerHTML = `
//       <style>
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }
//         #preview-image {
//           width: 200px;
//           height: 200px;
//           object-fit: cover;
//           margin-bottom: 10px;
//         }
//       </style>
//       <div class="container">
//         <img id="preview-image" src="" alt="Preview Image">
//         <input type="file" id="file-input">
//       </div>
//     `;
//     return template;
//   }

//   #saveImage(file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const base64Image = reader.result.split(",")[1];
//       const fileName = file.name;
//       const url = `/img/${fileName}`;
//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify({ image: base64Image }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.error(error));
//     };
//     reader.readAsDataURL(file);
//   }
// }

// window.customElements.define("image-uploader", ImageUploader);
