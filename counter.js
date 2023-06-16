var counter = localStorage.getItem('counter');

var counterDom = document.querySelector("#counter");
var deBtn = document.querySelector("#decrease");
var inBtn = document.querySelector("#increase");
var reBtn = document.querySelector("#restart");

counterDom.innerHTML=counter;

// counterDom.innerHTML=localStorage.getItem(counter);

inBtn.addEventListener("click" , function(){
    localStorage.setItem('counter' , counter+=1);
    counterDom.innerHTML=counter;
});


deBtn.addEventListener("click" , function(){
    localStorage.setItem('counter' , counter-=1);
    counterDom.innerHTML=counter;
});

reBtn.addEventListener("click" , function(){
    localStorage.setItem('counter' , counter=0);
    counterDom.innerHTML= counter=0;
});

counter ? counter = parseInt(counter): 0;