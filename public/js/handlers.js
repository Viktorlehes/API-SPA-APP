async function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const department_id = document.getElementById("department_id").value;
  const img = document.getElementById("img").value;

  const response = await fetch("/api/employes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      department_id,
      img,
    }),
  });
  const data = await response.json();
  // const newEmployee = await fetch(data.location);

  // remove / replace from dom
  location.reload();
}
