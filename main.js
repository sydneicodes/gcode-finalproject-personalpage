function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); 
    let darkModeButtonElement = document.getElementById("light-mode-btn");
    let yogaSections = document.getElementsByClassName("yoga-section");
    for (let index = 0; index < yogaSections.length; index++) {
        if (yogaSections[index].classList.contains("light")) {
            yogaSections[index].classList.remove("light");
            yogaSections[index].classList.add("dark");
        }  

        else if (yogaSections[index].classList.contains("dark")){
            yogaSections[index].classList.remove("dark");
            yogaSections[index].classList.add("light");
        }
    }
}

