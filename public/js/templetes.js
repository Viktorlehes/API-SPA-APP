export const infoTemplate = document.createElement("template");
infoTemplate.innerHTML = `
<style>
    a,
    a:hover,
    a:active {
        text-decoration: none;
        color: #525c65;
        transition: color 0.3s ease;
    }
    .product-card {
        position: relative;
        margin: 10px 0px;
        z-index: 1;
        display: block;
        background: #FFFFFF;
        min-width: 270px;
        height: 470px;
        box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
        border-radius: 0.375rem;
    }
    .product-card:hover {
        box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2)
    }
    .product-card .card-thumbnail {
        background: #000000;
        overflow: hidden;
    }
    .product-card .card-thumbnail img {
        display: block;
        width: 270px;
        height: 270px;
        -webkit-transition: all .3s cubic-bezier(0, .5, .5, 1);
        -o-transition: all .3s cubic-bezier(0, .5, .5, 1);
        transition: all .3s cubic-bezier(0, .5, .5, 1);
    }
    .product-card:hover .card-thumbnail img {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        transform: scale(1.1);
        opacity: .6;
    }
    
    .fa-send:before {
        color: #fff;
        position: absolute;
        top: 15px;
        left: 13px;
    }
    
    .product-card .card-content {
        position: absolute;
        bottom: 0;
        background: #FFFFFF;
        width: 100%;
        padding: 40px 30px;
        -webkti-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        -o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
        transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
    }
    
    .product-card .card-content .send {
        position: absolute;
        top: -30px;
        right: 10px;
        height: 60px;
        width: 60px;
        background: #197;
        border-radius: 50%;
        cursor: pointer;
        transition: all 1s ease;
        transition-delay: 0.3s;
        opacity: 0;
    }
    
    .product-card:hover .card-content .send {
        opacity: 1;
    }
    
    .product-card .card-content .card-title {
        margin: 0;
        padding: 0 0 10px;
        color: #333333;
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
    }
    
    .product-card .card-content .card-sub-title {
        margin: 0;
        padding: 0 0 20px;
        color: #197;
        font-size: 15px;
        font-weight: 400;
        text-transform: capitalize;
    }
    
    .product-card .card-content .description {
        color: #666666;
        font-size: 12px;
        line-height: 1.8em;
        display: none;
        margin: 0;
        padding: 0;
    }

    .product-card .card-content .post-meta {
        margin: 30px 0 0;
        color: #999999;
    }
    
    .product-card .card-content .post-meta .time-stamp {
        margin: 0 80px 0 0;
    }
    
    .product-card .card-content .post-meta a {
        color: inherit;
        text-decoration: none;
    }
    .list-inline {
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        padding-left: 0;
    }

    .list-inline button {
        border: none;
        width: 70px;
        height: 30px;
        cursor: pointer;
        font-size: 16px;
        line-height: 1.8em;
        color: Azure;
    }

    .list-inline .edit {
        background-color: CadetBlue;
    }
    .list-inline .kick {
        background-color: IndianRed;
    }
</style>
<div class="product-container employee-card">
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div class="product-card">
          <div class="card-thumbnail">
            <img
              class="img-responsive"
              src=""
            />
          </div>
          <div class="card-content">
            <h1 class="card-title name"></h1>
            <h2 class="card-sub-title department_name"></h2>
            <p class="description email">
            </p>
            <p class="description phone">
            </p>
            <ul class="list-inline post-meta">
              <li class="time-stamp">
              <button class="edit">Edit</button>
              </li>
              <li class="card-comment">
                <button class="kick">Kick</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`;

export const formTemplate = document.createElement("template");
formTemplate.innerHTML = `
    <style>
    .product-card {
        position: relative;
        margin: 10px 0px;
        z-index: 1;
        display: block;
        background: #FFFFFF;
        min-width: 270px;
        height: 470px;
        box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
        border-radius: 0.375rem;
        transition: all 0.3s ease;
    }
    
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 470px;
      min-width: 270px;
      background: #FFFFFF;
      box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
      border-radius: 0.375rem;

    }
    input {
      margin: 10px;
      width: 200px;
      height: 30px;
      font-size: 15px;
      font-weight: 400;
      text-transform: capitalize;
    }
    button {
      margin: 10px;
      width: 100px;
      height: 30px;
      font-size: 15px;
      font-weight: 500;
      background-color: DarkGreen;
      color: Azure;
      border: none;
    }
    </style>
    <div class="employee-card">
        <form>
            <input class="name"></input>
            <input class="email"></input>
            <input class="phone"></input>
            <input class="department_id"></input>
            <button class="">Update</button>
        </form>
    </div>
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
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
    box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
    border-radius: 0.375rem;
        
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
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    background-color: DarkGreen;
    color: Azure;
    border: none;
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
