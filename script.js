
function toggleMenu(){
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("display_drop");
}

function toggleMenu2(){
  let subMenu = document.getElementById("subMenu2");
  subMenu.classList.toggle("display_drop");
}
//counting animation
let usersCount = 0;
function animateValue(){
var obj = document.getElementById('blue');
var current = parseInt(obj.innerHTML);

const interval=setInterval(function(){
    obj.innerHTML = usersCount++;
    stopInterval(interval);
},3);
}
function stopInterval(interval){
if(usersCount > 30){
    clearInterval(interval);
    console.log(usersCount);

     }

}

animateValue();