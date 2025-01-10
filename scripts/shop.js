//Collapsibles!!!!
var coll = document.getElementsByClassName("header-button-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-header-collapsible");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


/**
 * Select column according to the button
 * @param {*} event 
 */
function selectColumn(event) {
  // Remove "selected" class from all buttons
  const buttons = document.querySelectorAll('.col-button');
  buttons.forEach(button => button.classList.remove('selected'));

  // Mark the clicked button as selected
  event.currentTarget.classList.add('selected');
  
  //Get the columns
  const columns = event.currentTarget.getAttribute('data-col');

  // Create the grid based on the selected number of columns
  var grid = document.getElementsByClassName('product-grid')[0];
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

document.querySelectorAll('.col-button').forEach(button => {
  button.addEventListener('click', selectColumn);
});