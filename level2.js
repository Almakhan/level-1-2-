function level2(){
    createCanvas(1200,540)

    background2=createSprite(650,270,20,20)
    background2.addImage(background2Img)
    background2.scale=1.5
    
    
    robot=createSprite(200,100,20,20)
    robot.addAnimation("stand",robot2Img )
    robot.addAnimation("walk",robotImg)
    robot.addAnimation("jump",robot3Img )
    
    robot.scale=0.4
     
    invisibleGround2=createSprite(200,250,100,20)
    invisibleGround2.shapeColor="orange"
    
    line=createSprite(650,530,1300,20)
    line.shapeColor="red"


}

