/* DOM = Document Object Model
-------------------------------*/
// Target the head title DOM object
// const title = document.querySelector('title');

// //Display the object
// console.log(title);

// //Display the inner content of the object
// console.log(title.innerHTML);




// //Grab the object and store it
// const h1 = document.querySelector('h1');

// h1.innerHTML = "I just changed the h1 content with JS !!! Youpiii";

// //ADD or REMOVE A CLASS
// h1.classList.add('bob');
// h1.classList.remove('main-header');

// // SET/GET Element Attributes
// h1.setAttribute('id', 'main-header');
// console.log( h1.getAttribute('id') );

// h1.removeAttribute('id');
// console.log(h1);


// // GET ELEMENT BY ID ("my-console" is the ID of my element)
// const myConsole = document.getElementById('my-console');

// // The same element with querySelector
// // const myConsole = document.querySelector('#my-console');

// myConsole.innerHTML = "let bob = 3;";


// // querySelector will target only the first item who match the query
// let bob = document.querySelector('.bob'); // console.log(bob);


// //console.log(myClass);

// document.querySelector("html").innerHTML = "";


const mycode = document.querySelector('#mycode'); //console.log(mycode);

// mycode.innerHTML  = '';
// mycode.innerHTML += '<figure>';
// mycode.innerHTML += '<img src="https://cff2.earth.com/uploads/2016/09/08101343/giant-panda-bear_1big_stock1.jpg">';
// mycode.innerHTML += '</figure>';

let caption = "This is a panda bear";

mycode.innerHTML = `
<figure>
  <img src="https://cff2.earth.com/uploads/2016/09/08101343/giant-panda-bear_1big_stock1.jpg" style="max-width: 400px;">
  <figcaption>${caption}</figcaption>
</figure>
`;

console.log(mycode);






