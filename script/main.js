let img = document.getElementById("img")
let imgWidth = img.naturalWidth;
let hi = document.getElementById("hi")
let footer = document.getElementById("footer")
let section = document.getElementById("section")



window.addEventListener("scroll", () =>{
    let value = window.scrollY
    let alturaTotal = document.documentElement.scrollHeight
    let alturaPantalla = screen.height
    
    if(value > 30){
        hi.style.opacity = 0;
    } else{
        hi.style.opacity = 1;
    }
    if(value >= alturaTotal-alturaPantalla-20){
        footer.style.opacity = 1;
    }else{
        footer.style.opacity = 0;
    }
    if(window.innerWidth + value * 0.5 < imgWidth){
        img.style.left = -(value * 0.5) + "px"
    }
})

