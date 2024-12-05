const cookie = document.getElementById("content");
const disappear = document.getElementById("closeBtn");





function appear(){
   setTimeout(() => {
       cookie.style.display="block"
   }, 10000);
}
appear();

disappear.onclick = function(){
    cookie.style.display="none"
}