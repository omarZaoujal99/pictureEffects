// effect 1
const eff1 = document.getElementById("eff1");
const divAbo1 = document.getElementById("divAbo1");
eff1.addEventListener("mouseover",()=>{
    divAbo1.style.transform = "skew(0deg,0deg)";
    divAbo1.style.opacity = 1;
})
eff1.addEventListener("mouseleave",()=>{
    divAbo1.style.transform = "skew(60deg,60deg)";
    divAbo1.style.opacity = 0;
})


// effect 2
const eff2 = document.getElementById("eff2");
const divAbo2 = document.getElementById("divAbo2");
eff2.addEventListener("mouseover",()=>{
    divAbo2.style.transform = "rotateZ(0deg) scale(1,1)";

})
eff2.addEventListener("mouseleave",()=>{
    divAbo2.style.transform = "rotateZ(360deg) scale(0,0)"
})


// effect 3
const eff3 = document.getElementById("eff3");
const divAbo3 = document.getElementById("divAbo3");
eff3.addEventListener("mouseover",()=>{
    divAbo3.style.left = 0;
    divAbo3.style.opacity = 1;
})
eff3.addEventListener("mouseleave",()=>{
    divAbo3.style.left = "100%";
    divAbo3.style.opacity = 0;
})


// effect 4
const eff4 = document.getElementById("eff4");
const d1eff4 = document.getElementById("d1eff4");
const d2eff4 = document.getElementById("d2eff4");
const divAbo4 = document.getElementById("divAbo4");
eff4.addEventListener("mouseover",()=>{
    d1eff4.style.opacity = 1;
    d2eff4.style.opacity = 1;
    divAbo4.style.opacity = 1;
    divAbo4.style.transition = "all 3s";
    d1eff4.style.left = "0%";
    d2eff4.style.left = "50%";
})
eff4.addEventListener("mouseleave",()=>{
    d1eff4.style.opacity = 0;
    d2eff4.style.opacity = 0;
    divAbo4.style.opacity = 0;
    divAbo4.style.transition = "all 1s";
    d1eff4.style.left = "-50%";
    d2eff4.style.left = "100%";
})


// effect 5
const eff5 = document.getElementById("eff5");
const deff5 = document.querySelectorAll(".deff5");
const divAbo5 = document.getElementById("divAbo5");
eff5.addEventListener("mouseover",()=>{
    for(let i = 0; i < deff5.length; i++){
        deff5[i].style.top = "0%";
        deff5[i].style.opacity = 1;
    }
    divAbo5.style.opacity = 1
    divAbo5.style.transition = "all 2.5s";
})
eff5.addEventListener("mouseleave",()=>{
    for(let i = 0; i < deff5.length; i++){
        deff5[i].style.top = "-100%";
        deff5[i].style.opacity = 0;
    }
    divAbo5.style.opacity = 0;
    divAbo5.style.transition = "all .5s";
})


// effect 6
const eff6 = document.getElementById("eff6");
const deff6 = document.querySelectorAll(".deff6");
const divAbo6 = document.getElementById("divAbo6");
eff6.addEventListener("mouseover",()=>{
    for(let i = 0; i < deff6.length; i++){
        deff6[i].style.opacity = 1;
    }
    deff6[0].style.left = "0%";
    deff6[0].style.top = "0%";
    deff6[1].style.left = "50%";
    deff6[1].style.top = "0%";
    deff6[2].style.top = "50%";
    deff6[2].style.left = "0%";
    deff6[3].style.top = "50%";
    deff6[3].style.left = "50%";
    divAbo6.style.opacity = 1;
    divAbo6.style.transition = "all 3s";
})
eff6.addEventListener("mouseleave",()=>{
    for(let i = 0; i < deff6.length; i++){
        deff6[i].style.opacity = 0;
    }
    deff6[0].style.left = "-50%";
    deff6[0].style.top = "-50%";
    deff6[1].style.left = "100%";
    deff6[1].style.top = "-50%";
    deff6[2].style.top = "100%";
    deff6[2].style.left = "-50%";
    deff6[3].style.top = "100%";
    deff6[3].style.left = "100%";
    divAbo6.style.opacity = 0;
    divAbo6.style.transition = "all 1s";
})


// effect 7
const eff7 = document.getElementById("eff7");
const divAbo7 = document.getElementById("divAbo7");
const imgEff7 = document.getElementById("imgEff7");
eff7.addEventListener("mouseover",()=>{
    divAbo7.style.opacity = 1;
    divAbo7.style.transform = "scale(0.8,0.8)";
    imgEff7.style.filter = "brightness(30%)";
})
eff7.addEventListener("mouseleave",()=>{
    divAbo7.style.opacity = 0;
    divAbo7.style.transform = "scale(0,0)";
    imgEff7.style.filter = "brightness(120%)";
})


// effect 8
const eff8 = document.getElementById("eff8");
const imgEff8 = document.getElementById("imgEff8");
const divAbo8 = document.getElementById("divAbo8");
eff8.addEventListener("mouseover",()=>{
    imgEff8.style.transform = "rotateY(180deg)";
    imgEff8.style.opacity = 0;
    divAbo8.style.transform = "rotateY(0deg)";
    divAbo8.style.opacity = 1;
})
eff8.addEventListener("mouseleave",()=>{
    imgEff8.style.transform = "rotateY(0deg)";
    imgEff8.style.opacity = 1;
    divAbo8.style.transform = "rotateY(180deg)";
    divAbo8.style.opacity = 0;
})