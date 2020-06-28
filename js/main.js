filterSelection("Games") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function LengthConverter(inputId, unitId, outputId) {
  var valNum = document.getElementById(inputId).value;
  var unitSelector = document.getElementById(unitId);
  var convert = 1;
  switch (unitSelector.value) {
    case "feet":
      convert = 12;
      break;
    case "inches":
      convert = 1;
      break;
    case "meters":
      convert = 39.370;
      break;
    case "centimeters":
      convert = 0.39370;
      break;
    default:
      convert = 1;
      break;
  }
  var items = document.getElementsByClassName(outputId);
  for (var i=0; i < items.length; i++) {
    items[i].innerHTML= valNum*convert;
  }
}
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
  cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

//Input info for submission field
var inputs, index;

//gathers output field
function gatherOutput(){
  var woods = document.getElementsByClassName('buttonSelection');
  var height = document.getElementsByClassName('outputHeight')[0];
  var width = document.getElementsByClassName('outputWidth')[0];
  var depth = document.getElementsByClassName('outputDepth')[0];
  var description = document.getElementById('description');
  var email = document.getElementById('email');
  var info = "wood: ["

  for(var i=0; i<woods.length; i++){
    info += woods[i].innerHTML + " ";
  }
  info += "] height: " + height.innerHTML + " in";
  info += " width: " + width.innerHTML + " in";
  info += " depth: " + depth.innerHTML + " in";
  info += " description: " + description.value;
  console.log(info);
  window.open('mailto:troutslayer.woodworking@gmail.com?subject=order&body='+info);
}
