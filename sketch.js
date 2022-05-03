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

add ([  //start of tubes
  "tube",
  rect(100,400),
  pos(400,500),
  color(0,100,0),
  solid(),
  area(),
])
add ([
  rect(100,200),
  pos(400,0),
  color(0,100,0),
  solid(),
  area(),
  "tube"
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
