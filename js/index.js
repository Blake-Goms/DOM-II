// Your code goes here
const logoHeader = document.querySelector('.logo-heading'); // 2 events
const imgAction = document.querySelector('.intro img'); // 1 event
const funBus = document.querySelector('.intro h2'); // 2 events
const letsGo = document.querySelector('.content-section h2');// 1 event
const imgAlert = document.querySelector('.img-content img');// 1 event
const imgDrag = document.querySelector('.img-content .fun');// 1 event
const colorShift = document.querySelector("body"); // 2 events


logoHeader.addEventListener('mouseover', e => {
    logoHeader.style.color = '#17A2B8';
    e.stopPropagation();
});
logoHeader.addEventListener('mouseout', e => {
    logoHeader.style.color = 'black';
    e.stopPropagation();
});

funBus.addEventListener('dblclick', e => {
    alert("Welcome to fun bus!");
})
funBus.addEventListener('copy', e => {
    alert("You copied me!");
})

imgAction.addEventListener('click', e => {
    imgAction.style.display = "none";
});

letsGo.addEventListener('contextmenu', e => {
    letsGo.style.color = "pink";
});

imgAlert.addEventListener('mouseup', e => {
    alert("Lets go on a Trip!!");
})
imgDrag.addEventListener('dragstart', e => {
    alert("Don't Drag me!!");
})

colorShift.addEventListener("keydown", e => {
    colorShift.style.color = "pink"
    colorShift.style.background = "grey"
    e.preventDefault();
})
colorShift.addEventListener("keyup", e => {
    colorShift.style.color = "black"
    colorShift.style.background = "white"
})

//Stretch Goals! 
TweenMax.to('.logo-heading', 2, {x:'150%', rotation: 1080});
TweenMax.to('.content-destination h2', 2, {x:'20%', rotation: 720});
//Personal note don't forget the head tag:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>