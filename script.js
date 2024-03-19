const title = document.querySelector(".abm_title li");
const desc = document.querySelector(".abm_main-skills");

title.addEventListener("click",() =>{
    desc.classList.toggle("open");
    title.classList.toggle("open");
})