function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();
  stroke(0);
  
  // Draw hand-drawn circle
  beginShape();
  vertex(100, 100);
  vertex(110, 90);
  vertex(120, 95);
  vertex(130, 100);
  vertex(140, 115);
  vertex(130, 130);
  vertex(120, 135);
  vertex(110, 130);
  vertex(100, 115);
  endShape(CLOSE);
  
  // Draw hand-drawn square
  beginShape();
  vertex(200, 100);
  vertex(250, 100);
  vertex(255, 110);
  vertex(250, 150);
  vertex(200, 150);
  vertex(195, 140);
  endShape(CLOSE);
  
  // Draw hand-drawn triangle
  beginShape();
  vertex(150, 250);
  vertex(200, 300);
  vertex(100, 300);
  endShape(CLOSE);
}
