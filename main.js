// c1 = 46;
// d1 = 48;
// e1 = 50;
// f1 = 52;
// g1 = 54;
// a1 = 56;
// b1 = 58;
var attackLevel = 1.0;
var releaseLevel = 10;

var attackTime = 0.5
var decayTime = 0.5;
var susPercent = 0.4;
var releaseTime = 5;

var env;

c = 60;
d = 62;
e = 64;
f = 66;
g = 68;
a = 70;
b = 72;

var scaleArr = [c,d,e,f,g,a,b];

//Converts notes to frequencies for p5.js to play
var tot = 8;
var notes;
var generate = new MusicGenerator();
var rhythm = generate.rhythmPattern(tot);


var riff = generate.riffPattern(scaleArr, tot);
console.log(rhythm);
console.log(riff);

//Generates the random music
//sets autoplay to false


var autoplay = false;
var i = 0;
function setup() {
  osc = new p5.Oscillator();
    // env = new p5.Env();
    // env.setADSR(attackTime, decayTime, susPercent, releaseTime);
    // env.setRange(attackLevel, releaseLevel);
    osc.start();
}

function draw() {

  if(i<= riff.length){


    if(rhythm[i] === true){
        osc.amp(1)
    }if(rhythm[i] === false){
        osc.amp(0)
    }

      var freq = midiToFreq(scaleArr[riff[i]]);

      i++;
      osc.freq(freq);


      //env.triggerRelease(0.1);
      frameRate(1);

  } else {
      i = 0;
      console.log("out of notes");
      osc.fade(0, 0.5);
  }

}

function makeMelody(){
riff = generate.riffPattern(scaleArr, 8);
}

//types of waves for oscillator
//Mutes the music
function mute() {
  osc.fade(0, 0.5);
}

function play() {
  draw()
}

//sets wave type when button is clicked
function setWave(e) {
  //gets wave type
  osc.setType(e);
}
