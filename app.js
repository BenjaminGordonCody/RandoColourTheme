//globals
const nOfShades = 15; //number of shades for each colour
const nOfHues = 5; //number of colours

const makeSwatchContainers = () => {
  //make rows of swatch containers
  for (let i = 0; i < nOfHues; i++) {
    let swatchContainer = document.createElement("div");
    swatchContainer.className = "swatchContainer";
    document.getElementById("colourGrid").append(swatchContainer);
  }
  let swatchContainerArray = document.getElementsByClassName("swatchContainer");
  return swatchContainerArray;
};

const putSwatchesInto = (container, swatchContainerArray) => {
  //fills a row with swatches
  for (let i = 0; i < nOfShades; i++) {
    let swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.id = `r${container}c${i}`;
    swatch.innerText = swatch.id;

    swatchContainerArray[container].append(swatch);
  }
};

const getRandomColour = () => {
  const colour = {
    r: 0,
    b: 0,
    g: 0,
  };

  for (let value in colour) {
    colour[value] = Math.round(255 * Math.random());
  }
  return colour;
};

const moveValues = (colour, amount) => {
  for (let value in colour) {
    colour[value] += amount;
    if (colour[value] > 255) {
      colour[value] = 255;
    }
    if (colour[value] < 0) {
      colour[value] = 0;
    }
  }
  return colour;
};

const getPalletteFrom = (colour) => {
  let increment = 765 / nOfShades + 1;
  let pallette = [];
  for (let i = 0; i < nOfShades; i++) {
    let maxValue = increment * (i + 1);
    let minValue = increment * i;
    let newShade = {
      r: colour.r,
      b: colour.b,
      g: colour.g,
    };
    while (newShade.r + newShade.b + newShade.g < minValue) {
      moveValues(newShade, 5);
    }
    while (newShade.r + newShade.b + newShade.g > maxValue) {
      moveValues(newShade, -5);
    }
    pallette[i] = newShade;
  }
  return pallette;
};

const stringifyColour = (colour) => {
  let string = `${colour.r}, ${colour.b}, ${colour.g}`;
  return string;
};

swatchContainerArray = makeSwatchContainers();
for (let i = 0; i < nOfHues; i++) {
  putSwatchesInto(i, swatchContainerArray);
}

for (let row = 0; row < nOfHues; row++) {
  let pallette = getPalletteFrom(getRandomColour());
  for (let col = 0; col < nOfShades; col++) {
    let rgbString = stringifyColour(pallette[col]);
    let cell = document.getElementById(`r${row}c${col}`);
    cell.style.backgroundColor = `rgb(${rgbString})`;
    cell.innerText = rgbString;
  }
}
