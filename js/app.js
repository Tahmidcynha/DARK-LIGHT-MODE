// *SIDEBAR START 
let navbarBtn = document.querySelector(".navbarBtn")
let sidebar = document.querySelector(".sidebar")

function activeSidebar (){
    sidebar.classList.add("active")
}
navbarBtn.addEventListener("click", activeSidebar)

let crossBtn = document.querySelector(".crossBtn")
function closeBtn(event){
    if(event.target.classList.contains("sidebar") || event.target.classList.contains("crossBtn")){
        sidebar.classList.remove("active")
    }
}
crossBtn.addEventListener("click", closeBtn)
sidebar.addEventListener("click", closeBtn)

//  *SIDEBAR END 

// *DARK & NIGHT MOOD 

let darkModeBtn = document.querySelector(".darkModeBtn")
let body = document.querySelector("body")
let heading = document.querySelector(".dayNightMode h2")

function activeDarkMode(){
    body.classList.toggle("darkMode")
    
    if (body.classList.contains("darkMode")){
        heading.innerHTML = "Dark Mode ON"
    }
    else{
        heading.innerHTML = "Light Mode ON"
    }
}
darkModeBtn.addEventListener("click", activeDarkMode)






