export const infoTemplate = document.createElement("template");
infoTemplate.innerHTML = `
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

export const formTemplate = document.createElement("template");
formTemplate.innerHTML = `
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

export const rootTemplate = document.createElement("template");
rootTemplate.innerHTML = `
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

export const newEmployeeForm = document.createElement("template");
newEmployeeForm.innerHTML = `
<style>
.new-employee-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.new-employee-form h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.new-employee-form form {
    display: flex;
    flex-direction: column;
}

.new-employee-form label {
    font-weight: bold;
    margin-bottom: 5px;
}

.new-employee-form input[type="text"],
.new-employee-form input[type="email"],
.new-employee-form input[type="number"] {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.new-employee-form input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.new-employee-form input[type="submit"]:hover {
    background-color: #0056b3;
}   
</style>

<div class="new-employee-form">
    <h1>Add New Employee</h1>
    <form id="employeeForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" required><br><br>
        
        <label for="department_id">Department ID:</label>
        <input type="number" id="department_id" name="department_id" required><br><br>
        
        <label for="img">Image URL:</label>
        <input type="text" id="img" name="img" required><br><br>
        
        <input type="submit" value="Submit">
    </form>
</div>
`;
