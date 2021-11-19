# RandoColourTheme
Rando generates a pallette of randomised RGB colours and shades. A user is then able to select elements on a dummy webpage and apply those shades. 

## How it works
RGB colours are created as an RGB object in Javascript. The three values of this object (R, G and B) are generated using Math.random. Darker and lighter shades are created by nudging each value until the total of all three values is within a suitable range of lightness or darkness. Javascript then takes these colours, and the shades generated from the, and sets them as the background colours in a grid of clickable <divs>. Clicking these divs alters the colour (or background colour) of selected elements on the dummy website. 
