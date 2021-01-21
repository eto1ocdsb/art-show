let img;
let mc = 0;
//loads image to use
function preload() {
  img = loadImage('razgriz.png');
  img2 = loadImage('razgriz2.PNG');
  img3 = loadImage('grabacr.png');
  img4 = loadImage('grabacr2.png');
  img5 = loadImage('missile.png');
  img6 = loadImage('belka.png');
  img7 = loadImage('osea.png');
  img8 = loadImage('ac5.jpg');
  img9 = loadImage('strangereal.png');
}
//dimensions of what i am working with
function setup() {
  createCanvas(600, 400);
}

var currentScene = 1;
//green button at the top
var drawButton = function() {
  fill(81, 166, 31);
  rect(442, 0, 158, 35);
  fill(255, 255, 255);
  textSize(16);
  text("return to title page", 455, 29);
};

var drawScene1 = function() {
  currentScene = 1;
  background(0, 0, 0);
  image(img8, 0, 0, 600, 400);

//4th number makes rectangle opaque
  fill(0, 154, 255, 200);
  rect(60, 250, 200, 100);
  rect(350, 250, 200, 100);
  rect( 40, 30, 190, 30)
  fill(0);
  textSize(20);
  
  text("map of strangereal", 50, 50);
  text("read about the squadrons of", 30, 150);
  text("108th tactical fighter squadron", 70, 280, 200, 100);
  text("229th tactical fighter squadron", 360, 280, 200, 100);
}

var drawScene2 = function() {
  currentScene = 2;
  background(0);
  fill(255);
  textSize(20);
  text("Razgriz Squadron", 230, 60);
  fill(52, 52, 52);
  rect(15, 90, 560, 290);
  fill(252,252,252);
  textSize(15);
  text("    The Razgriz Air Command Squadron, more commonly referred to as Razgriz Squadron and also known as The Ghosts of Razgriz, was a secret squadron mostly comprised of the survivors of the OADF's Wardog Squadron in the final month of the Circum-Pacific War. During its brief existence, Razgriz Squadron was created by and served under the direct command of Osean President Vincent Harling, and was stationed aboard the OFS Kestrel. Under their new mantel as the demonic hero of Strangereal folklore, the Razgriz pilots executed a series of covert engagements, which ultimately led to the war's resolution and the defeat of the Grey Men.", 25, 100, 550, 290);
  image(img, 20, 270, 100, 100);
  image(img2, 360, 270, 200, 100);


}

var drawScene3 = function() {
  currentScene = 3;
  background(0);
  fill(255);
  textSize(20);
  text("Grabacr Squadron", 230, 60);
  fill(52, 52, 52);
  rect(20, 90, 560, 290);
  fill(252,252,252);
  textSize(15);
  text("    The 229th Tactical Fighter Squadron Grabacr, also referred to as Grabacr Squadron, and known under the alias 8492nd Squadron, was a covert Belkan Air Force aggressor unit assigned to the Osean Air Defense Force. The squadron members' pro-Belka sympathies compelled them to join the Grey Men and become provocateurs of the Circum-Pacific War.", 25, 100, 550, 290);
  image(img3, 30, 220, 150, 150);
  image(img4, 320, 220, 250, 150);

}

var drawScene4 = function() {
  currentScene = 4;
  image(img9, -200, 0);
}
draw = function() {
    if (currentScene === 1) {
        drawScene1();}
    if (currentScene === 2) {
        drawScene2();}
    if (currentScene === 3) {
        drawScene3();}
    if (currentScene === 4) {
        drawScene4();}
    //drawScene3();
    drawButton();
    if (currentScene === 1) 
      //following shows the picture that appears where the mouse is
    {image(img5, mouseX, mouseY, 25, 25);}
    else if (currentScene === 2) 
    {image(img7, mouseX, mouseY, 25, 25);}
    else if (currentScene === 3) 
    {image(img6, mouseX, mouseY, 25, 25);}
    fill('red');
  //mouseclick counter
    text(mc, 20, 20);
};
//change scenes w/buttons
mouseClicked = function() {
if (mouseX >= 60 && mouseX <= 260 && mouseY >= 250 && mouseY <= 350) {
      if (currentScene === 1) {
      drawScene2();} }
  
else if (mouseX >= 350 && mouseX <= 550 && mouseY >= 250 && mouseY <= 350) {
      if (currentScene === 1) {
      drawScene3();} }
  
else if (mouseX >=40 && mouseX <=230 && mouseY >= 30 && mouseY <= 60) {
      if (currentScene === 1) {
        drawScene4();} }

else if (mouseX >= 442 && mouseX <= 592 && mouseY >=0 && mouseY <=35) {
        drawScene1();}
  //tells when to increase mouseclick tracker
if (mouseX >= 0 && mouseY >= 0) {mc++}
};

