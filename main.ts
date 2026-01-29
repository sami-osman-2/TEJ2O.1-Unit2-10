/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sami Osman
 * Created on: Jan 2026
 * This program This program reads the light level and lights up 0–4 NeoPixels based on how bright it is.
*/


// Import the NeoPixel library
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB) // 4 NeoPixels on P0

// Main loop
basic.forever(function () {
    // Read the light level from the micro:bit's onboard light sensor
    let lightLevel = input.lightLevel() // 0 to 255

    // Clear all NeoPixels first
    strip.clear()

    // Use if statements to light up NeoPixels based on light level
    if (lightLevel <= 51) {
        // 0 NeoPixels → do nothing
    } else if (lightLevel <= 104) {
        // 1 NeoPixel
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    } else if (lightLevel <= 156) {
        // 2 NeoPixels
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    } else if (lightLevel <= 208) {
        // 3 NeoPixels
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    } else {
        // lightLevel > 208 → 4 NeoPixels
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }

    // Show the updated NeoPixels
    strip.show()

    basic.pause(100) // small delay for stability
})
