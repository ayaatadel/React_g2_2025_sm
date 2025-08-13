// AJAX

var container = document.getElementById("container");
function createUserCard(id, name, email, comanyName) {
  var card = document.createElement("div");
    card.className = "card"; 
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
    if (xhr.status == 200) {
      var users = JSON.parse(xhr.response); // js object

      if (users.length > 0) {
        users.forEach((user) => {
          createUserCard(user.id, user.name, user.email, user.company.name);
        });
      }
    }
  }
};
