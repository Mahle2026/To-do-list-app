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

function toggleTask(index) {
    data[selectedDate].tasks[index].done =
    !data[selectedDate].tasks[index].done;

 saveData();
 render();
}

function toggleHabit(index) {
    data[selectedDate].habits[index].donr =
    !data[selectedDate].habits[index].done;

    saveData();
    render();
}

function render(){
    let day=data[selectedDate] || {tasks: [], habits: [] };

    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    day.tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let row = document.createElement("div");
        row.className = "taskRow";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    checkbox.onchange = () => toggleTask (index);

    let text = document.createElement("span");
    text.style.textDecoration = "line-through";
    (task.time ? "[" + task.time + "] ": "") + task.text;

    if (task.done) {
        text.style.textDecoration = "line-through";
       text.style.opacity = "0.6";
    }

    row.appendChild(checkbox);
    row.appendChild(text);
    li.appendChild(row);
    taskList.appendChild(li);

    });

let habitList = document.getElementById("habitList");
habitList.innerHTML = "";

day.habits.forEach((habit, index) =>{
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = habits.done;

    checkbox.onchange = () => toggleHabit(index);

    let text = document.createElement("span");
    text.textContent = "" + habit.text;

    if (habit.done) {
        text.style.textDecoration = "line-through";
    }

    li.appendChild(checkbox);
    li.appendChild(text);

    habitList.appendChild(li);
});

}
 render();