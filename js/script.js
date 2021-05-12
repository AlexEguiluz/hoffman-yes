var element;
var rectangle;

function setup() {
  noCanvas();

  element = select("#hofmann");
  element.mouseOver(changeBackground);
  element.mouseOut(changeColor);
  //element.mousePressed(changeHeight);
  
  //let x = random(height);
  rectangle = selectAll(".hof", "#hofmann");
  rectangle[5].style("background-color", "skyblue");
  console.log("hof");

  //LOOPS
  for (let i = 0; i < rectangle.length; i = i + 1) {
    rectangle[i].style("background-color", "skyblue");

    ///change our grids things RANDOMLY in here
    let a = random(11);
    //grid-row: a / random(a, 11)
    rectangle[i].style("grid-row", floor(a) + "/" + floor(random(a, 11)));
  }
}

function changeBackground() {
  element.style("background-color", "lightgreen");
}

function changeColor() {
  element.style("background-color", "peachpuff");
  //normal Java and not P5j: element.elt.style.cssText = "border: 100px solid pink;"
}

//function changeHeight() {
// this now becomes a function to change the 'height'
console.log("you have clicked the element");
