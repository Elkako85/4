f=100
r=200
o=30

function setup(){
createCanvas(600, 600)
background(255)
noFill(30)
}

function draw(){
background(255)
clear();
t=o
push()
translate(width/2, height/2)
beginShape()
for(let i=0; i<TAU; i+=0.1){
n=map(noise(t, i/5), 0, 1, -r/2, r*2)
t+=0.05
y=cos(i)*r
x=sin(i)*n
vertex(x, y);
line(x, y, 3, 8)
}
endShape(CLOSE)
o+=0.01
}

