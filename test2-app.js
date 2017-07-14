function getArticles() {
    var location = "chicago";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b374b0d5d62040c9a7db208eba9a3654&q=" + location + "&begin_date=20170701";

    $.ajax({
        url: queryURL,
        method: "GET",
        "async": true,
        "crossDomain": true
    }).done(function(result) {
        console.log(result);
        console.log("URL: " + queryURL);
        for (var i = 0; i < 5; i++) {
            var headline = result.response.docs[i].headline.main;
            var snippet = result.response.docs[i].snippet;
            var thumbnailURL = result.response.docs[i].multimedia[2].url;
            var url = result.response.docs[i].web_url;
            console.log("headline: " + headline);
            console.log("snippet: " + snippet);
            console.log("thumbnail: " + thumbnailURL);
            console.log("url: " + url);

            var newDiv = $("<div>");
            newDiv.append("<img src='https://static01.nyt.com/" + thumbnailURL + "'></img><a href='" + url + "' target='_blank'><h3>" + headline + "</h3></a><p>" + snippet + "</p>");

            $("#news").append(newDiv);
        }
    }).fail(function(err) {
  throw err;
});
}

// var location = "chicago";
getArticles();