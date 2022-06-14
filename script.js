const accClick = document.querySelectorAll(".acc-click")
accClick.forEach(ach=>{
    ach.addEventListener("click",showacc, false)
})

function showacc(){
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

function showtabs(){
    const navtag = document.querySelector("nav");
    const tabs = document.querySelector(".fa-bars");

    tabs.addEventListener("click",()=>{
        tabs.classList.toggle("fa-times")
        navtag.classList.toggle("tabs")
    })
}