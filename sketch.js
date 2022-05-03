kaboom()

loadBean()

const player = add ([
  sprite("bean"),
  pos(50,300),
  body(),
  area(),
])

add ([
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

player.onCollide("tube", () => {
  addKaboom(player.pos)
  destroy(player)
})

const SPEED = 250


onKeyDown("right", () => {
  player.move(SPEED,0)
})

onKeyPress("space", () => {
  player.jump()
})

onUpdate ( () => {
  camPos(player.pos.x,350)
})
