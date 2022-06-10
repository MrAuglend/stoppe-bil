input.onButtonPressed(Button.A, function () {
	
})
bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
basic.forever(function () {
    if (bitbot.sonar(BBPingUnit.Centimeters) < 10) {
        bitbot.stop(BBStopMode.Coast)
        bitbot.rotatems(BBRobotDirection.Left, 10, 400)
    } else {
        bitbot.go(BBDirection.Forward, 60)
    }
})
