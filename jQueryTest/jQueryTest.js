$(function(){

//---------------------Variable declaration-----------------;
var compt=0;
var img = ["images/nextformation.jpg","images/amazon.jpg","images/youtube.jpg","images/twitter.jpg","images/openclassrooms.jpg","images/pole-emploi.jpg","images/gmail.jpg",
"images/orangemail.jpg","images/linkedin.jpg"];
var imgLink = ["http://www.next-village.com","https://amazon.com","https://www.youtube.com","https://www.twitter.com","https://www.openclassrooms.com","http://www.pole-emploi.fr",
"https://mail.google.com/","http://messagerie.orange.fr/","https://www.linkedin.com"];

var comptMax=img.length-1;

//-----------------------Main-----------------------------;
$('#next').click(function(){
  menu_up()
});
$('#previous').click(function(){
  menu_down()
});

//---------------------Function-------------------------;
function menu_up(){
  if(compt<comptMax){
    compt++;
  }else{
    compt=0;
  }
  $('#img').attr('src',img[compt]);
  $('#imgLink').attr('href',imgLink[compt]);
}
function menu_down(){
  if(compt>0){
      compt--;
  }else{
    compt=comptMax;
  }
  $('#img').attr('src',img[compt]);
  $('#imgLink').attr('href',imgLink[compt]);
}
});
