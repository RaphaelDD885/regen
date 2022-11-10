let x = 0
basic.forever(function () {
    x = randint(0, 4)
    for (let Index = 0; Index <= 4; Index++) {
        led.toggle(x, Index)
        basic.pause(100)
        led.toggle(x, Index)
    }
    basic.pause(100)
})
