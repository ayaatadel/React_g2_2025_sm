/**
 * DOM => Document Object Model
 *
 *  document ===> properties , methods
 *
 * html ===> root element
 * 
 * 1-select element
2- change content of element
3-change style
4- deal with attributes
5-create new element 
===============
Event ==> create event , use(fire)

 */

/**
 * Dom => object (document)==> method
 * select element ==> id Tagname class
 *
 * getElementById ("id") ==> return (html element || null)
 * getElementsByClassName ("class") ==> return (html collection ["",""] ||[] empty collection)
 * getElementsByTagName ("tagName") ==> return (html collection ["",""] ||[] empty collection)
 * getElementsByquerySelectorAll(".container #pg2")) ==> return (Node list ["",""] ||[] emptylist)
 * getElementsByquerySelector(".container #pg2")) ==> return (html element || null)
 */
//============================================== Methods ===============
// console.log(document.getElementById("pg1"));
// console.log(document.getElementsByClassName("container"));
// console.log(document.getElementsByClassName("container")[1]);
// console.log(document.getElementsByTagName("span"));
// console.log(document.querySelector(".container #pg1"));
// // console.log(document.querySelector("#pg1"));
// console.log(document.querySelector(".container #pg2"));
// console.log(document.querySelectorAll(".container")[0]);

// var allContainers = document.querySelectorAll(".container");
// var allContainers = document.getElementsByClassName("container");


// for (let index = 0; index < allContainers.length; index++) {
// console.log(allContainers[index]);



//============================================== properties ===============

// console.log(document);
// console.log(document.body);
// console.log(document.head);
// console.log(document.images);
// console.log(document.links);
// console.log(document.title);

// id ==> select
// pg1.style.color="black";
//================================= change
/**
 * change content of element  <p> Hello </p>
 * pg1.innerText = "Hello World";  ==> content (text)
 * pg1.innerHTML = "<h2> Hello </h2>"; ==> content (html)
 */
// var first_paragraph = document.getElementById("pg1");
// pg1.innerText = "Hello World";
// pg1.innerHTML = "<h2> Hello </h2>";
// first_paragraph.innerText="Hello"`

// pg1.innerHTML=`
// <h2>Product : 1</h2>
// <img src="image.jpg" alt="Image" width="100" height="100">
// <p>Some text here Some text here Some text here Some text here Some text here</p>
// <span>
// <a href="#">Read More .........</a>
// </span>`



/**
 * Change style
 * varName.style.proprity="value"
 * varName.style.cssText=`all styles`
 */

// var btn1=document.getElementById("btn1")
// // btn1.style.backgroundColor="red";
// // btn1.style.color="white";
// // btn1.style.border="none";
// // btn1.style.borderRadius="5px";
// // btn1.style.cursor="pointer";

// btn1.style.cssText=` padding: 10px;
//     background-color: rgb(73, 8, 8);
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;`
// /**
//  * classes ==> classList ==> add (add class)
//  * classes ==> classList ==> remove (remove class)
//  * classes ==> classList ==> toggle ==> exist => remove , not exist ==> add
//  */

// var pg1=document.getElementById("pg1");
// pg1.classList.add("test", "newClass", "newClass2");
//     // console.log(document.getElementById("pg1").classList);
//     // console.log(document.getElementById("pg2"));

// pg1.classList.remove("newClass2")
// pg1.classList.remove("newClass")
// // pg1.classList.remove("test")
// pg1.classList.toggle("test")


// /**
//  * Attributes
//  *  add ==> attribute
//  *  remove ==> attribute
//  *  update ==> attribute
//  *  get ==> attribute  || exist => value || not exist=> null
//  */

// // console.log(pg1);
// // console.log(pg1.getAttribute("id"));

// // console.log(pg1.getAttribute("class"));

// console.log(document.images);

// // // update value
// // // attribute already exsist ==> change value (update)
// // document.images[0].src="imgs/h1_hero1.png"
// // // console.log(document.images[0].src);

// // // attribute not exsist ==>add atrribute
// // document.images[1].src="imgs/h1_hero1.png"

// // // ================
// // // get attribute
// // console.log(document.images[0].src);;

// // set attribute ==> exist => update || not exist => add
// document.images[0].setAttribute("src", "imgs/h1_hero1.png");
// document.images[1].setAttribute("src", "imgs/h1_hero1.png");

// // get atrribute

// console.log(document.images[0].getAttribute("src"))
// console.log(document.images[0].getAttribute("alt"))
// // remove
// document.images[1].removeAttribute("alt")
// // toggle ==> EXIST => REMOVE , NOT EXIST => ADD
// document.images[1].toggleAttribute("alt")
//                     // ("attribute" , "value")
// document.images[1].setAttribute("alt", "img2");
// // check if attribute exists
// console.log(document.images[1].hasAttribute("alt"));
// console.log(document.images[1].hasAttribute("title"));
//==========================================
// if(document.getElementById("pg11"))
// {
//     console.log("exist");
    
// }else{
//     console.log("not exist");
// }


//==========================
/**
 * Event ==> create event , use(fire)
 * add attribute on element 
 * onClick
 * onMouseEnter
 * onMouseLeave
 * onDoubleclick
 */
// var btn=document.getElementById("btn1");

// if (btn.hasAttribute('class')) {
//     btn.classList.add("btn");
    
// }
// var images=document.images;  //  collection

// var header=document.querySelector(".header h1");
// // console.log(header);

//       function execute() {
    
//         header.innerText="Hello Summer Training Track";

//           for (let index = 0; index < images.length; index++) {
//        images[index].setAttribute('src', 'imgs/h1_hero1.png');
//       }

//       }


//       var text=document.querySelector('.chgColor');
//     //   console.log(text);
      

// var changeColor=function(){
//   text.style.color="red";
// };
