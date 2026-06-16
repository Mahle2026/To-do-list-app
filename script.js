function goToApp() {
    let name = document.getElementById("nameInput");
    
    if (name === ""){
        alert("Please enter your name");
        return;
    }
    
    localStorage.setItem("username", name);
    window.location.href = "mainpage.html";
}