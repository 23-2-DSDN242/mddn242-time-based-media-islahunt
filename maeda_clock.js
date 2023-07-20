// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  // text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
noStroke();
  rect(160, 190, 20, 20)
  rect(180, 170, 20, 140)

  rect(260, 190, 20, 20)
  rect(280, 170, 20, 140)

  rect(460, 170, 30, 30)
  rect(490, 150, 30, 210)

  rect (590, 170, 30, 30)
  rect (620, 140, 90, 30)
  rect (710, 170, 30, 60)
  rect (680, 230, 30, 30)
  rect (650, 260, 30, 30)
  rect (620, 290, 30, 30)
  rect (590, 320, 150, 30)
}