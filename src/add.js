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

function addimage() {
  var i = document.getElementById("i");
  const apikey = "key";
  const client = filestack.init(apikey);
  const options = {
    maxFiles: 20,
    uploadInBackground: false,
    onOpen: () => console.log("opened!"),
    onUploadDone: (res) => (i.value = res.filesUploaded[0].url),
  };
  client.picker(options).open();
}