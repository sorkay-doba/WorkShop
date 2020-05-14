// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}


// →→→ HELPER FUNCTION → CREATE ANY ELEMENT
function make(selector) {
  return document.createElement(selector);
}


// Target element → classic approach
// const main = document.querySelector('main'); console.log(main);


// Target element → awesome approach
const main = $('main'); // console.log($('main'));


// →→→ Manage attributes
$('h1').setAttribute('id', 'main-title');
$('p').setAttribute('class', 'row');
$('#p4').removeAttribute('class');
$('html').setAttribute('lang', 'ar');


// →→→ MANAGE CLASS ATTRIBUTE
$('body').classList.add('menu-is-open', 'bob'); // add 2 classes to the body



// →→→ CREATE ELEMENT [Classic approach]
const p1 = make('p');
p1.setAttribute('class', 'row');
p1.innerHTML = "Sunt un text in noul paragraf."

const span = make('span');
span.textContent = "Info: ";

// main.append(p1); // will add the element at the end of the main
p1.prepend(span); // will add the element at the begining of the p1

//INSERT BEFORE - 2 arguments: what and the reference
main.insertBefore(p1, $('#p2'));

// Remove an element
// $('main').remove();


// →→→ ADD TEXT CONTENT
p1.textContent = '<span>Info: </span>A simple text.';


// →→→ ADD HTML CONTENT
p1.innerHTML = '<span class="success">Info: </span>A complex content with tags.';



/* CREATE ADMIN MESSAGE
--------------------------------------*/
let div1 = make('div');
let div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');

div2.innerHTML = "Some admin text.";

div1.prepend(div2);

// $('body').insertBefore(div1, $('script'));


// →→→ DO STYLES
$('#p2').style.color = '#f00';
$('#p3').style.backgroundColor = '#ccc';
$('#p4').style.cssText = 'background-color: #fc0; color: #fff;';





