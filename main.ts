input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < t; index++) {
        basic.showNumber(input.temperature())
    }
    music.playMelody("C C C5 F D B E B ", 500)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < t; index++) {
        basic.showNumber(input.soundLevel())
    }
    music.playMelody("C5 C5 E A F B C A ", 500)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < t; index++) {
        basic.showNumber(input.lightLevel())
    }
    music.playMelody("F F C5 C G D G C ", 500)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    t += 1
    basic.showNumber(t)
    basic.showString("Changed the repeat timer")
})
let t = 0
let Code_BBC = 1
t = 4
let code = 0
basic.showString("Hi there this kit is by DXV")
