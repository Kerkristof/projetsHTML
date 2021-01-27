window.onload = function(){
  var canvas = document.getElementById('grafic');
  var context = canvas.getContext('2d');
  canvas.height = window.innerHeight-30;
  canvas.width = window.innerWidth-30;
  var refrech = setInterval(refrech,10000);
  var interval = setInterval(animate,5);

  function animate(){
    var ray = Math.floor(Math.random()*22)+3;
    var x = Math.floor(Math.random()*(canvas.width-ray*2))+ray;
    var y = Math.floor(Math.random()*(canvas.height-ray*2))+ray;
    context.beginPath();
    context.fillStyle = randomColor();
    context.arc(x, y, ray, 0, Math.PI*2);
    context.fill();
    context.closePath();
  }
  function refrech(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = randomColor();
    context.fillRect(0,0,canvas.width,canvas.height);
  }

  function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var col = "rgb("+r+","+g+","+b+")";
    return col ;
  }
}
