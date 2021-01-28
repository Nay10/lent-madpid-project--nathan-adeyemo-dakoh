controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...............bbbbbbbbbbbbbbbbbbb...............
        ...........bbbbdd111111111111111ddbbbb...........
        ........bbbd1111111111111111111111111dbbb........
        ......bbd11111111dddddddddddddd111111111dbb......
        ....bbd1111111ddd11111111111111dddd1111111dbb....
        ...bd111111ddd111111111111111111111ddd111111db...
        ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
        .bd11111dd111dddd111111111111111dddd111dd11111db.
        .b11111d111ddd111111111111111111111ddd111d11111b.
        bd11111d1ddd1111111111111111111111111ddd1111111db
        b11111d1ddd111111111111111111111111111ddd1d11111b
        b11111ddddd111111111111111111111111111ddddd11111b
        b11111ddddd111111111111111111111111111dddbd11111b
        b111111dddd111111111111111111111111111dddb111111b
        bd111111dddd1111111111111111111111111dddbd11111db
        .b1111111dddd11111111111111111111111dddbd111111b.
        .bd1111111dbbdd1111111111111111111dddbbd111111db.
        ..bd11111111dbbdd111111111111111dddbbd1111111db..
        ...bd111111111dbbbbbbdddddddddddddd111111111db...
        ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
        ......bbdd11111111111111111111111111111ddbb......
        ........bbbdd11111111111111111111111ddbbb........
        ...........bbbbbddd11111111111dddbbbbb...........
        ................bbbbbbbbbbbbbbbbb................
        `, mySprite, 30, 70)
})
let projectile: Sprite = null
let mySprite: Sprite = null
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
