/***
 * function ==> block of code ==> can be resuse
 * don't repeat your self
 *
 * functions type => user defined function=> function user write its code
 *
 * =====>user defined function 
 * regular function
 * function fn_Name()
 * {
 *
 *
 * }
 * 
 *
 * call ===>fn_Name()
 *==============================>
    statement function , expression function 
  var result=function add ()
  {
  }

 *   var_Name()

  =====================> Anonomous Function 
  function()
{
    
}

// ===> call back function ===> high order function 
// ==> self invoked function , immediatily invoked function
//===> arrow function ==> es6
============================>
 * ====> Built in function ==> number , string
 */

// function sum()
// {
// var x=10;
// var y=5;
// console.log(x+y);
// }

// sum();

// function sum2()  // non parametarized
// {
// var x=13;
// var y=51;
// console.log(x+y);
// }
//  sum2()

// function add(x, y) {
//   //
//   // y=0
//   if (x == undefined) {
//     x = 0;
//   }
//   if (y == undefined) {
//     y = 0;
//   }

//   console.log(x); //3
//   console.log(y); // unde
//   console.log(x + y); //3+ undefined =NAN
// }
//  add(2,3)
 // undefined + undefined =NAN=> Not A Number
//  add(3)
// function add(x, y) {
//   //
//  x=x||3
//  y=y||4

//   console.log(x); //3
//   console.log(y); // unde
//   console.log(x + y); //3+ undefined =NAN
// }

//  add()

// function add(x=0, y=0,...w) { // ES6

//   console.log(x); 

  
//   console.log(y); 
//     console.log(arguments);
//   console.log("summmation",x + y); 
// }

//  add()
//   console.log("*********************");
 
//  add(1,2) //x=1 y=2
//  console.log("*********************");
 
//  add(1,2,4) 
//   console.log("*********************");
 
//  add(1,2,4,9)


// function add(x,y)
// {
//  return (x+y);
// }

// var total=add(3,4);
// console.log(total);
// console.log(add(3,4));

// console.log(add);


//************************* Function Expression  */

// var result = function add(x,y)
// {
//     console.log(x);
//     console.log(y);
    
//  return x+y;
// //  return x;
// }
// var result = function add(x,y)
// {
//     console.log(x);
//     console.log(y);
    
// //  return x+y;
// //  return x;
// }

// console.log(result);
// console.log("***********************");

// console.log(result(1,2));


// function()
// {

// }
// ====================> Call Back Function 

// function test ()
// {
//     console.log("hello");
// }
// function add( fun1,y)
// {
//     console.log(fun1); 
//     // fun1(); 
//     console.log(y);
// }
// console.log(add(test,4));
// function hello ()
// {
//     console.log("hello");
    
// };
// function test(x,y)
// {
//     x() // hello()
//     y() // hello()
//     return "test"
    
// }
// // console.log(test);
// console.log(test(hello,hello));   // test

// Correct way: pass a function as a parameter
// function allRules(FUN1, FUN2) {
//     console.log(FUN1);
    
//     FUN2()
//   console.log("all rules");

// }


// allRules( function (){console.log("team1");},function (){ console.log("team2");})



// (function (){console.log("team1");})(); // self invoked function

/** string api ==>> methods used with string
 * length ==> str.length
 */     // index => 0
// var text="Hello summer Training";

// for (var i=0; i<text.length ; i++) {
//    console.log(text[i]);
   
    
// }
// console.log(text.length);

// console.log(text.charAt(1)); // position of character 
// console.log(text.charAt(text.length-1)); // position of character 
// console.log(text.at(3));
// console.log(text.charCodeAt(1));

// console.log(text.indexOf('l'));
// console.log(text.lastIndexOf('i'));


/**
 * - slice(strat , end)
- subString(strat , end)
- subStr(strat , end)
 */

// console.log(text.slice(-9,-1));


var test="Hello";// olleh
// var strat=test.length; //5 ==>
// var newText="";  // undefined 
// for (strat;strat>0;strat--)
    
// {
// //   newText= newText+test[strat-1]; // concat 
  
//  newText= newText.concat(test[strat-1]) 
// //   console.log(newText);
  
// }
//   console.log(newText);

// console.log(test.toUpperCase()
// );
// console.log(test.toLowerCase()
// );


// console.log(test.includes("z"));
var text="      Hello summer Training     ";

// console.log(text.substring(0,3));
// console.log(text.substring(-9,-3));
// console.log(text.substr(1,5));

// console.log(text.startsWith("z"));
// console.log(text.endsWith("g"));

// var x="shhello sh";
// console.log(typeof(x.toString()));

// console.log(text);
// console.log(text.trim());
// console.log(text.trimEnd());           
// console.log(text.trimStart());

// console.log(x.padStart(10,"*"));
// console.log(x);
// console.log(x.padEnd(15,'*'));
// console.log(x.repeat(3));
// console.log(x.replace('sh',"iti"));
// console.log(x.replaceAll('sh',"iti"));

// console.log(x.split(" "));



//==========  array api ==> methods with array
  // index => 0 length ==> count elements in arrray 
var arr=["vjh",1,true,3>4,function x(params) {
    // console.log("array");
    return "array"
    
},[1,2,3] ]


// length 
// console.log(arr.length);

// console.log(arr);
// console.log(arr[4]());
// ;

// arr.push("iti")
// arr.unshift("iti")
// console.log(arr);

// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);


// for (let index = 0; index < arr.length; index++) {
//    console.log("index",index);
//    console.log("value",arr[index]);
   
    
// }

// console.log(arr.reverse());
var arr1=[1,2,"sdjsa","sjfdhfajf"]
var arr2=["iti","react","test"]
// arr2=arr1;
// arr2.push("summer")
// // arr2=arr1+arr2
// // arr2=arr2.concat(arr1)

// console.log(arr2);
// console.log(arr1);

// console.log(arr2.slice(0,2) // strat end-1 (copy)
// );
// // console.log(arr2.splice(0,2) // strat end-1 (copy)
// // );
// console.log(arr2.splice(0,0) // strat end-1 (copy)
// );

/**
 * splice (strat , number >0)  ==> remove strat , end -1
 */

// console.log(arr2);

// console.log(arr2.splice(1) // strat end-1 (copy)
// );

console.log(arr2.indexOf("iti")
);







