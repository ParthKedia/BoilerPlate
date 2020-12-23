function collision(java,script) {
    if(java.x - script.x < script.width/2 + java.width/2
      && script.x - java.x < script.width/2 + java.width/2
      && java.y - script.y < script.height/2 + java.height/2
      && script.y - java.y < script.height/2 + java.height/2){
      return true
      //moving.velocityX = moving.velocityX * (-1);
      //moving.velocityY = 5; 
    }
    else{
      return false
    }
  
  }
  
  function addition(a,b) {
    c = a + b; 
    console.log(c);
  }