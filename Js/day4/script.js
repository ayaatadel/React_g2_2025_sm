// generate element html 

// var  container =document.getElementById("parent");
// container.innerHTML =`
// <p class="text"> Hello Creating Elements </p>
// <button id="btn1">Click Me</button>
// `;

// document.getElementsByClassName('text')[0].style.cssText=` max-width: 800px;
//   margin: 20px auto;
//   padding: 20px;
//  background-color: #d4cdcd;`;
// btn1.style.cssText=` padding: 10px;
//     background-color: rgb(73, 8, 8);
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;`


var  container =document.getElementById("parent");
// var pg=document.createElement("p");
// pg.innerText="Hello Creating Elements";
// pg.classList.add("container");


// var btn=document.createElement("button");
// btn.innerText="Click Me";
// btn.id="btn1";


// container.appendChild(pg);
// container.appendChild(btn);
var toggle=false;
function addElements() {
  if(!toggle) {
      var pg=document.createElement("p");
      pg.innerText="Hello Creating Elements";
      pg.classList.add("container");

      var btn=document.createElement("button");
      btn.innerText="Click Me";
      btn.id="btn1";
      var img=document.createElement("img");
      img.setAttribute('src',"imgs/h1_hero1.png");
      img.style.cssText=`width: 100px; height: 100px;`
      container.appendChild(img);
      container.appendChild(pg);
      container.appendChild(btn);
       toggle = true;
      exist();
  }else{
    container.innerHTML = '';
    toggle = false;
  }

}
