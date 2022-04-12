namespace SpriteKind {
    export const CAR = SpriteKind.create()
    export const LIGHT = SpriteKind.create()
    export const Rcar = SpriteKind.create()
    export const scene = SpriteKind.create()
    export const rLIGHT = SpriteKind.create()
    export const WATER = SpriteKind.create()
    export const Insecticide = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (change == false) {
        Insecticide = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 . 1 . . . . . . . 
            . . . . . . 8 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 . 1 . . . . . 9 . . . 
            . . . . 8 . . . . . . . 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 . . . . . . . . . . . 1 . 
            . . . . 9 . . . . 9 . . . . . . 
            . . . . 8 . 1 . . 8 . . . . . . 
            . . 9 . . . . . . . . . . . 9 . 
            . . 8 . . . . . . . . . . . 8 . 
            . . . . . . . . 1 . . . 1 . . . 
            9 . 1 . 9 . . . 9 . . . . . . . 
            8 . . . . 8 . . 8 . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            `, hero, direction * 60, 0)
        Insecticide.startEffect(effects.coolRadial, 200)
        Insecticide.setKind(SpriteKind.Insecticide)
        pause(1000)
    }
})
function GO () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        hero,
        assets.animation`向上走`,
        200,
        true
        )
    }
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        hero,
        assets.animation`向右`,
        200,
        true
        )
    }
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        hero,
        assets.animation`向左`,
        200,
        true
        )
    }
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        hero,
        assets.animation`向下`,
        200,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.CAR, SpriteKind.LIGHT, function (sprite, otherSprite) {
    if (Signal) {
        sprite.setVelocity(randint(40, 80), 0)
    } else {
        sprite.setVelocity(0, 0)
    }
})
function hero2 () {
    hero = sprites.create(img`
        ......ffff......
        ....fff11fff....
        ...ff111111ff...
        ..ff11111111ff..
        ..ff111111111f..
        ..f11ffffff11f..
        ..f1ffeeeeffff..
        .ffefbf44fbfeff.
        .f1efbf44fbfe1f.
        .fe1e999999e1ef.
        f1fe11111111ef1f
        f1ffe999999eff1f
        f1f4f111f11f4f1f
        f1f.f111f1ff.f1f
        .ff.f111f11f.ff.
        ....f111f11f....
        ....f111f11f....
        ....f111f11f....
        ....ffffffff....
        ................
        `, SpriteKind.Player)
    hero.setPosition(20, 30)
    hero.z = 0
    controller.moveSprite(hero)
    scene.cameraFollowSprite(hero)
}
function scenesettings () {
    change = true
    pot_images = [
    assets.image`我的影像13`,
    assets.image`我的影像15`,
    assets.image`我的影像14`,
    assets.image`我的影像16`,
    assets.image`我的影像17`,
    assets.image`我的影像18`
    ]
    for (let index = 0; index < 10; index++) {
        pot = sprites.create(pot_images._pickRandom(), SpriteKind.WATER)
        pot.setPosition(randint(10, 1540), randint(168, 232))
        pot = sprites.create(pot_images._pickRandom(), SpriteKind.WATER)
        pot.setPosition(randint(10, 1540), randint(10, 72))
    }
    LIGHT1 = sprites.create(assets.image`我的影像2`, SpriteKind.scene)
    LIGHT1.z = 5
    LIGHT1.setPosition(230, 50)
    LIGHT2 = sprites.create(assets.image`我的影像2`, SpriteKind.scene)
    LIGHT2.z = 5
    LIGHT2.setPosition(185, 135)
    traffic = sprites.create(assets.image`我的影像5`, SpriteKind.scene)
    traffic.setPosition(170, 70)
    traffic.z = 5
    LIGHT12 = sprites.create(assets.image`我的影像6`, SpriteKind.LIGHT)
    LIGHT12.setPosition(170, 70)
    LIGHT12.z = 10
    LIGHT4 = sprites.create(assets.image`我的影像11`, SpriteKind.rLIGHT)
    LIGHT4.setPosition(239, 119)
    LIGHT4.z = 10
    TRAFFIC4 = sprites.create(assets.image`我的影像10`, SpriteKind.rLIGHT)
    TRAFFIC4.z = 10
    TRAFFIC4.setPosition(230, 130)
    LIGHT3 = sprites.create(assets.image`我的影像2`, SpriteKind.scene)
    LIGHT3.setPosition(710, 50)
    LIGHT3.z = 10
    LIGHT42 = sprites.create(assets.image`我的影像2`, SpriteKind.scene)
    LIGHT42.setPosition(665, 135)
    LIGHT42.z = 10
    light5 = sprites.create(assets.image`我的影像11`, SpriteKind.rLIGHT)
    light5.setPosition(719, 119)
    light5.z = 10
    traffic5 = sprites.create(assets.image`我的影像10`, SpriteKind.rLIGHT)
    traffic5.z = 10
    traffic5.setPosition(710, 130)
    traffic_2 = sprites.create(assets.image`我的影像5`, SpriteKind.scene)
    traffic_2.setPosition(650, 70)
    traffic_2.z = 5
    LIGHT22 = sprites.create(assets.image`我的影像6`, SpriteKind.LIGHT)
    LIGHT22.setPosition(650, 70)
    LIGHT22.z = 10
    TRAFFIC3 = sprites.create(assets.image`我的影像5`, SpriteKind.scene)
    TRAFFIC3.setPosition(1175, 70)
    TRAFFIC3.z = 5
    LIGHT32 = sprites.create(assets.image`我的影像6`, SpriteKind.LIGHT)
    LIGHT32.setPosition(1175, 70)
    LIGHT32.z = 10
    LIGHT5 = sprites.create(assets.image`我的影像2`, SpriteKind.scene)
    LIGHT5.setPosition(1240, 50)
    LIGHT5.z = 10
    LIGHT6 = sprites.create(assets.image`我的影像2`, SpriteKind.scene)
    LIGHT6.setPosition(1190, 135)
    LIGHT6.z = 10
    light6 = sprites.create(assets.image`我的影像11`, SpriteKind.rLIGHT)
    light6.setPosition(1249, 119)
    light6.z = 10
    traffic6 = sprites.create(assets.image`我的影像10`, SpriteKind.rLIGHT)
    traffic6.setPosition(1240, 130)
    traffic6.z = 10
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖34`, function (sprite, location) {
    change = false
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbbbbbbbb6bbbbbbbbbbbbbbbb6bbbbb
        bbbbbb6bbb66bbbbb66bbbb6bbb6bbbb6b66bbb6bbbbbb6bbb66bbbbb66bbbb6bbb6bbbb6b66bbb6bbbbbb6bbb66bbbbb66bbbb6bbb6bbbb6b66bbb6bbbbbb6bbb66bbbbb66bbbb6bbb6bbbb6b66bbb6
        bb6bbb66b66bb6bbb66bbb66bbb66bbb6bb66b66bb6bbb66b66bb6bbb66bbb66bbb66bbb6bb66b66bb6bbb66b66bb6bbb66bbb66bbb66bbb6bb66b66bb6bbb66b66bb6bbb66bbb66bbb66bbb6bb66b66
        bb66bb66b66bb66bbb66b66bbbb66b6b66b6666bbb66bb66b66bb66bbb66b66bbbb66b6b66b6666bbb66bb66b66bb66bbb66b66bbbb66b6b66b6666bbb66bb66b66bb66bbb66b66bbbb66b6b66b6666b
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        `)
    tiles.setCurrentTilemap(tilemap`層級3`)
    sprites.destroyAllSpritesOfKind(SpriteKind.CAR)
    sprites.destroyAllSpritesOfKind(SpriteKind.LIGHT)
    sprites.destroyAllSpritesOfKind(SpriteKind.Rcar)
    sprites.destroyAllSpritesOfKind(SpriteKind.scene)
    sprites.destroyAllSpritesOfKind(SpriteKind.rLIGHT)
    sprites.destroyAllSpritesOfKind(SpriteKind.WATER)
    game.splash("請消滅白線斑蚊魔王")
    game.splash("A鍵攻擊 B建瞬移")
    heroblood = statusbars.create(20, 4, StatusBarKind.Health)
    heroblood.setColor(7, 2)
    heroblood.value = 100
    villaibblood = statusbars.create(20, 4, StatusBarKind.Health)
    villaibblood.setColor(7, 2)
    villaibblood.value = 100
    hero2()
    heroblood.attachToSprite(hero, 2, 0)
    scene.cameraFollowSprite(hero)
    hero.setPosition(0, 78)
    villain = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f b b f f . . . . . 
        . . . . . . f 2 b b f . d d d d 
        . . . . f f f f f f f . d d d d 
        . . . . f . . . f f 1 d d d . . 
        . . f f . . . . 1 1 1 f . . . . 
        . f f . . d d d f f f 1 . . . . 
        f f . d d d . . 1 1 1 1 f . . . 
        . . . d d d . . f f f f 1 . . . 
        . . . . . . . . . 1 1 1 1 . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . . 1 1 1 f . . 
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    villaibblood.attachToSprite(villain)
    villain.setPosition(121, 78)
    scaling.scaleByPixels(villain, 30, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    villain.follow(hero, 30)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Insecticide, function (sprite, otherSprite) {
    villaibblood.value += -1 * info.score()
    otherSprite.destroy(effects.coolRadial, 500)
})
scene.onHitWall(SpriteKind.Rcar, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Rcar, SpriteKind.rLIGHT, function (sprite, otherSprite) {
    if (Signal) {
        sprite.setVelocity(randint(-40, -80), 0)
    } else {
        sprite.setVelocity(0, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖0`, function (sprite, location) {
    game.splash("請遵守交通規則")
    info.changeScoreBy(-1)
    if (sprite.y < 115) {
        sprite.setPosition(hero.x, 70)
    } else if (sprite.y > 115) {
        sprite.setPosition(hero.x, 170)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rcar, function (sprite, otherSprite) {
    if (otherSprite.vx != 0) {
        game.splash("請遵守交通規則")
        info.changeScoreBy(-2)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (change == false) {
        hero.x += direction * 60
    }
})
scene.onHitWall(SpriteKind.CAR, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CAR, function (sprite, otherSprite) {
    if (otherSprite.vx != 0) {
        game.splash("請遵守交通規則")
        info.changeScoreBy(-2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖23`, function (sprite, location) {
    if (Signal) {
        game.splash("請遵守交通規則")
        info.changeScoreBy(-1)
        if (sprite.y < 115) {
            sprite.setPosition(hero.x, 70)
        } else if (sprite.y > 115) {
            sprite.setPosition(hero.x, 170)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.WATER, function (sprite, otherSprite) {
    otherSprite.destroy(effects.coolRadial, 500)
    info.changeScoreBy(1)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    GO()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖22`, function (sprite, location) {
    game.splash("請遵守交通規則")
    info.changeScoreBy(-1)
    if (sprite.y < 115) {
        sprite.setPosition(hero.x, 70)
    } else if (sprite.y > 115) {
        sprite.setPosition(hero.x, 170)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, hero)
    if (hero.vx == 0 || hero.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, hero)
        GO()
    } else {
        GO()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    heroblood.value += -5
    hero.x += direction * 60
})
let car: Sprite = null
let villain: Sprite = null
let villaibblood: StatusBarSprite = null
let heroblood: StatusBarSprite = null
let traffic6: Sprite = null
let light6: Sprite = null
let LIGHT6: Sprite = null
let LIGHT5: Sprite = null
let LIGHT32: Sprite = null
let TRAFFIC3: Sprite = null
let LIGHT22: Sprite = null
let traffic_2: Sprite = null
let traffic5: Sprite = null
let light5: Sprite = null
let LIGHT42: Sprite = null
let LIGHT3: Sprite = null
let TRAFFIC4: Sprite = null
let LIGHT4: Sprite = null
let LIGHT12: Sprite = null
let traffic: Sprite = null
let LIGHT2: Sprite = null
let LIGHT1: Sprite = null
let pot: Sprite = null
let pot_images: Image[] = []
let Signal = false
let direction = 0
let hero: Sprite = null
let Insecticide: Sprite = null
let change = false
tiles.setCurrentTilemap(tilemap`層級1`)
info.setScore(0)
scenesettings()
hero2()
game.splash("移動角色請操控上下左右鍵")
game.splash("夏日炎炎")
game.splash("蚊子們開始大肆繁殖")
game.splash("為了防治登革熱，請在注意交通安全的情況下完成可能會積水處的處理")
game.onUpdate(function () {
    if (change == false) {
        if (hero.x > villain.x) {
            direction = -1
            hero.setImage(assets.image`我的影像20`)
            villain.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . f f b b f f . . . . . 
                d d d d . f b b 2 f . . . . . . 
                d d d d . f f f f f f f . . . . 
                . . d d d 1 f f . . . f . . . . 
                . . . . f 1 1 1 . . . . f f . . 
                . . . . 1 f f f d d d . . f f . 
                . . . f 1 1 1 1 . . d d d . f f 
                . . . 1 f f f f . . d d d . . . 
                . . . 1 1 1 1 . . . . . . . . . 
                . . . f f f f . . . . . . . . . 
                . . f 1 1 1 . . . . . . . . . . 
                . . f f f . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (hero.x < villain.x) {
            direction = 1
            hero.setImage(assets.image`我的影像21`)
            villain.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . f f b b f f . . . . . 
                . . . . . . f 2 b b f . d d d d 
                . . . . f f f f f f f . d d d d 
                . . . . f . . . f f 1 d d d . . 
                . . f f . . . . 1 1 1 f . . . . 
                . f f . . d d d f f f 1 . . . . 
                f f . d d d . . 1 1 1 1 f . . . 
                . . . d d d . . f f f f 1 . . . 
                . . . . . . . . . 1 1 1 1 . . . 
                . . . . . . . . . f f f f . . . 
                . . . . . . . . . . 1 1 1 f . . 
                . . . . . . . . . . . f f f . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        if (villaibblood.value == 0) {
            game.over(true)
        } else if (heroblood.value == 0) {
            game.over(false)
        }
    }
})
forever(function () {
    if (change) {
        car = sprites.create(img`
            . . . 2 2 2 2 2 2 2 2 . . . . 
            . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            2 c 2 e e e e e e e b c 4 2 2 
            2 2 e b b e b b b e e b 4 2 2 
            2 e b b b e b b b b e 2 2 2 2 
            e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            e e e e e e f e e e f e 2 d d 
            e e e e e e f e e f e e e 2 d 
            e e e e e e f f f e e e e e e 
            e f f f f e e e e f f f e e e 
            . f f f f f e e f f f f f e . 
            . . f f f . . . . f f f f . . 
            `, SpriteKind.CAR)
        car.setPosition(-10, 100)
        car.z = 7
        scaling.scaleByPixels(car, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        car.setVelocity(randint(40, 80), 0)
        pause(5000)
    } else if (change) {
        car = sprites.create(img`
            . . . 6 6 6 6 6 6 6 6 . . . . 
            . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            6 6 8 b b 8 b b b 8 8 b 9 6 6 
            6 8 b b b 8 b b b b 8 6 6 6 6 
            8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            8 f f f f 8 8 8 8 f f f 8 8 8 
            . f f f f f 8 8 f f f f f 8 . 
            . . f f f . . . . f f f f . . 
            `, SpriteKind.CAR)
        car.setPosition(-11, 100)
        car.z = 7
        car.setVelocity(randint(40, 80), 0)
        scaling.scaleByPixels(car, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
    } else if (change) {
        car = sprites.create(img`
            . . . 3 3 3 3 3 3 3 3 . . . . 
            . . 3 d 3 3 3 3 3 3 c 3 . . . 
            . 3 c d 3 3 3 3 3 3 c c 3 . . 
            3 c c d d d d d d 3 c c d 3 d 
            3 c 3 a a a a a a a b c d 3 3 
            3 3 a b b a b b b a a b d 3 3 
            3 a b b b a b b b b a 3 3 3 3 
            a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
            a a a a a a f a a a f a 3 d d 
            a a a a a a f a a f a a a 3 d 
            a a a a a a f f f a a a a a a 
            a f f f f a a a a f f f a a a 
            . f f f f f a a f f f f f a . 
            . . f f f . . . . f f f f . . 
            `, SpriteKind.CAR)
        car.z = 7
        car.setPosition(-10, 100)
        car.setVelocity(randint(40, 80), 0)
        scaling.scaleByPixels(car, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
    }
})
forever(function () {
    if (change) {
        car = sprites.create(img`
            . . . . 2 2 2 2 2 2 2 2 . . . 
            . . . 2 c 2 2 2 2 2 2 4 2 . . 
            . . 2 c c 2 2 2 2 2 2 4 c 2 . 
            d 2 4 c c 2 4 4 4 4 4 4 c c 2 
            2 2 4 c b e e e e e e e 2 c 2 
            2 2 4 b e e b b b e b b e 2 2 
            2 2 2 2 e b b b b e b b b e 2 
            2 2 2 e 2 2 2 2 2 e 2 2 2 e e 
            d d 2 e f e e e f e e e e e e 
            d 2 e e e f e e f e e e e e e 
            e e e e e e f f f e e e e e e 
            e e e f f f e e e e f f f f e 
            . e f f f f f e e f f f f f . 
            . . f f f f . . . . f f f . . 
            `, SpriteKind.Rcar)
        car.setPosition(1650, 125)
        car.setVelocity(randint(-40, -80), 0)
        car.x = 8
        scaling.scaleByPixels(car, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
    } else if (change) {
        car = sprites.create(img`
            . . . . . 6 6 6 6 6 6 6 6 . . 
            . . . . 6 c 6 6 6 6 6 6 9 6 . 
            . . . 6 c c 6 6 6 6 6 6 9 c 6 
            . d 6 9 c c 6 9 9 9 9 9 9 c c 
            d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
            6 6 6 9 b 8 8 b b b 8 b b 8 6 
            6 6 6 6 6 8 b b b b 8 b b b 8 
            6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
            6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
            d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
            8 8 8 8 8 8 8 f f f 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f f 
            . . 8 f f f f f 8 8 f f f f f 
            . . . f f f f . . . . f f f . 
            `, SpriteKind.Rcar)
        car.x = 8
        car.setPosition(1650, 125)
        car.setVelocity(randint(-40, -80), 0)
        scaling.scaleByPixels(car, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5000)
    } else if (change) {
        car = sprites.create(img`
            . . . . . 3 3 3 3 3 3 3 3 . . 
            . . . . 3 c 3 3 3 3 3 3 d 3 . 
            . . . 3 c c 3 3 3 3 3 3 d c 3 
            . d 3 d c c 3 d d d d d d c c 
            d 3 3 d c b a a a a a a a 3 c 
            3 3 3 d b a a b b b a b b a 3 
            3 3 3 3 3 a b b b b a b b b a 
            3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
            3 d d 3 a f a a a f a a a a a 
            d d 3 a a a f a a f a a a a a 
            a a a a a a a f f f a a a a a 
            a a a a f f f a a a a f f f f 
            . . a f f f f f a a f f f f f 
            . . . f f f f . . . . f f f . 
            `, SpriteKind.Rcar)
        car.setPosition(1650, 125)
        car.x = 8
        car.setVelocity(randint(-40, -80), 0)
        scaling.scaleByPixels(car, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        pause(5500)
    }
})
forever(function () {
    Signal = true
    LIGHT12.setImage(assets.image`我的影像7`)
    LIGHT22.setImage(assets.image`我的影像7`)
    LIGHT32.setImage(assets.image`我的影像7`)
    LIGHT4.setImage(assets.image`我的影像12`)
    light5.setImage(assets.image`我的影像12`)
    light6.setImage(assets.image`我的影像12`)
    LIGHT1.setImage(assets.image`我的影像3`)
    LIGHT2.setImage(assets.image`我的影像3`)
    LIGHT3.setImage(assets.image`我的影像3`)
    LIGHT42.setImage(assets.image`我的影像3`)
    LIGHT5.setImage(assets.image`我的影像3`)
    LIGHT6.setImage(assets.image`我的影像3`)
    pause(5000)
    Signal = !(Signal)
    LIGHT12.setImage(assets.image`我的影像6`)
    LIGHT22.setImage(assets.image`我的影像6`)
    LIGHT32.setImage(assets.image`我的影像6`)
    LIGHT4.setImage(assets.image`我的影像11`)
    light5.setImage(assets.image`我的影像11`)
    light6.setImage(assets.image`我的影像11`)
    LIGHT1.setImage(assets.image`我的影像2`)
    LIGHT2.setImage(assets.image`我的影像2`)
    LIGHT3.setImage(assets.image`我的影像2`)
    LIGHT42.setImage(assets.image`我的影像2`)
    LIGHT5.setImage(assets.image`我的影像2`)
    LIGHT6.setImage(assets.image`我的影像2`)
    pause(5000)
})
