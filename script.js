var tablinks =document.getElementsByClassName('tab-links');
var tabcontents =document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    let content = document.getElementById(tabname);
    content.classList.add("active-tab");
     
}

var typed=new Typed('#typed',{
  strings: ["Frontend developer","Backend Developer", "UI/UX Designer"]
  ,typeSpeed : 100 
  ,backSpeed : 100  
  ,backDelay: 1000,
  loop : true

})

var sidemenu=document.getElementById("side-menu");

function openMenu(){
    sidemenu.style.right="0"
}
function closeMenu(){
    sidemenu.style.right="-200px"
}