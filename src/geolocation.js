function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML =
        "browser not supported.";
    }
  }
  
  function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    add();
  }