function onSession(id, username) {
  localStorage.setItem("idU", id);
  localStorage.setItem("usernameU", username);
}

function singin(url) {
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var admins = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      access = false;
      for (i = 0; i < admins.length; i++) {
        if (admins[i].email == email && admins[i].password == password) {
          access = true;
          onSession();
        }
      }
      if (access) {
        alert("succes");
        location.replace("index.html");
      } else {
        alert("error");
      }
    } else {
      alert("server problem");
    }
  };
  xhr.send();
}

function singup(url) {
  var data = {};
  data.val = document.getElementById("val").value;
  var json = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var responses = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      alert(responses.message);
    } else {
      alert(responses.message);
    }
  };
  xhr.send(json);
}

function getUser() {
  var id = localStorage.getItem("idU");

  // Post a user
  var url3 = "http://127.0.0.1:3000/users/" + id;
  var xhr3 = new XMLHttpRequest();
  xhr3.open("GET", url3, true);

  xhr3.onload = function () {
    var admins = JSON.parse(xhr3.responseText);
    if (xhr3.readyState == 4 && xhr3.status == "200") {
      document.getElementById("username").value = admins.username;
      document.getElementById("phone").value = admins.phone;
      document.getElementById("email").value = admins.email;
    }
  };

  xhr3.send(null);
}