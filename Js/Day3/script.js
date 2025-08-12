/**
 * object
 * math
 */


// var x="mohammed"
// var b=23;

// var w="nada";
// var z=27;

var person={  // object => properity (key:value) || methods
    // key: value
    name:"mohammed",
    age:23
}
 // dot notation , practice
console.log(person);

// get values ==> 
    /**
     * get propertity exist ==> value
     * get propertity  not exist ==>  not defined
     */

// console.log(person.name);
// console.log(person.age);
// // console.log(person.address);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["address"]);


// // add value , set value
//    /**
//      * set propertity exist ==> over ride (update)
//      * set propertity  not exist ==>  add
//      */
// person.address="cairo";
// person.age=22;
// person["gender"]="male";

// console.log(person);


// var person={  
//     name:"mohammed",
//     age:23,
//     address:"cairo",
//     gender:"male",
//     display:function(){
//         console.log("person data"); 
//     },
//     color:["red","green","blue"],
//     getlength:function()
//     {
//         return(person.name.length);
        
//     }

// }
// console.log(person.display());
// console.log(person.color[1]);
// console.log(person["color"][1]);


// for(var index=0;index<person.color.length;index++){
//     console.log(person.color[index]);
// }


// person.getlength();

// var products = [
//     {
//         id: 1,
//         name: "Product 1",
//         price: 100
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         price: 200
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         price: 300
//     }
// ];

// for (let index = 0; index < products.length; index++) {

//     console.log(products[index].name);
//     console.log(products[index].price);
    
// }


// for (var index in products) {
//     console.log(index);
    
  
// }
// console.log("********************");

// for (var value of products) {
//     // object
//     console.log(value.price);
//     console.log(value.name);
    
// }
var x=5;
console.log(String(x));
console.log(x.toString());


/** Math object */

// console.log(Math);

// console.log(Math.PI);
// console.log(Math.max(10,50,22));
// console.log(Math.min(10,50,22));
// console.log(Math.pow(4,2));
// console.log(Math.floor(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(Math.random()*10));
console.log(Math.sin(30 * Math.PI / 180));
console.log(Math.cos(30 * Math.PI / 180));
console.log(Math.tan(30 * Math.PI / 180));
// console.log(Math.sin(30));







/**
 * Math
 * ----------------
 * PI
 * -----------------------
 * == round --
 * == floor
 * == ceil
 * == random
 * == sqrt
 * === Positive ==> 1
 * === Negative ==> -1
 * === 0 ==> 0
 * == max
 * == min
 */

// angel -- 90 --->

// console.log(Math.sin((90 * Math.PI) / 180));

// console.log(Math.max(10, 40, 70, 2, 5, 9));
// console.log(Math.min(10, 40, 70, 2, 5, 9));

// console.log(Math.floor(Math.random() * 10));

// console.log(Math.PI);

// var num = 12;

// console.log(num.toFixed(2));

// console.log(Math.floor(Math.random() * 30));