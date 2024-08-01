let button=document.querySelector("#btn");
button.addEventListener("click",function(){
    const nextSection=document.querySelector(".Sun");
    nextSection.scrollIntoView({behavior:'smooth'});
});

let menu=document.querySelector(".Menu");
let icon=document.querySelector(".nav-planets i");
let Hero=document.querySelector(".hero");
icon.addEventListener("click",()=>{
    if(menu.style.display==='none')
    {
        menu.style.display='block';
        menu.classList.add("show");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        

    }
    else
    {
        menu.classList.remove("show");
        menu.style.display='none';
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
})