const barIconEl = document.querySelector("#bar");
const navbar = document.querySelector(".navbar");
const closebtn = document.querySelector("#close")

if (barIconEl) {
    barIconEl.addEventListener("click", () => {
        navbar.classList.add("active");
    })
    if (closebtn) {
        closebtn.addEventListener("click", () => {
            navbar.classList.remove("active");
        })
        
    }
    
}