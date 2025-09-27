document.querySelector("#donorForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    name: document.querySelector("#name").value,
    age: document.querySelector("#age").value,
    bloodGroup: document.querySelector("#blood").value,
    contact: document.querySelector("#phone").value
  };

  try {
    const res = await fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert("Error: " + err.message);
  }
});

