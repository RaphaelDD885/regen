basic.forever(function () {
    for (let Index = 0; Index <= 4; Index++) {
        led.toggle(Index, Index)
        basic.pause(100)
        led.toggle(Index, Index)
    }
})
