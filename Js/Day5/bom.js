// /// window


// // === BOM ===> Browser Object Model
// // generate group of objects that make it easy to deal with browser
// // window ==> decleration phase 
// // 
// // aboutPage.close()
// var aboutPage;

// btn_open.addEventListener('click',()=>{
//  aboutPage = open("about.html","","width=500,height=500");
//  aboutPage.focus();
// })
// btn_move_to.addEventListener('click',()=>{
// aboutPage.moveTo(100,100);
// aboutPage.focus();
// })
// btn_move_by.addEventListener('click',()=>{
// // aboutPage.moveBy(100,100);
// aboutPage.moveBy(-50,-50);
// aboutPage.focus();
// })
// btn_resize_by.addEventListener('click',()=>{
// aboutPage.resizeBy(-50,-50);
// aboutPage.focus();
// })
// btn_resize_to.addEventListener('click',()=>{
// aboutPage.resizeTo(300,300);
// aboutPage.focus();
// })

// // console.log(window.history);
// // console.log(window.history.length);
// // console.log(window.history.back());
// // console.log(window.history.forward());

// // console.log(window.navigator);
// // window.navigator.geolocation.getCurrentPosition(function(position) {
// //     console.log(position);
    
// //     console.log('Latitude:', position.coords.latitude);
// //     console.log('Longitude:', position.coords.longitude);
// // });
// // log the current position


// ///////////////////////////
// // function print()
// // {
// //     console.log("first");
// //     second();
// //     setTimeout(() => {
// //     console.log("hello");
    
// // }, 3000);

// //     console.log("third");
    
// // }
// // print();
// // function second()
// // {
// //     console.log("second");
    
// // }


// // console.log(print());


// var container=document.getElementById("container");
//   var img ;

// let interval = setInterval(() => {
//   img = document.createElement("img");
//     img.src ="images/1.png";

//     container.appendChild(img);
// }, 1000);

// // clearInterval(interval);

// setTimeout(()=>{
//     clearInterval(interval);
// }, 10000);