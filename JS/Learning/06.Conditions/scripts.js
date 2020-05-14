/* CONDITIONS
------------------------------------*/
let num = 5;
let num2 = 20;


//Comparison operators :
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to
// == equal to
// === equal to and the same type
// != NOT equal to
// !== NOT equal and not the same type


// A SIMPLE CONDITION
if(num > 5) {
  show("Simple check:", "TRUE!");
}
else {
  show("Simple check:", "FALSE!");
}

// A STRICT EQUALITY CHECK CONDITION
if(num === 5) {
  show("Strict equality:", "TRUE!");
}
else {
  show("Strict equality:", "FALSE!");
}


// A DOUBLE CKECK WITH "OR" (logical operator)
// One of the conditions must be true
if(num > 5 || num2 < 30) {
  show("Double check with OR:", "TRUE");
}

// A DOUBLE CKECK WITH "AND" (logical operator)
// Both conditions must be true
if(num > 5 && num2 < 30) {
  show("Double check with AND:", "TRUE");
}


// USING NOT OPERATOR
if(num != "5") {
  show("not operator: TRUE!");
}

// COMPLEX CHECKS
            //FALSE                      //FALSE
if((num === 5 && num > 5) || (num2 == 20 && num2 > 20)) {
  show("complex cond: TRUE!");
}

let num3 = 3 - 6 + 1; //-4
let num4 = (3 - 3) * (2 + 1); //0


// CHALLENGE
function message(customHour = null) {


  //IF customHour === ?
  // customHour = null            // false
  // customHour = false           // false
  // customHour = ""              // false
  // customHour = "something"     // true
  // customHour = 3               // true


  //1. Initialize variables :
  let hour    = false; //
  let output  = "";    //empty string


  //2. IF "customHour" HAVE a value, use the value of "customHour"
  if(customHour) {
    hour = customHour;
  }

  //ELSE → "customHour" DO NOT have a value, use this :
  else {
    let date = new Date();
    hour = date.getHours(); //show(hour);
  }


  //3. CONDITIONS
  if(hour < 8) {
    output = "What are you doing that early?";
  }
  if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  if(hour >= 21) {
    output = "Good night!";
  }


  //4. OUTPUT
  show(output, "Hour message");


}

// message(); //empty argument = function will use JS hour
// message(9); //with an argument, function will use this value
// message(12);
// message(15);
// message(18);
// message(21);



/* ELSE IF STATEMENT
------------------------------------*/
let numb = 15;
let output = ""; // GLOBAL SCOPE


// We start with an if statement
if(numb > 15) {
  output = "FALSE 1";
}
else if(numb >= 15) {
  output = "TRUE 1";
}
else if(numb === "15") {
  output = "FALSE 2";
}
else if(numb === 15) {
  output = "TRUE 2";
}
else {
  output = "NOTHING IS TRUE MATE";
}

// show(output);


// CHALLENGE
function messageBetter(customHour = null) {


  //1. Initialize variables :
  let hour    = false; //
  let output  = "";    //empty string LOCAL SCOPE


  //2. IF "customHour" HAVE a value, use the value of "customHour"
  if(customHour) {
    hour = customHour;
  }

  //ELSE → "customHour" DO NOT have a value, use this :
  else {
    let date = new Date();
    hour = date.getHours(); //show(hour);    
  }


  //3. CONDITIONS
  if(hour < 8) {
    output = "What are you doing that early?";
  }
  else if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  else if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  else if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  else if(hour >= 21 && hour <= 24) {
    output = "Good night!";
  }
  else {
    output = "Not sure what hour you typed 🤔";
  }


  //4. OUTPUT
  show(output, "Hour message");

}

// messageBetter(150);



/* THE BANG OPERATOR (Logical NOT)
------------------------------------*/
let n = 56;
let bool = false;

// show( n != 56 ); // false
// show( ! bool ); // true



/* THE TERNARY OPERATOR
------------------------------------*/
let num5 = 25;

// Instead of this...
if(num5 >= 25) {
  output = "TRUE";
}
else {
  output = "FALSE";
}
// show(output);

// You could do this :
         //CONDITION  //IF TRUE // IF FALSE
output = (num5 >= 25) ? "TRUE Mate" : "FALSE";
// show(output);

output = num5 >= 25;
if(output) {
  show("Yes is true!");
}
// show(output);


/* THE SWITCH STATEMENT
------------------------------------*/
let day = new Date().getDay(); //show(day, "Current day:");

// The switch - "day" is the expression you want to eavaluate
switch(day) {

  case 0:
    output = "Sunday";
  break;

  case 1 :
    output = "Monday";
  break;

  case 2 :
    output = "Tuesday";
  break;

  case 3 :
    output = "Wednesday";
  break;

  case 4 :
    output = "Thursday";
  break;

  case 5 :
    output = "Friday";
  break;

  case 6 :
    output = "Saturday";
  break;

  default:
    output = "Don't know what you're typing...";
  break;

}
show(output);


