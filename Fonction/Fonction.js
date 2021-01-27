window.onload = function(){
  var freq = prompt("Frequence ex:0,1");
  var amp = prompt("Amplitude ex:100");
  var amort = prompt("Amortissement ex:0.01");
  var canvas = document.getElementById('grafic');
  var context = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 700;

  context.fillStyle = "rgb(239,228,176)";
  context.fillRect(0,0,1000,700);

  for (var z=-300; z<300; z+=2){
    for (var x=-300; x<300;x++){
      var d = Math.sqrt(Math.pow(x,2)+Math.pow(z,2));
      var y = amp*Math.cos(freq*d)*Math.exp(-amort*d);
      drawPt(x,y,z);
    }
  }

  function drawPt(posX,posY,posZ){
    posX = posX+500+z;
    posY = 400-posY-z;
    context.beginPath();
    context.fillStyle = "rgba(50,50,50,0.6)";
    context.arc(posX, posY, 1, 0, Math.PI*2);
    context.fill();
    context.closePath();
  }
}
