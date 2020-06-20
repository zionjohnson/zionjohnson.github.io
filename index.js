const Http = new XMLHttpRequest();
const url = "http://localhost:5500/";

function swingTassle() {
  Http.open("GET", url);
  Http.send();
}

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};
