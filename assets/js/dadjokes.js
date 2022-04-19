console.log("this hit my page")
var dadjokeoftheday = document.getElementById("dadjokeoftheday");
var dadBtn = document.getElementById("searchCity");

var APIcalled = false;

function getApi() {
    //get dadjoke from API
    if (APIcalled) {
        return;
    }

    APIcalled = true;

    fetch("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
    }).then(function(response) {
        response.json().then(function(data) {
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

dadBtn.addEventListener("click", getApi);