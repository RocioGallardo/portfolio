let img = document.getElementById("img")
let imgWidth = img.naturalWidth;
let hi = document.getElementById("hi")



window.addEventListener("scroll", () =>{

    let value = window.scrollY
    console.log(value)
    if(value > 30){
        hi.style.opacity = 0;
    } else{
        hi.style.opacity = 1;
    }
    if(window.innerWidth + value * 0.5 < imgWidth){
        img.style.left = -(value * 0.5) + "px"
    }
})

