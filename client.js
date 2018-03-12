/* jshint esversion: 6 */

let buttonCount = 0;
let color = 'red';

$(readyNow);

function readyNow() { // runs once DOM has loaded
  eventHandlers();
}

function eventHandlers(){ // listens for user clicking buttons
  $('#genButton').on('click', generateDiv);
  $('body').on('click', '.swapButton', swapColors);
  $('body').on('click', '.deleteButton', deleteDiv);
}

function generateDiv() { // creates new Div, p, and button elements, appends to DOM
  // increment button count
  buttonCount ++;
  // store HTML code to append in unique variables, append to body
  let newDiv = '<div class="newDiv"><p>' + buttonCount + '</p></div>';
  let newButtons = '<button type="button" class="swapButton">Swap</button><button type="button" class="deleteButton">Delete</button>';
  // append new Div to HTML body
  $('body').append(newDiv);
  /* append buttons to newDiv. I feel like there is a simpler way of achieving
  this but it works so I'm happy for now :) */
  $('body').children().last().append(newButtons);
}

/* change background color of Div. I know there is a way to use the toggle
function to do this but I ran out of time and just wanted to make it work */
function swapColors() {
  if (color === 'red'){
    $(this).parent().css('background-color', 'yellow');
    color = 'yellow';
  }
  else {
    $(this).parent().css('background-color', 'red');
    color = 'red';
  }
}

function deleteDiv() {
  $(this).parent().remove();
}
