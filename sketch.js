let tela = 0;
let botaoX, botaoY, botaoL, botaoA;
let cenario, cenario2;
let clicando = false;
let tempoClique = 0;

function preload() {
  cenario = loadImage("cenario.jpg");
  cenario2 = loadImage("cenario2.jpg");
}

function setup() {
  createCanvas(600, 400);
  botaoL = 200;
  botaoA = 50;
  botaoX = width / 2 - botaoL / 2;
  botaoY = height * 0.75;
}

function draw() {
  background(220);

  if (tela === 0) {
    image(cenario, 0, 0, width, height);

    
    let mouseSobreBotao = mouseX > botaoX &&
                          mouseX < botaoX + botaoL &&
                          mouseY > botaoY &&
                          mouseY < botaoY + botaoA;

    if (mouseSobreBotao) {
      fill(clicando ? "#AAAAAA" : "#FFD700"); 
      stroke(0);
    } else {
      fill(255);
      noStroke();
    }

    rect(botaoX, botaoY, botaoL, botaoA, 20);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("START", width / 2, botaoY + botaoA / 2);

    if (clicando && millis() - tempoClique > 150) {
      tela = 1;
      clicando = false;
    }
  } else if (tela === 1) {
    image(cenario2, 0, 0, width, height);
  }
}

function mousePressed() {
  if (
    mouseX > botaoX &&
    mouseX < botaoX + botaoL &&
    mouseY > botaoY &&
    mouseY < botaoY + botaoA
  ) {
    clicando = true;
    tempoClique = millis();
  }
}

