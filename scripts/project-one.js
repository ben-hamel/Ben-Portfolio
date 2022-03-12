//create audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

//create play button functionality
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  function () {
    //check for suspend state, if so resume
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    //play and pause operation
    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }
  },
  false
);

//what to do when songs ended
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false
);

//add a gain node
const gainNode = audioContext.createGain();

//volume control
const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  function () {
    gainNode.gain.value = this.value;
  },
  false
);

//pan control
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);

const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener(
  "input",
  function () {
    panner.pan.value = this.value;
  },
  false
);

//visualizer
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;

let bufferLength = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

track
  .connect(analyser)
  .connect(gainNode)
  .connect(panner)
  .connect(audioContext.destination);

// Canvas
var canvas = document.getElementById("visualizer");
var canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source
function draw() {
  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(0, 0, 0)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(255, 255, 255)";

  canvasCtx.beginPath();

  var sliceWidth = (canvas.width * 1.0) / bufferLength;
  var x = 0;

  for (var i = 0; i < bufferLength; i++) {
    var v = dataArray[i] / 128.0;
    var y = (v * canvas.height) / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
}

draw();

//Song selection function
function songSelect() {
  console.log("song select worked");
  // song choices
  const songOne =
    "./audio/Bulbasaur-Verse-V.1.3_possible arrangement finish.mp3";
  const songTwo = "./audio/War Song MIX 2.1.mp3";
  const songThree = "./audio/Love_Again_Mixdown_V3_R15_MP3.mp3";

  //grab value choosen and store in variable
  let myValue = document.getElementById("songs").value;

  //switch statement for song choice
  switch (myValue) {
    case "song1":
      document.getElementById("audio-choice").src = songOne;
      break;

    case "song2":
      document.getElementById("audio-choice").src = songTwo;
      break;

    case "song3":
      document.getElementById("audio-choice").src = songThree;
  }
}
