let menuImg = document.getElementById('menu');
let slideBar = document.getElementById('slide-menu');

let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');

let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');




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

q1.addEventListener('click',Answare1);
function Answare1(){
    let q1Classlist = q1.classList;
    if (q1Classlist.contains("active")){
        ans1.style.display = "none";
        q1Classlist.remove("active");
        
    }else{
        ans1.style.display = "block";
        q1Classlist.add('active');
    }
}



q2.addEventListener('click',Answare2);
function Answare2(){
    let q2Classlist = q2.classList;
    if (q2Classlist.contains("active")){
        ans2.style.display = "none";
        q2Classlist.remove("active");
        
    }else{
        ans2.style.display = "block";
        q2Classlist.add('active');
    }
}



q3.addEventListener('click',Answare3);
function Answare3(){
    let q3Classlist = q3.classList;
    if (q3Classlist.contains("active")){
        ans3.style.display = "none";
        q3Classlist.remove("active");
        
    }else{
        ans3.style.display = "block";
        q3Classlist.add('active');
    }
}



q4.addEventListener('click',Answare4);
function Answare4(){
    let q4Classlist = q4.classList;
    if (q4Classlist.contains("active")){
        ans4.style.display = "none";
        q4Classlist.remove("active");
        
    }else{
        ans4.style.display = "block";
        q4Classlist.add('active');
    }
}








// ans1.classList.add('active')
// console.log(ans1.classList)
// console.log(ans1.classList.contains("active"))

