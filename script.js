function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}
function setup() {
  createCanvas(500, 500);
	background(153);
	}
function draw(){
	fill(color(255, 204, 0));
	noStroke(); 
	ellipse(getRandomInt(500), getRandomInt(500), 10, 10)
	}
