let b = 0
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    b = 1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        b = 0
        while (b == 0) {
            for (let y = 0; y <= 4; y++) {
                for (let x = 0; x <= 4; x++) {
                    led.plot(x, y)
                    basic.pause(200)
                    led.unplot(x, y)
                }
            }
        }
    }
})
