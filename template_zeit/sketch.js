//CLOCK LIBRABRY
//Clock Function by Christian Swinehart
//var mas = true;
var mas = true;

var m = minute();
var s = second();
var h = hour();
var day = day();
//var mo = month();
var ses = season();

//var h2 = hour();
var angle = 0;
var r = 35;
var now = clock()

var count = 0;
var mss = millis();

var speed = now.progress.sec;
// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"

var nums = [100, 25, 12, 72];



function setup() {
  createCanvas(800, 800);
  stroke(255);

}


function draw() {
  var now = clock()

  //var s = now.sec
  //var m = now.min
  //var h = now.hour
  var h2 = now.hours
  var se = now.season

  background(243,242,230);
  var s = now.sec
  var m = now.min
  var h = now.hour
  var h2 = now.hours
  var day = now.day;
  var mo = now.month
  var ses = now.season
  //var min = minute();
  var mss = now.ms
  //console.log(ses)

  if (now.progress.day > 0.5) {
    background (243,242,230);
  } else {
    background(106, 108, 250);
  }

  strokeWeight(15);
  //stroke(0);

//Head
  push();
  if (now.progress.day > 0.5) {
    stroke (242,191,232);
    fill(242,191,232);
  } else {
    stroke(121,65,32);
    fill(121,65,32);
  }

  ellipseMode(CENTER);
  // stroke(242,191,232);
  // fill(242,191,232);
  ellipse(width/2, height/2, 542, 542);
  pop();

// Cheek
  push();
  if(ses == 1){
    fill(138, 149, 80);
  } else if (ses == 2){
    fill(215, 85, 73);
  }else if (ses == 3){
    fill(219, 151, 135);
  } else {
    fill(130, 183, 246);
  }
  noStroke();
  ellipse(229, 460, 58, 58);
  ellipse(570, 460, 58, 58);
  pop();


//Eyes - Sec
  strokeCap(SQUARE);

  push();
  if (now.progress.day > 0.5) {
    stroke (77,79,243);
    fill  (77,79,243);
  } else {
    stroke (238,201,93);
    fill (238,201,93);
  }
  //stroke(77,79,243);
  line(205, 347, 365, 347);
  line(435, 347, 595, 347);

  angleMode(DEGREES);
  //fill(77,79,243);
  var secondAngle = map(s, 0, 59 , 0, 150);
  // var secondAngleBack = map(s, 0, 60, 150, 0);
  // var secondAnglev = map(s, 0, 60, 300, 0);

  var bo = 210+secondAngle;
  var bob = 440+secondAngle;
var be = bo + speed;

  if (bo < s){
    s =  -s;
    } 
if (bo < s){
  speed =  +speed;
 // bo = bo +speed;

}
   // bo = bo +speed;
    
  ellipse(bo, 360, 25, 25);
  ellipse(bob, 360, 25, 25);


  // if ( mas == true) {
  //   ellipse(210+secondAngle, 360, 25, 25);
  //   ellipse(440+secondAngle, 360, 25, 25);
  //    if(now.progress.sec == 0.9){
  //        mas = false;
  //    }
  // } else {
  //   ellipse(360-secondAngle, 360, 25, 25);
  //   ellipse(590-secondAngle, 360, 25, 25);
  //  if (now.progress.sec == 0.9){
  //   mas = true;
  //    }
  // }

//   if(s <= 59 && mas == true){
//   ellipse(210+secondAngle, 360, 25, 25);
//   ellipse(440+secondAngle, 360, 25, 25);
//   count = count + 1;
//   if(now.progress.sec == 1.0 && mas == true){
//     mas = false;
    
//   } 
// } 
// else if (s <= 59 && mas == false ){
//   ellipse(360-secondAngle, 360, 25, 25);
//   ellipse(590-secondAngle, 360, 25, 25);
//   if ( mas == false ){
//     mas = true;

//   } 
// }


console.log(mas)

// }else{
  // ellipse(210+secondAngleBack, 360, 25, 25);
  // ellipse(440+secondAngleBack, 360, 25, 25);
  // console.log(secondAngleBack)
  pop();


//Nose Min
  push();
  if (now.progress.day > 0.5) {
    stroke (77,79,243);
  } else {
    stroke (238,201,93);
  }
  noFill();
  //stroke(77,79,243);
  angleMode(DEGREES);
  strokeCap(SQUARE);
  translate(400, 443);
  rotate(-90);
  var minuteAngle = map(m, 0, 60, 0, 360);
  arc(0, 0, 39, 39, 0, minuteAngle);
  pop();


//smile
push();
if (now.progress.day > 0.5) {
  stroke (77,79,243);
  noFill();
translate(width/2,500);
rotate(30);
arc(0, 0, 150, 150, 0, 120);
} else {
  stroke (238,201,93);
  noFill();
translate(width/2,600);
rotate(210);
arc(0, 0, 150, 150, 0, 120);
}
strokeWeight(15);
//stroke(77,79,243);

pop();

  // hour
  push();
  ellipseMode(CENTER);
  noStroke();
  //fill(77,79,243);
  if (now.progress.day > 0.5) {
    fill (77,79,243);
  } else {
    fill (238,201,93);
  }
  translate(width/2,height/2);
  rotate(-90);
  var hourAngle = map(h, 0, 12, 0, 12);
  var h1ang = +30 * hourAngle;
  var h1x = cos(h1ang)*310;
  var h1y = sin(h1ang)*310;
  ellipse(h1x,h1y,40,40);
//console.log(h1ang)
  pop();




  strokeWeight(5);


//months
push();

  noFill();

  //FALL
  stroke(219, 151, 135);
  ellipse(335, 36, 33, 33);
  ellipse(400, 36, 33, 33);
  ellipse(465, 36, 33, 33);
  noFill();

//SPRING
stroke(138, 149, 80);
ellipse(335, 763, 33, 33);
ellipse(400, 763, 33, 33);
ellipse(465, 763, 33, 33);

//SOMMER
stroke(215, 85, 73);
ellipse(36, 335, 33, 33);
ellipse(36, 400, 33, 33);
ellipse(36, 465, 33, 33);

//WINTER
stroke(130, 183, 246);
ellipse(763, 335, 33, 33);
ellipse(763, 400, 33, 33);
ellipse(763, 465, 33, 33);
  pop();

//winter
  push();
  if (mo <= 2 || mo == 12) {
    stroke(130, 183, 246);
    fill(130, 183, 246);
    if (mo == 12){
      ellipse(763, 335, 33, 33);
push();
stroke(219, 151, 135);
fill(219, 151, 135);
ellipse(335, 36, 33, 33);
  ellipse(400, 36, 33, 33);
  ellipse(465, 36, 33, 33);
stroke(215, 85, 73);
fill(215, 85, 73);
ellipse(36, 335, 33, 33);
ellipse(36, 400, 33, 33);
ellipse(36, 465, 33, 33);
stroke(130, 183, 246);
fill(130, 183, 246);
      //ellipse(763, 335, 33, 33);
      //ellipse(763, 400, 33, 33);
      //ellipse(763, 465, 33, 33);
stroke(138, 149, 80);
fill(138, 149, 80);
ellipse(335, 763, 33, 33);
ellipse(400, 763, 33, 33);
ellipse(465, 763, 33, 33);
pop();
    }else if(mo == 1){
      //ellipse(763, 335, 33, 33);
      ellipse(763, 400, 33, 33);
    }else{
      //ellipse(763, 335, 33, 33);
      ellipse(763, 400, 33, 33);
      ellipse(763, 465, 33, 33);
    }

  } 
  pop();

// spring
push();
if (mo >= 3 && mo <= 5) {
  stroke(138, 149, 80);
  fill(138, 149, 80);
  if (mo == 3){
    ellipse(465, 763, 33, 33);
  }else if(mo == 4){
    ellipse(465, 763, 33, 33);
    ellipse(400, 763, 33, 33);
  }else{
    ellipse(335, 763, 33, 33);
    ellipse(400, 763, 33, 33);
    ellipse(465, 763, 33, 33);
  }
stroke(130, 183, 246);
fill(130, 183, 246); 
//ellipse(763, 335, 33, 33);
ellipse(763, 400, 33, 33);
ellipse(763, 465, 33, 33);
} 

  pop();

// summer
  push();
  if (mo >= 6 && mo <= 8) {
    stroke(215, 85, 73);
    fill(215, 85, 73);
    if (mo == 6){
      ellipse(36, 465, 33, 33);
    }else if(mo == 7){
      ellipse(36, 465, 33, 33);
      ellipse(36, 400, 33, 33);
    }else{
      ellipse(36, 335, 33, 33);
      ellipse(36, 400, 33, 33);
      ellipse(36, 465, 33, 33);
    }
  stroke(130, 183, 246);
  fill(130, 183, 246);
  //ellipse(763, 335, 33, 33);
  ellipse(763, 400, 33, 33);
  ellipse(763, 465, 33, 33);
  stroke(138, 149, 80);
  fill(138, 149, 80);
  ellipse(335, 763, 33, 33);
  ellipse(400, 763, 33, 33);
  ellipse(465, 763, 33, 33);

  } 
  pop();

// fall

  push();
  if (mo >= 9 && mo <= 11) {
    stroke(219, 151, 135);
    fill(219, 151, 135);
    if (mo == 9){
      ellipse(335, 36, 33, 33);
    }else if(mo == 10){
      ellipse(335, 36, 33, 33);
      ellipse(400, 36, 33, 33);
    }else{
      ellipse(335, 36, 33, 33);
      ellipse(400, 36, 33, 33);
      ellipse(465, 36, 33, 33);
    }
    stroke(215, 85, 73);
    fill(215, 85, 73);
    ellipse(36, 335, 33, 33);
    ellipse(36, 400, 33, 33);
    ellipse(36, 465, 33, 33);
    stroke(130, 183, 246);
    fill(130, 183, 246);
          //ellipse(763, 335, 33, 33);
          ellipse(763, 400, 33, 33);
          ellipse(763, 465, 33, 33);
    stroke(138, 149, 80);
    fill(138, 149, 80);
    ellipse(335, 763, 33, 33);
    ellipse(400, 763, 33, 33);
    ellipse(465, 763, 33, 33);
  } 
  pop();







  var mosXY = [36, 763];
  var mosXYpos = [335];

}


