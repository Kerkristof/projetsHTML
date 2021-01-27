window.onload = function(){
  var canvas = document.getElementById('grafic');
  var context = canvas.getContext('2d');
  canvas.height = window.innerHeight-30;
  canvas.width = window.innerWidth-30;
  //Genere nbrPt points aléatoire
  var nbrPt = prompt("Nombre de points?");
  for (i=0; i<nbrPt; i++){
    // var x = Math.floor(Math.random()*(canvas.width-ray*2))+ray;
    // var y = Math.floor(Math.random()*(canvas.height-ray*2))+ray;
    newPt(3);
  }
  //Genere nbrRef points de référence aleatoire
  var nbrRef = prompt("Nombre de points de reference?");
  for (i=0; i<nbrRef; i++){
    newPt(10);
  }
  //Recoplorie les points en fct des points de reference
  //var compute = setInterval(compute("hello"),10000);

  function newPt(ray){
    posX = Math.floor(Math.random()*(canvas.width-ray*2))+ray;;
    posY = Math.floor(Math.random()*(canvas.height-ray*2))+ray;;
    context.beginPath();
    context.fillStyle = randomColor();
    context.arc(posX, posY, ray, 0, Math.PI*2);
    context.fill();
    context.closePath();
  }

  // function compute(text){
  //   alert(text);
  // }

  function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var col = "rgb("+r+","+g+","+b+")";
    return col ;
  }
}
