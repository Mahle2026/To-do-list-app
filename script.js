const nameInput = document.getElementById("nameInput");
const welcomeText = document.getElementById("welcomeText");

nameInput.addEventListener("input", () => {
      let name = nameInput.ariaValueMax.trim();

      if (name) {
        welcomeText.textContent = "Welcome" + name + "👋";
      } else{
        welcomeText.textContent = "Welcome";
      }
});

function startApp() {
    let name = document.getElementById("nameInput");
    
    if (name === ""){
        alert("Please enter your name");
        return;
    }
    
    localStorage.setItem("username", name);
    window.location.href = "mainpage.html";
}