function setup() {
    createCanvas(400 , 400);
      background("blue");
  }
  
  function draw() {
    stroke("black");
     fill("red");
  
  // console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
         rect(mouseX, mouseY, 30, 30);
    }
    
  }