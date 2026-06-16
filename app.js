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
    let taskText = document.getElementById("taskInput").value.trim();
    let taskTime = document.getElementById("taskTime").value;

    if (!taskText) return;
 
    if(!data[selectData]) {
        data[selectedDate] = { task: [], habits: []};
    }

    data[selectedDate].tasks.push({
        text: taskText,
        time: taskTime,
        done: false
    });

    document.getElementById("taskInput").value = "";
    document.getElementById("taskTime").value = "";

    saveData();
    render();
}

function addHabit() {
    let habitText = documen.getElementById("habitInput").value.trim();

    if (!habitText) return;
    
    if(!data[selectedDate]) {
        data[selectedDate] = { tasks: [], habits: [] };
    }

    data[selectedDate].habits.push({
        text: habitText,
        done: false
    })

    document.getElementById("taskInput").value = "";
    document.getElementById("taskTime").value = "";

    saveData();
    render();
}
