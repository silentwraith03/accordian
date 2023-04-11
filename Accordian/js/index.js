
let arrowBtn=document.querySelectorAll(".arrow-btn i");
let colBody=document.querySelectorAll(".col-body");




arrowBtn.forEach((btn,index)=>{

    btn.addEventListener("click",()=>{
        console.log(colBody[index]);
        colBody[index].classList.toggle("active");
        btn.classList.toggle("rotate");
    })
})
