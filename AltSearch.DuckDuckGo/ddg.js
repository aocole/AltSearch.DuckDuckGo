(function () {

    // List of search engines used in the search
    var searchEngines = [
        // {"Name": "", "Url": ""}
        {"Name": "Google",    "Url": "https://www.google.com/#q="},
        {"Name": "Bing",      "Url": "https://www.bing.com/search?q="},
        {"Name": "Yahoo!",    "Url": "https://search.yahoo.com/search?p="},
        {"Name": "Ask",       "Url": "http://www.ask.com/web?q="},
        {"Name": "Wikipedia", "Url": "https://en.wikipedia.org/w/index.php?search="}
    ];

    // What element should we inject in to?
    var where = document.getElementsByClassName('results--sidebar')[0];

    // get the query string parameter
    function getQueryString(param) {
        param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + param + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null){
            return "";
        }
        return results[1];
    }

    // generate the search link
    function generateSearchLink(searchEngineName, searchEngineUrl) {
        var divTag = document.createElement("div");
        divTag.className = "search_suggestion";
        divTag.innerHTML = "<a href='" + searchEngineUrl + getQueryString("q") + "'>search on " + searchEngineName + "</a>";
        where.appendChild(divTag); // inject it into the container.
    }

    (function(){

        // First we create the header
        var divTag = document.createElement("div");
        divTag.className = "spacer_bottom_7"; // class predefined in the DDG styles
        divTag.innerHTML = "Alternate Searches:";
        where.appendChild(divTag); // inject it into the container

        // Then we loop through all the search engines and inject their links into DuckDuckGo.
        for(var i in searchEngines){
            var seName = searchEngines[i].Name;
            var seUrl = searchEngines[i].Url;
            generateSearchLink(seName, seUrl);
        }
    })();
})();
