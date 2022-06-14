const accClick = document.querySelectorAll(".acc-click")
accClick.forEach(ach=>{
    ach.addEventListener("click",show, false)
})

function show(){
    const showit = this.nextElementSibling;
    const isHide = showit.classList.contains("hide")
    accClick.forEach(ach=>{
        const showitem = ach.nextElementSibling
        if(!showitem.classList.contains("hide")){
            showitem.classList.add("hide")
        }
    });
    if(isHide){
        showit.classList.remove("hide")
    }
}
