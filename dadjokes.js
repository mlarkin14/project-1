var repoList = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");

function getApi() {
  var requestUrl = "GET https://icanhazdadjoke.com";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var dadjoke = document.createElement("h3");
        dadjoke.textContent = data[i].html_url;
        dadjokeoftheday.appendChild(dadjoke);
      }
    });
  alert("we did it!");
}
fetchButton.addEventListener("click", getApi);
