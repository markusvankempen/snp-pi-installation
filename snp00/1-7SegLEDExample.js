var Gpio= require('pigpio').Gpio;
var segment = require('./1-7SegLedv1');
/*
var configA = new Gpio(4, {mode: Gpio.output});
var configB = new Gpio(17, {mode: Gpio.output});
var configD = new Gpio(27, {mode: Gpio.output});
var configC = new Gpio(22, {mode: Gpio.output});

var configD = new Gpio(18, {mode: Gpio.output});
var configE = new Gpio(23, {mode: Gpio.output});
var configF = new Gpio(24, {mode: Gpio.output});
var configG = new Gpio(25, {mode: Gpio.output});
*/
console.log("7-Seg LED Test")
var mynumber = process.argv[2];
var p2 = process.argv[3];
var setmode = process.argv[4];
var setname = process.argv[5];

if (!mynumber) {
  console.log("mvk 20180217 mvk@ca.ibm.com");
  console.log("node program.js LCDNumber rotate|reset");
  console.log("example sudo node 2sedlcd 8 rotate")
  process.exit(1);
}
/*
configA.digitalWrite(1);
configB.digitalWrite(1);
configD.digitalWrite(1);
configC.digitalWrite(1);
configD.digitalWrite(1);
configE.digitalWrite(1);
configF.digitalWrite(1);
configG.digitalWrite(1);
*/
//1 LCD                           A B  C   d
var draw = new segment(Gpio,17,4, 23, 24, 25, 27, 22, 18); // OR your own wiring options
// Wiring 4 lCD 18, 23,24,25, 8, 12, 7, 16,
//var draw = new segment(Gpio,18, 23, 24, 25, 8,7,122, 18); // OR your own wiring options

console.log('Displaying numer ='+mynumber)
draw.display(mynumber); // will display 0 on the 7-segment display
//if(p2 == "rotate")
//	draw.rotate();
//draw.display(Gpio,'.'); // will display 0 on the 7-segment display
//draw.reset();

//draw.setAll(1,0,0,1,0,0,1,1);
//draw.setDP(0);
//
