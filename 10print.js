/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns
const chars = ['⧸','⧹']
let a = 0
let b = 0
let g = 10
function drawchar(){
  if(b<g){
    a = a;
  } else {
    b = 0;
    a = Math.floor(Math.random()*2)
    g = Math.floor(Math.random()*4);
  }
  process.stdout.write(`\x1b[${a+30}m` + chars[Math.floor(Math.random()*chars.length)]);
  b++
}

function draw () {
  setInterval(drawchar,5);
  process.stdout.write('\n') 
}


draw()
