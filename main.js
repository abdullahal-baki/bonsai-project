let menuImg = document.getElementById('menu');
let slideBar = document.getElementById('slide-menu');

// menuImg.src = 'images/menu.png'
slideBar.style.right = "-550px";
menuImg.addEventListener('click',showSlide);
function showSlide(){
    console.log("clicked")
    console.log(slideBar.style.right)
    if (slideBar.style.right == "-550px"){
        slideBar.style.right = "0px";
        menuImg.src = 'images/cross.png';
    }else{
        slideBar.style.right = "-550px";
        menuImg.src = 'images/menu.png';
        
    }
}


