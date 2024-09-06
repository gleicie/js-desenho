function setup() {
    createCanvas(600, 600);
    background("red");
  }
  
  function draw() {
    stroke("white");
    fill("purple");
    //console.log(mouseIsPressed);
    if(mouseIsPressed){rect(mouseX,mouseY,100,100);}
    
    
  }