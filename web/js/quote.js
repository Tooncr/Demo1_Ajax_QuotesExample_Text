var xhr = new XMLHttpRequest();

function getNewQuote () {
    xhr.open("GET", "ManageQuoteServlet", true);
    xhr.onreadystatechange = getData;
    xhr.send(null);
}

function getData () {
    if (xhr.status == 200) {
        if (xhr.readyState == 4) {
            var div = document.getElementById("quote");
            var p = document.createElement("p");
            var text = document.createTextNode(xhr.responseText);
            p.appendChild(text);
            div.appendChild(p);
        }
    }
}