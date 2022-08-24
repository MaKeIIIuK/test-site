var header = document.getElementById("header_menu");
var head = document.getElementById("section_hero");
var i=0;
var image=document.getElementById("button_menu");
var imgs=new Array('images/header/menu.png','images/header/menu_close.png');
function imgsrc(){
if(i == 0){
  i++;
  header.style= "display: block";
  head.style= "display: none";
}else{
  i = 0;
  header.style= "display: none";
  head.style= "display: flex";
}
image.src=imgs[i];
}


var text1 = document.getElementById("portfolio_case1_up_box_text");
var text3 = document.getElementById("portfolio_case3_up_box_text");

if(document.body.clientWidth <= 375){
  text1.innerHTML = "СКОРО";
  text3.innerHTML = "СКОРО";
}else{
  text1.innerHTML = "МАРКЕТИНГ";
  text3.innerHTML = "ВЕДЕНИЕ РЕКЛАМНОЙ КОМПАНИИ";
}
