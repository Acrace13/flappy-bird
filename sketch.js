kaboom()

loadBean()
loadSprite("bird", "Flappy-Bird-PNG-Image.png")


scene("game", () => {
  
let score =0

const SPEED = 250

const player = add ([
  sprite("bird", {
    width:100,
    height:100
  }),
  pos(50,50),
  body(),
  area({scale: 0.65})
])

add ([ //starting point
  rect(200,50),
  pos(10,400),
  solid(),
  area(),
  color(100,0,0)
])

add ([ //tube 1
  rect(100,200),
  pos(400,0),
  color(0,100,0),
  solid(),
  area(),
  "tube"
])

add ([  
  "tube", 
  rect(100,400),
  pos(400,500),
  color(0,100,0),
  solid(),
  area(),
])

add([
  "coin", // coin 1
  rect(100,200),
  pos(400,250),
  area(),
  color(200,200,0)
])

add ([ //tube 2
  rect(100,175),
  pos(900,0),
  color(0,100,0),
  solid(),
  area(),
  "tube"
  ])

add ([  
  "tube", 
  rect(100,300),
  pos(900,400),
  color(0,100,0),
  solid(),
  area(),
])

add([
  "coin", // coin 2
  rect(100,100),
  pos(900,250),
  area(),
  color(200,200,0)
])

add ([ //tube 3
  rect(100,200),
  pos(1400,0),
  color(0,100,0),
  solid(),
  area(),
  "tube"
])

add ([  
  "tube", 
  rect(100,400),
  pos(1400,500),
  color(0,100,0),
  solid(),
  area(),
  ])
  
  
add([
  "coin", // coin 3
  rect(100,200),
  pos(1400,250),
  area(),
  color(200,200,0)
])
  
add ([ //tube 4
  rect(100,300),
  pos(1900,0),
  color(0,100,0),
  solid(),
  area(),
  "tube"
])

add ([  
  "tube", 
  rect(100,400),
  pos(1900,600),
  color(0,100,0),
  solid(),
  area(),
])

add([
  "coin", // coin 4
  rect(100,150),
  pos(1900,370),
  area(),
  color(200,200,0)
])

add ([ //tube 5
  rect(100,100),
  pos(2400,0),
  color(0,100,0),
  solid(),
  area(),
  "tube"
])

add ([  
  "tube", 
  rect(100,600),
  pos(2400,350),
  color(0,100,0),
  solid(),
  area(),
])

add([
  "coin", // coin 5
  rect(100,150),
  pos(2400,150),
  area(),
  color(200,200,0)
])

add([ //finish line
  "finish",
  rect (100,1000),
  pos(2900,0),
  color(100,0,0),
  area()
])

let scoreLable = add([
  text ("Score: 0"),
  pos(-200,100)
])


player.onCollide("coin", (c) => {
  destroy(c)
  score++
scoreLable.text = "score: " +score
})


player.onCollide("tube", () => {
  addKaboom(player.pos)
  destroy(player)
   wait(1, () => {
     go("lose")
   })
})
  
onKeyDown("right", () => {
  player.move(SPEED,0)
})
  
  onKeyDown("right", () => {
    scoreLable.move(SPEED,0)
  })

onKeyPress("space", () => {
  player.jump()
})
  
 onUpdate ( () => {
  camPos(player.pos.x,350)
})

player.onCollide("finish", () => {
  go("win")
})


 
  scene("win",() => {
    add([
      text("You Win"),
      color(0,255,0),
      pos(width()/2, height()*0.2),
      origin("center"),
    ])
   
   add([
    text("Play Again"),
    "playButton",
    pos(width() / 2, height() / 2 + 75),
    origin("center"),
    area(),
  ]);
   
   
  onClick("playButton", () => {
    go("game")
  })
 })

scene("lose",() => {
    add([
      text("You Lose"),
      color(255,0,0),
      pos(width()/2, height()*0.2),
      origin("center")
    ])
  
  add([
    text("Retry"),
    "playButton",
    pos(width() / 2, height() / 2 + 75),
    origin("center"),
    area(),
  ]);
  
  onClick("playButton", () => {
    go("game")
  })
})
  })

scene ("menu", () => {
  add([
    text("Flappy Bird"),
    color(0,255,0),
    pos(width() / 2, height() / 2 - 50),
    origin("center"),
  ])
  
  add([
    text("Play here!"),
    "playButton",
    pos(width() / 2, height() / 2 + 75),
    origin("center"),
    area()
  ])
  
  add([
    text("controls"),
    "controls",
    pos(width() / 2, height() / 2 + 170),
    origin("center"),
    area()
  ])
  
  onClick("playButton", () => {
    go("game")
  })
  
  onClick("controls", () => {
    go("controls")
  })
})

scene ("controls", () => {
  add([
    text("Press Right arrow to move"),
    pos(width() / 2, height() / 2 - 50),
    origin("center"),
  ])
  
  add([
    text("Press space to jump"),
    pos(width() / 2, height() / 2 + 75),
    origin("center"),
    area()
  ])
  
  add([
    text("Play Here!"),
    "playButton",
    color(0,255,0),
     pos(width() / 2, height() / 2 + 170),
    origin("center"),
    area()
  ])
  
  onClick("playButton", () => {
    go("game")
  })
})


go("menu")
