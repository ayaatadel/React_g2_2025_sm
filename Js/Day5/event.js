
// // ===============>Event

// /**
//  *  element ==> html ==> onEvent =function()
//  * select Element ==> js ==> 
//  * 
//  */
// var btn=document.getElementById("btn");

// // function clickMe(){
// //  console.log("button clicked");
 
// // }

// // // btn.onclick=clickMe;
// // btn.onclick= function(){
// //     console.log("button clicked");
    
// // }
// // btn.onclick= function(){
// //     console.log("second");
    
// // }
// // btn.onclick= function(){
// //     console.log("third");
    
// // }

// // btn.addEventListener("click",function(){
// //     console.log("first");
    
// // })
// // btn.addEventListener("click",function(){
// //     console.log("second");
    
// // })
// // btn.addEventListener("click",function(){
// //     console.log("third");

// // })



// var inputField = document.querySelector("#inputField");


// var btn=document.getElementById("btn")

// var output = document.getElementById("output");
// // btn.addEventListener("click", function() {

// // // console.log(inputField.value);


// // })
//  var span = document.getElementById("hidden");
// var value;
// // inputField.addEventListener("input", function() {
// // value = inputField.value;
// // if(value.length<3)
// // {
// //    span.style.display = "block";
// //       inputField.style.borderColor = "red";


// // }else{
// //    span.style.display = "none";
// //    inputField.style.borderColor = "green";
// //    output.textContent = value;
// // }

// // })
 
// // inputField.addEventListener("blur", function() {
// // inputField.style.borderColor = "yellow";


// // })
// // inputField.addEventListener("focus", function() {
// // inputField.style.borderColor = "blue";


// // })
 

// inputField.addEventListener("input", function() {
// value = inputField.value;
// if(value.length<3)
// {
//    span.style.display = "block";
//       inputField.style.borderColor = "red";


// }else{
//    span.style.display = "none";
//    inputField.style.borderColor = "green";
//    output.textContent = value;
// }

// })


// // //==================
// // var userName=document.getElementById("name");
// // console.log(userName);
// // var userAge=document.getElementById("age");

// // var tbody=document.getElementsByTagName("tbody")[0];

// // var userNameValue;
// // var userAgeValue;
// // var counter=0;
// // var btn=document.getElementById("btn");

// // btn.addEventListener('click',()=>{



// //     var tr=document.createElement("tr");

// //     var tdId=document.createElement("td");
// //     tdId.textContent=++counter;
// //     var tdName=document.createElement("td");
// //     tdName.class="std_name"
// //          tdName.textContent=userName.value;
    
// //     var tdAge=document.createElement("td");
// //          tdAge.textContent=userAge.value;

// //     tr.appendChild(tdId);
// //     tr.appendChild(tdName);
// //     tr.appendChild(tdAge);
// //     tbody.appendChild(tr);
// // })


// // =============
// var btn=document.getElementById("btn");

// btn.addEventListener('click',function(e){

//     e.preventDefault();
//     console.log("button clicked");
   
// });

// // text.addEventListener('click',function(e){
// //    console.log(e);
// // });

// // function test(e)
// // {
// //     console.log(e.target);
    
// // }

// // test({target:"text"})


// // ====
// // first.addEventListener("click", function(e) {
// //     e.stopPropagation(); // Prevents the event from bubbling up to parent elements
// //    console.log("first");
   
// // });
// // second.addEventListener("click", function(e) {
// // //    e.stopPropagation(); // Prevents the event from bubbling up to parent elements
// //    console.log("second");
   
// // });
// // third.addEventListener("click", function(e) {
// // //    e.stopPropagation(); // Prevents the event from bubbling up to parent elements
// //    console.log("third");
   
// // });


