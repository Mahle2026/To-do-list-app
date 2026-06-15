function startApp() {
    let name = document.getElementById("nameInput").value;
    localStorage.setItem("userName, name");
    window.location.href = "index.html";
}