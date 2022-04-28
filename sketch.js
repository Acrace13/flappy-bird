kaboom()

loadBean()
loadSprite("alien","alien.png")

scene("menu", () => {
  
  add([
    rect(100,100),
    text("START"),
    "startButton",
    pos(200,200),
    color(0,255,50),
    area(),
    origin("center")
  ])
  
  onClick("startButton",() => {
    go("game")
  })
})

scene("game",() => {
  
  const SPEED = 300
  let score = 0
  let hp = 3

const player = add([
  sprite("bean"),
  pos(width()/2,height()-50), //position
  area(), //collision
  origin("center")
])

const scoreLabel = add([
  text("Score: " +score),
  pos(20,20),
  z(1)
])

const hpLabel = add([
  text("hp: "+hp),
  pos(width()/2,400),
  z(1)
])
   spawnAliens()
  
  onCollide("laser", "alien", (l,a) => {
    destroy(a)
    destroy(l)
    score += 5
    scoreLabel.text = "Score: "+score
    if(score ==250) {
      go("win")
    }
})
  
  player.onCollide("bomb", () => {
    hp--
    hpLabel.text = "hp: "+hp
    if (hp == 0) {
  go ("lose")
    }
   
  })

  onKeyPress("space", () => {
  add([
    "laser",
    rect(5,10),
    color(255,0,0),
    area(),
    pos(player.pos),
    move(UP,1600),
    cleanup()
  ])
})
  
  onKeyDown("left", () => {
  if (player.pos.x > 0)
  player.move(-SPEED,0)
})
  
onKeyDown("right", () => {
  if (player.pos.x < width()) {
    player.move(SPEED, 0)
  }  
})
  
  scene("win",() => {
    add([
      text("You Win"),
      color(0,255,0),
      pos(width()/2, height()*0.2),
      origin("center"),
    ])
    
    add([
      rect(100,50),
      text("retry"),
      "retryButton",
      pos(width()/2,height()*0.5),
      origin("center"),
      area()
    ])
    
    onClick("retryButton",() => {
      go("game")
    })
  })
  
   scene("lose",() => {
    add([
      text("You Lose!"),
      color(255,0,0),
      pos(width()/2, height()*0.2),
      origin("center"),
    ])
    
    add([
      rect(100,50),
      text("retry"),
      "retryButton",
      pos(width()/2,height()*0.5),
      origin("center"),
      area()
    ])
    
    onClick("retryButton",() => {
      go("game")
    })
  })
  
  let alienVel = 30
  
  onUpdate("alien", (a) => {
    a.move(alienVel,0)
    if (a.pos.x > width()) {
      alienVel *= -1
      every("alien", (a2) => {
        a2.move(alienVel,200)
      })
    }
    
    else if (a.pos.x < 0) {
      alienVel *= -1
        every("alien", (a2) => {
        a2.move(alienVel,200)
      })
    }
    
    if (a.pos.y > height()) {
      ("lose")
    }
 
   
    
    if (Math.random() < 0.0005) {
      const bPos = a.pos.add(0,a.height/2)
    add([
      "bomb",
      pos(bPos),
      rect(15,15),
      origin("center"),
      area(),
      color(0,0,0),
      move(DOWN, 400),
      cleanup()
    ])
    }
   })
  
let lazer = {}
 lazer.x = 100
 lazer.y = player.y
 lazer.color = "red"
 lazer. size = 25
  
 function drawLazer () {
  add([
  fill(lazer.color),
    rect(lazer.size),
    pos(lazer.x,lazer.y)
  ])
  }
   
})

function spawnAliens() {
  let x =0
let y = 0
for (let i = 0; i < 50; i++) {
  add([
    "alien",
    sprite("alien",{
      width: 50,
      height: 50,
    }),
    pos(x,y),
    origin("center"),
    area(),
    solid(),
    color(0,255,50)
  ])
  
  x += 60
  if (x + 125 > width()) {
    y += 60
    x = 0
  }
}
}

go("game")