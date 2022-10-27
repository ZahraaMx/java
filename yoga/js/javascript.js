//sticky navbar
let navbar = document.querySelector('.navbar');
let navTop=navbar.offsetTop;
function  fixednav() {
    if(window.scrollY >= navTop){
    navbar.classList.add("fixed");
}else
{
    navbar.classList.remove("fixed");
}}
window.addEventListener("scroll",fixednav)

//navbar link
const navbarLink = document.getElementById("nav-link");
const navbarIcon = document.getElementsByClassName("toggle-nav")[0];

navbarIcon.addEventListener('click',()=>{
navbarLink.classList.toggle('show-navbar');
});

//back to top
let backtop=document.getElementById("toTop");

window.onscroll=function(){

    if(this.scrollY >=400){
        backtop.classList.add("show");
    }else{
        backtop.classList.remove("show"); 
    }
};

//Tabs of the pose
let tabs=document.querySelectorAll(".tabs li");
let tabsArray=Array.from(tabs);
let divs=document.querySelectorAll(".tabs-container >div")
let divsArray=Array.from(divs);

tabsArray.forEach((ele)=>{
    ele.addEventListener("click",function(e){
        tabsArray.forEach((ele)=>{
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");

        divsArray.forEach((div)=>{
            div.style.display="none";
        });
        document.querySelector(e.currentTarget.dataset.filter).style.display="block";
    });
});

//Change the image on the detail page 
let imgDetail=document.getElementById("my-img");
myImgs=["img/chang3.avif","img/chang2.avif","img/chang1.avif","img/chang5.avif"];
function chang(imgDetail,myImgs){
    setInterval(function(){
        let myRandomNumber=Math.floor(Math.random()* myImgs.length);
        imgDetail.src=myImgs[myRandomNumber];
    },3000);
}
chang(imgDetail,myImgs);

//