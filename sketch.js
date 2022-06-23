function setup() {
    createCanvas(1200, 800);
    background("grey");
}
let xPos = 50
let yPos = 700

 

function draw() { 
    background("blue");
    rect(xPos, yPos - 100, 80, 120);
    circle(xPos + 40, yPos - 60, 40);
 
    triangle(xPos, yPos - 100, xPos + 80, yPos - 100, xPos + 40, yPos - 150);
    triangle(xPos, yPos + 20, xPos, yPos - 30, xPos - 50, yPos + 40);
    triangle(xPos + 80, yPos + 20, xPos + 80, yPos - 30, xPos + 130, yPos + 40);
 
    triangle(xPos + 10, yPos + 30, xPos + 70, yPos + 30, xPos + 40, yPos + 80);
    triangle(xPos + 10, yPos + 40, xPos + 70, yPos + 40, xPos + 40, yPos + 90);
    triangle(xPos + 10, yPos + 50, xPos + 70, yPos + 50, xPos + 40, yPos + 90);
 xPos = xPos + 6;
 yPos = yPos - 3.5;
}
