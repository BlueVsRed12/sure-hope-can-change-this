var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var boxBoi = new Box(100,100,10,-10);
var boxBoi2 = new Box(200,200,10,-5);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  boxBoi.execute();
  boxBoi2.execute();
}

setInterval(draw, 10);
