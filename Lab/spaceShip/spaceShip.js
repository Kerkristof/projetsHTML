window.onload = function(){
  var box = document.getElementById('box');
  var ctx = box.getContext('2d');
  box.width = 0.6*(window.innerWidth);
  box.height = 0.6*(window.innerHeight);
  var wunit = box.width*0.01;
  var hunit = box.height*0.01;
	var posX = 48*wunit;
  var posY = 90*hunit;
  var x=0;
  var y=0;
  var tir;
  spaceShip();
  enemyShip();

  window.onkeydown = function(e) {
     var key = e.keyCode ? e.keyCode : e.which;
     if (key == 39) {
       posX +=0.5*wunit;
       spaceShip();
    }
    if (key == 37){
      posX -=0.5*wunit;
      spaceShip();
    }
    if (key == 38){
      if (y<=0){
        x = posX;
        y = posY;
        clearInterval(tir);
        tir = setInterval(fire,10);
      }
    }
  }

  function spaceShip(){
    ctx.clearRect(0,88*hunit,box.width,10*hunit);
    ctx.fillStyle = "blue";
    ctx.fillRect(posX-2*wunit,posY+2*hunit,4*wunit,2*hunit);
    ctx.beginPath();
    ctx.moveTo(posX,posY);
    ctx.lineTo(posX+wunit/2,posY+hunit);
    ctx.lineTo(posX+wunit*1.5,posY+hunit);
    ctx.lineTo(posX+wunit*2,posY+2*hunit);
    ctx.lineTo(posX-2*wunit,posY+2*hunit);
    ctx.lineTo(posX-wunit*1.5,posY+hunit);
    ctx.lineTo(posX-wunit/2,posY+hunit);
    ctx.closePath();
    ctx.fill();
  }
  function fire(){
    ctx.clearRect(x-wunit/6,y-2*hunit,wunit/3,1.5*hunit);
    ctx.fillStyle = "red";
    ctx.fillRect(x-wunit/10,y-3*hunit,wunit/5,hunit);
    y -=hunit;
  }
  function enemyShip(){
    //ctx.clearRect(0,0,box.width,box.height);
    ctx.fillStyle = "green";
    ctx.fillRect(49*wunit,10*hunit,7*wunit,4*hunit);
    ctx.clearRect(50*wunit,11*hunit,wunit,hunit);
    ctx.clearRect(54*wunit,11*hunit,wunit,hunit);
    ctx.fillRect(50*wunit,9*hunit,wunit,hunit);
    ctx.fillRect(54*wunit,9*hunit,wunit,hunit);
    ctx.fillRect(49*wunit,8*hunit,wunit,hunit);
    ctx.fillRect(55*wunit,8*hunit,wunit,hunit);
    ctx.fillRect(48*wunit,11*hunit,wunit,2*hunit);
    ctx.fillRect(56*wunit,11*hunit,wunit,2*hunit);
    ctx.fillRect(47*wunit,12*hunit,wunit,2*hunit);
    ctx.fillRect(57*wunit,12*hunit,wunit,2*hunit);
    ctx.fillRect(49*wunit,14*hunit,wunit,hunit);
    ctx.fillRect(55*wunit,14*hunit,wunit,hunit);
    ctx.fillRect(50*wunit,15*hunit,wunit,hunit);
    ctx.fillRect(54*wunit,15*hunit,wunit,hunit);

  }
}
