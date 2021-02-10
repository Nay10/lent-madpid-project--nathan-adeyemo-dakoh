controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
        ....................................
        ....................................
        ....................................
        ...............ccffff...............
        ..............cddbbbf...............
        .......ffffffcddbbbf................
        .....ffbbbbbbbbbbbbbcfff.......ccccc
        ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
        ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
        .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
        .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
        .ffbb1111fffbbcbbbbcccccccbcffbccf..
        ..ff111111111bbbbccccccbbbcc..fbbcf.
        ....ccccccc111bdbbbfddbccc.....ffbbf
        ........ccccccfbdbbbfcc..........fff
        ...............ffffff...............
        `, jet, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
let opp: Sprite = null
let bullet: Sprite = null
let jet: Sprite = null
jet = sprites.create(img`
    . . . . . f c c c c f . . . . . 
    . . c c f b b 3 3 b b f c c . . 
    . c b 3 3 b b c c b b 3 3 b c . 
    . f 3 c c c b c c b c c c 3 f . 
    f c b b c c b c c b c c b b c f 
    c 3 c c b c c c c c c b c c 3 c 
    c 3 c c c c c c c c c c c c 3 c 
    . f b b c c c c c c c c b b f . 
    . . f b b c c c c c c b b f . . 
    . . c c c f f f f f f c c c . . 
    . c 3 f f f f f f f f f f 3 c . 
    c 3 f f f f f f f f f f f f 3 c 
    f 3 c c f f f f f f f f c c 3 f 
    f b 3 c b b f b b f b b c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
jet.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(jet, 200, 200)
game.onUpdateInterval(500, function () {
    opp = sprites.create(img`
        ................................
        ................................
        ..........bbbbbbbbbbbb..........
        .......bbb331111333333bbb.......
        .....cbb3331111113333333bbb.....
        ....cb33333311113333333111db....
        ...cb3111133333333333311111db...
        ..cbb1111113333333333311111ddc..
        .cbbd1111113333333333331111ddbc.
        cbbbdd11111333333111333311ddbbbc
        cbbbdddd1133333311111333bbbbbbbc
        ccbbbddddbbb33331111dbbbbbbbbbcc
        .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
        ..cccbbbbbbbbbbbbbbbbbbbbbbccc..
        .....cccccccccccccccccccccc.....
        ..........bbbdddd11dbb..........
        `, SpriteKind.Enemy)
    opp.setVelocity(-100, 0)
    opp.left = scene.screenWidth()
    opp.y = randint(0, scene.screenHeight())
    opp.setFlag(SpriteFlag.AutoDestroy, true)
})
