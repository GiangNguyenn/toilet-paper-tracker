let counter = 0
input.onPinPressed(TouchPin.P0, function () {
    counter += 1
})
basic.forever(function () {
    if (counter < 3) {
        basic.showNumber(counter)
    } else if (counter == 3) {
        basic.showIcon(IconNames.No)
        pause(30000)
        counter = 0
    }
})
