const header = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const learn = document.querySelector(".learn")
const CTA = document.querySelector(".CTA")

hamburger.addEventListener('click', ()=>{
     console.log("clicked")
     if (menu.style.display == "none"){
         menu.style.display = "block"
     }else{
         menu.style.display = "none"
     }
 })

learn.addEventListener('click', ()=>{
    console.log("clicked")
    if (CTA.style.display == "none"){
        CTA.style.display = "block"
    }else{
        CTA.style.display = "none"
    }
})
