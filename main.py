def on_forever():
    for Index in range(5):
        led.toggle(Index, Index)
        basic.pause(200)
        led.toggle(Index, Index)
basic.forever(on_forever)
