var head = {
  r: 0,
  g: 0,
  b: 0
};

var nose = {
  r: 0,
  g: 0,
  b: 0
};

var leftear = {
  r: 0,
  g: 0,
  b: 0
};

var rightear = {
  r: 0,
  g: 0,
  b: 0
};

var lefteye = {
  r: 0,
  g: 0,
  b: 0
};

var leftpupil = {
  r: 0,
  g: 0,
  b: 0
};

var righteye = {
  r: 0,
  g: 0,
  b: 0
};

var rightpupil = {
  r: 0,
  g: 0,
  b: 0
};

var x = 0
var y = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {

  if (mouseIsPressed) {

    x = random(0, windowWidth);
    y = random(0, windowHeight);

    leftear.r = random(256)
    leftear.g = random(256)
    leftear.b = random(256)

    rightear.r = random(256)
    rightear.g = random(256)
    rightear.b = random(256)

    head.r = random(256)
    head.g = random(256)
    head.b = random(256)

    nose.r = random(256)
    nose.g = random(256)
    nose.b = random(256)

    lefteye.r = random(256)
    lefteye.g = random(256)
    lefteye.b = random(256)

    righteye.r = random(256)
    righteye.g = random(256)
    righteye.b = random(256)

    rightpupil.r = random(256)
    rightpupil.g = random(256)
    rightpupil.b = random(256)

    leftpupil.r = random(256)
    leftpupil.g = random(256)
    leftpupil.b = random(256)

    //left ear
    fill(leftear.r, leftear.g, leftear.b);
    stroke(0);
    triangle(x - 60, y - 60, x - 50, y, x, y - 50);

    //right ear
    fill(rightear.r, rightear.g, rightear.b);
    stroke(0);
    triangle(x + 60, y - 60, x + 50, y, x, y - 50);

    //head
    fill(head.r, head.g, head.b);
    stroke(0);
    ellipse(x, y, 100, 100);

    //left lip
    noFill();
    arc(x - 12, y + 22, 25, 15, 0, PI);

    //right lip
    noFill();
    arc(x + 12, y + 22, 25, 15, 0, PI);

    //mid lip
    line(x, y + 10, x, y + 22)

    //mid lip
    line(x - 1, y + 10, x - 1, x + 22)

    //left whisker 1
    line(x, y + 10, x - 35, y + 10);

    //left whisker 2
    line(x, y + 10, x - 30, y);

    //left whisker 3
    line(x, y + 10, x - 30, y + 20);

    //right whisker 1
    line(x, y + 10, x + 35, y + 10);

    //left whisker 2
    line(x, y + 10, x + 30, y);

    //right whisker 3
    line(x, y + 10, x + 30, y + 20);

    //nose
    fill(nose.r, nose.g, nose.b);
    noStroke;
    ellipse(x, y + 10, 10, 10);

    //left eye
    fill(lefteye.r, lefteye.g, lefteye.b);
    noStroke;
    ellipse(x - 18, y - 20, 30, 30);

    //left pupil
    fill(leftpupil.r, leftpupil.g, leftpupil.b);
    noStroke;
    ellipse(x - 18, y - 20, 5, 30);

    //right eye
    fill(righteye.r, righteye.g, righteye.b);
    noStroke;
    ellipse(x + 18, y - 20, 30, 30);

    //right pupil
    fill(rightpupil.r, rightpupil.g, rightpupil.b);
    noStroke;
    ellipse(x + 18, y - 20, 5, 25);
  }
}