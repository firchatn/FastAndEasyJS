// function add
function add(url) {
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
