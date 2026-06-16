let selectedDate = document.getElementById("datePicker").value || new Date().toISOString.split("T")[0];
document.getElementById("datePicker").value = selectedDate;

let data = JSON.parse(localStorage.getItem("appData"));

const username = localStorage.getItem("username");
document.getElementById("welcome").textContent =
"Hello, " + (username || "User") + "👋";

document.getElementById("dataPicker").addEventListener("change", (e) =>{
    selectedDate = e.target.value;
    render();
});

function saveData() {
    localStorage.setItem("appData", JSON.stringify(data));
}

function addTask() {
    let taskText = document
}
