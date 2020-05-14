<?php
/* COMMENTS
----------------------------------*/
// Single line comment
# Single line comment
/*
Multi
line
comments
*/



/* VARIABLES: use the $ sign
----------------------------------*/
$num = 4;
$str = "String";
$bool = true;
$arr = [1,2,3,4];
$void = null;



/* ARRAYS
----------------------------------*/
$arr = [1,2,3,"String",0,[1,2,3],null]; // like in JS
$arr2 = array(1,2,3,"String",false,null);

// echo $arr[3]; //shows the 3rd index
// print $arr[3]; //idem
// print_r($arr);
// show($arr);

array_push($arr, "bob");
array_pop($arr);
array_shift($arr);

//Pushing somthing at the end :
$arr[] = "Something at the end..."; // show($arr);
$arr[2] = 33;  
// show($arr);

//Multidimensional array
$website_data = [
  'global-title'  => "This is my first php website",
  'keywords'      => "php,dev,bob",
  'author'        => "Sorin",
  'pages'         => [
    'home' => [
      'title' => "Welcome to my humble abode",
      'menu'  => "Home"
    ],
    'work' => [
      'title' => "This is my work",
      'menu'  => "Work"
    ],
    'contact' => [
      'title' => "Say Hello !",
      'menu'  => "Contact"
    ]
  ]

];

// show( $website_data['pages']['work']['title'] );

$pages = $website_data['pages'];//show($pages);


// show($pages['work']['title']);




/* FUNCTIONS
----------------------------------*/
function show($arr) {

  echo '<pre>';
  print_r($arr);
  echo '</pre>';

}

//Return area in m2
function calculate_surface($width = 0, $length = 0) {
  
  // This will be shown directly when you call the function
  // echo $width * $length;
  // show($width * $length);

  // This will return the result but not echoing
  return $width * $length;

}
$calc = calculate_surface(24, 24); // show($calc);


//A function uses a local "scope".
//We have to use a specia l keyword in order to use a global scope variable
function site($key = '', $page_key = '', $title = true) {
  
  global $website_data;

  // if( $page_key ) {
  // if( !empty($page_key) ) {
  if($page_key != '') {
    $page_str = ($title) ? 'title' : 'menu';
    return $website_data['pages'][$page_key][$page_str];
  }

  return $website_data[$key];

}

// show( site('author') );
show( site('', 'contact', false) );




/* CONDITIONS
----------------------------------*/
// $n = 10;
// if($n > 5) {
//   show("True!");
// }

// if($n > 5 && $n > 10) {
//   show("False");
// }

// if($n > 5 || $n > 10) {
//   show("True");
// }
// else {
//   show("False");
// }

// $hour = 9;

// if($hour < 7) {
//   show("So early ?");
// }
// elseif($hour >= 7 && $hour <= 12) {
//   show("Good morning");
// }
// //elseif
// //elseif
// else {
//   show("Not sure what message I can give you...");
// }





/* LOOPS
----------------------------------*/
// $n = 10;

// //Show numbers from 1 to 10. Same as JS !
// // for($i = 1; $i <= $n; $i++) {
// //   show($i);
// // }

// //The best for array is to use foreach() loop
// // A foreach could return only values
// foreach($website_data as $val) {
//   show($val);
// }

// // ...OR the pair key/value
// foreach($arr as $key => $val) {
//   show($key);
//   show($val);
// }