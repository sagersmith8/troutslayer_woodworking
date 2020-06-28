var slideIndex = 1;
var buttonId = 0;
var wood = ["AFRICAN MAHOGANY", "BLOODWOOD", "PURPLEHEART", "ZEBRAWOOD"];
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function addElement(parentId, elementTag, elementId, attrs, html) {
    // Adds an element to the document
    var i;
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    for (i = 0; i < p.children.length; i++) {
    	if(p.children[i].innerText == html)
    		return
    }
    newElement.setAttribute('id', elementId);
    for (i = 0; i < attrs.length; i++) {
    	newElement.setAttribute(attrs[i][0], attrs[i][1]);
    }
    newElement.innerText = html;
    p.appendChild(newElement);
    sortChildren(p.id)
}

function addWoodSelection() {
    buttonId++; // increment fileId to get a unique ID for the new element
    var attrs = [['onClick', 'removeElement("woodSelection-'+ buttonId +'")'], ['class', 'buttonSelection w3-animate-opacity']];
    addElement('cart', 'button', 'woodSelection-' + buttonId, attrs, wood[slideIndex-1]);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function sortChildren(id, sortDescending) {
  if(typeof id == "string")
    element = document.getElementById(id);


  // Get the list items and setup an array for sorting
  var lis = element.getElementsByTagName("BUTTON");
  var vals = [];

  // Popelementate the array
  for(var i = 0, l = lis.length; i < l; i++)
    vals.push(lis[i].innerText);

  // Sort it
  vals.sort();

  // Sometimes you gotta DESC
  if(sortDescending)
    vals.reverse();

  // Change the list on the page
  for(var i = 0, l = lis.length; i < l; i++)
    lis[i].innerText = vals[i];
}
