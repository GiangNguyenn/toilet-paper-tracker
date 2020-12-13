
/**
 * Authors: Giang Nguyen ft. Hieu Pham
 */
/**
 * Date of Completion: Dec 10th
 */
/**
 * Project: Toilet Paper Tracker
 */
let counter = 0
input.onPinPressed(TouchPin.P0, function () {
    counter += 1
})

basic.forever(function () {
    if (counter < 3) {
        basic.showNumber(counter)
    } else if (counter == 3) {
        basic.showIcon(IconNames.No)
        music.playMelody("E G C5 A B G A F ", 240)
        pause(10000)
counter = 0
    }
})
