// AJAX

var container = document.getElementById("container");
function createUserCard(id, name, email, comanyName) {
  var card = document.createElement("div");
//   card.className = "card";
  card.innerHTML = `
        <h2>${id}</h2>
        <p>ID: ${name}</p>
        <p>Email: ${email}</p>
        <p>Company: ${comanyName}</p>
    `;
  container.appendChild(card);
}

var xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("get", "https://jsonplaceholder.typicode.com/users");
xhr.send();
xhr.onreadystatechange = function () {
  // console.log(xhr.readyState);
  // console.log(xhr.status);

  if (xhr.readyState == 4) {
    // 1,2,3
    if (xhr.status == 200) {
      // 100 ,200 ,300
      // console.log(typeof(xhr.response)); // string
      var users = JSON.parse(xhr.response); // js object
    //   console.log(users);
      // console.log(JSON.stringify(users));
      // console.log(typeof(users));

      // users.forEach(user => {
      //     console.log(user.id);
      //     console.log(user.name);
      //     console.log(user.email);
      //     console.log(user.company.name);
      //     console.log("*******************");

      // });

      if (users.lenghth > 0) {
        users.forEach((user) => {
          createUserCard(user.id, user.name, user.email, user.company.name);
        });
      }
    }
  }
};
