/* FOR LOOPS
------------------------------------*/
let start = 1;
let max = 100;

// Classic loop:
// 1st part = initialization
// 2nd part = condition - when do you want to stop the loop ?
// 3rd part = incrementation
// for( let i = start; i <= max; i++) {
//   // show("My current number is: " + i);
// }



let names = ["James", "Julia", "Edith"]; // show(names.length);
// show(names);

// for(let i = 0; i < names.length; i++) {
//   // show("Name: " + names[i]);
// }


// CHALLENGE
// 1. Display the numbers between 20 and 30
// for(let i = 20; i <= 30; i++) {
//   show(i);
// }


// 2. Given this array :
let todos = [

  {
    text: "Learn JS",
    completed: true
  },
  {
    text: "Learn PHP",
    completed: false
  },
  {
    text: "Learn Python",
    completed: false
  }

];
// Display the text of the todo and the completed status
/*
for(let i = 0; i < todos.length; i++) {

  let text = todos[i].text;
  let completed = todos[i].completed;

  // The short way
  let displayStatus = (completed === true) ? "Done!" : "Todo...";

  // The long way
  // if(completed === true) {
  //   displayStatus = "Done!";
  // }
  // else {
  //   displayStatus = "Todo...";
  // }

  let output = text + ": " + displayStatus;

  show(output);

}
*/



/* FOREACH LOOPS
------------------------------------*/

// We call the function argument "Closure" or "anonymus function"
todos.forEach(function(item) {
  show(item.text);
});

function bob(item) {
  show(item.text);
}
todos.forEach(bob);