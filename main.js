function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); 
    let darkModeButtonElement = document.getElementById("light-mode-btn");

     // if it's in dark mode, change it to light mode 
     if (bodyElement.style.background === "white") {
        bodyElement.style.background = "#FBBE81";
        darkModeButtonElement.innerHTML = "Light Mode";
    }
    // if background is NOT orange, change background to white
    else {
        bodyElement.style.background = "white"; //set background to white
        darkModeButtonElement.innerHTML = "Dark Mode";
    }
}
