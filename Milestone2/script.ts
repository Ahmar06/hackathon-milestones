const togglebutton = document.getElementById("toggle-skill") as HTMLButtonElement
const skills = document.getElementById("skill") as HTMLElement

togglebutton.addEventListener("click",()=> {
    if(skills.style.display === "none"){
        skills.style.display ="block"
    }
    else{
        skills.style.display = "none"
    }
});