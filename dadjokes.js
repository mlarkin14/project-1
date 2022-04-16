var dadjokeoftheday = document.getElementById("dadjokeoftheday");
var fetchButton = document.getElementById("fetch-button");

var APIcalled = false;

function getApi() {
  //get dadjoke from API
  if (APIcalled) {
    return;
  }

  APIcalled = true;

  fetch("https://icanhazdadjoke.com", {
    headers: { Accept: "application/json" },
  }).then(function (response) {
    response.json().then(function (data) {
      console.log(data);

      //create H3 element
      var showDadJoke = document.createElement("h3");
      //set the text of the h3 element and p element
      showDadJoke.innerText = data.joke;
      //append the dynamically generated html to the page to the div associated with the id="dadjokeoftheday"
      dadjokeoftheday.append(showDadJoke);
    });
  });
}

fetchButton.addEventListener("click", getApi);
