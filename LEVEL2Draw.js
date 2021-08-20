function level2Draw(){
    background2.velocityX=-7
    if (background2.x < 350) {
        background2.x = width / 2;
      }
    
      robot.changeAnimation("walk",robotImg)
    robot.velocityX=0
    if(keyDown(RIGHT_ARROW)){
        robot.changeAnimation("walk",robotImg)
        invisibleGround2.destroy()
        robot.velocityX=5
        
    }
    if(keyDown(LEFT_ARROW)){
      robot.changeAnimation("walk",robotImg)
      invisibleGround2.destroy()
      robot.velocityX=-5
      
    }
    if(keyDown(UP_ARROW)){
        robot.velocityY = -10;
        robot.changeAnimation("jump",robot3Img)
    }
    
    
    robot.velocityY = robot.velocityY + 1.0
          robot.collide(invisibleGround2)
          robot.collide(standGroup)
          robot.collide(stand1Group)
          
      if(frameCount%100===0){
        mars=createSprite(1200,250,20,20)
        mars.addImage(marsImg)
        mars.scale=0.05
        mars.velocityX=-5
        marsGroup.add(mars)
      }
      if(robot.isTouching(marsGroup)){
        gameState=WIN2
        mode="LEVEL2"
      }
          
          if(level2Score===20){
            gameState=WIN2
            mode="LEVEL2"
        }
         if(robot.isTouching(line)){
           gameState=END2
           mode="LEVEL2"
         }
}