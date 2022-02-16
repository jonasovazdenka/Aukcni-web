
let sourceText;
let poem;
let dogo;
let startIndex = 0;

function preload() {
  dogo = loadImage("JonasovaZ.png");
  sourceText = loadStrings("jmeno.txt");
}

function setup() {
  createCanvas(800, 800); 
  poem = sourceText.join(' ');
  textFont("Courier-Bold");
}

function draw() {
  background(0);
  frameRate(10);
  
  let charIndex = startIndex;
  let w = width / dogo.width;
  let h = height / dogo.height;
  dogo.loadPixels();
    for (let j = 0; j < dogo.height; j++) {
  for (let i = 0; i < dogo.width; i++) {
      const pixelIndex = (i + j * dogo.width) * 4;
      const r = dogo.pixels[pixelIndex + 0];
      const g = dogo.pixels[pixelIndex + 1];
      const b = dogo.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(avg);      
      textSize(w*1.2);
      textAlign(CENTER, CENTER);
      
      text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
      charIndex++;
    }
  }
  
  startIndex++;
  
  
}