input.onButtonPressed(Button.A, function () {
    dreh += 150
    pins.servoWritePin(AnalogPin.P0, dreh)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
let dreh = 0
basic.showIcon(IconNames.Yes)
dreh = 90
basic.forever(function () {
	
})
