//  comment one line
/**   comment multi line  */  
console.log("welcom in Js wolrd");

// var variableNameJs = "assign"; decleration
/**
 * var ==> redeclare , reasign
 */
// var x=5;
// console.log( typeof(x));
//  x="hello"; // reasign
// console.log( typeof(x));

// var x="iti summer training"; // redeclare
// var x=true;
// console.log( typeof(x));
// var x={};
// console.log( typeof(x));
// var x=[];
// console.log( typeof(x));
// var x=null;
// console.log( typeof(x));

// var data;



// === parsing transfer from data type to another data type
// var x="10"; // string
// var y =Number(x)
// console.log(typeof(y));
// // ============ operator
// x=5;
// y=10;
// console.log(x+y);  //15
// console.log(x-y);  //-
// console.log(x*y); // 50
// console.log(x/y); // .5
// console.log(x%y); //0

// x=10;
// y="iti"
// console.log(x+y);


// == & ||  ! not ==> logical operator 

 
// & ==> true - true (true)
// & ==> true - false (false)
// || ==> true - false (true)
// || ==> false - false (false)
// ! ==>true => false
// ! ==>false => true


// x=5 
// console.log(x&&true);
// console.log(x& 0);  ==> 0
// console.log(5 || 0);
// console.log(x || 0);
// console.log(0 || 5); 

// post , pre (increment  , decrement)
// x++ , ++x 
// x=10
// x++    // post increment
// console.log(x); //==>11
// ++x // pre increment
// console.log(x); //==>12
// x--;
// console.log(x); //9
// --x ;
// console.log(x); //8

// console.log(x--);//10   ==> 9
// console.log(--x);//9 -> 8 => 8


// comparison operator (> , < , >= , <= , ==, ===,!= ,  !==)


//=========== control   (if)
// if , if else , nested if 
// var x=10; var y=15;
// if(x=11)
// {
//     console.log(x);//
    
// }

// var x=10; var y=15;
// // if(x>y)
// // {
// //     console.log(x);
    
// // }else{
// //     console.log("y is : " ,y);
    
// // }

// if(x>y)
// {
//     // console.log("x is ${x} ");
//     console.log(y);
    
    
// }else if(x<y)
// {
//    console.log(`x is ${x} `);
   
// }
// else{
//     console.log("EQuls");
    
// }



// var grade=75;
// switch (true) {
//     case  (grade>85 && grade <=100 ):
//         console.log("Grade A");
        
//         break;
//     case (grade>75 && grade <=85 ):
//         console.log("Grade B");
        
//         break;
//     case   (grade>65 && grade <=75 ):
//         console.log("Grade c");
        
//         break;
//     case (grade>=50 && grade <65 ):
//         console.log("Grade D");
        
//         break;

//     default:
//         console.log("sooorry you fail !! ");
        
//         break;
// }

// var total_days = 1000;
// var n_year = Math.floor(total_days / 365);
// var n_month = Math.floor((total_days % 365) / 30);
// var n_day = (total_days % 365) % 30;

// console.log(n_year);
// console.log(n_month);
// console.log(n_day);

// ternary operator  (condition)?true:fale
// x=5 x>5 
var x=5;
(x>5)?console.log("grater than 5"):(x==5)?console.log("x=5"):console.log("x < 5");
;

// (x==5)?console.log("hello"):console.log("test");



// var x = 5;
// 



// loop ===> for , while , do-while
// for(start , condition , in,de crement)
// for(var index=0;index<10;index++){
// console.log(index); // 0  1  2 4  5 6 7 8 9

// }

// var index=0

// while(index<10)
// {
// console.log(index);
// index++;
// }
// var index=0
// do{
// console.log(index);  // 
// index++;
// }while(index>10);
// var index=0
// do{
// console.log(index);  // 
// index++;
// }while(index<10);

// ===============
// alert("hello ");

// var value1 =Number(prompt("Enter your value1"));
// var value2 =Number(prompt("Enter your value2"));
// var value1 =+prompt("Enter your value1");
// var value2 =+prompt("Enter your value2");
// // console.log(typeof(value1));
// console.log(value1+value2);


// var value=confirm("Are you sure you want to delete this account");
// // console.log(value);
// (value)?console.log("account deleted successfully"):console.log("canseled");
// ;


document.writeln(`<h1 style='color:red'> Hello summer trainingg track </h1>`)



