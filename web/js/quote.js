var xhr = new XMLHttpRequest();
// 0
// The request is not initialized.
// After you have created the XMLHttpRequest object, but before you have called the open() method.

function getNewQuote () {
    xhr.open("GET", "ManageQuoteServlet",true);
    // 1
    // The request has been set up.
    // After you have called the open() method, but before you have called send().
    xhr.onreadystatechange = getData;
    // mag NIET getData() zijn
    // want dat wordt het maar 1 keer uitgevoerd
    // en het moet telkens wanneer de readystate van het xhr veranderd worden uitgevoerd
    xhr.send();
    // 2
    // The request has been sent.
    // After you have called send().
}

// 3
// The request is in process.
// After the browser has established a communication with the server, but before the server has completed the response.

// 4
// The request is completed.
// After the request has been completed, and the response data has been completely received from the server.

// callback function
function getData () {
    if (xhr.status == 200) {
        if (xhr.readyState == 4) {
            var quote = xhr.responseText;
            var div = document.getElementById("quote"); // <div id="quote"></div>
            var p = document.createElement("p"); // <p></p>
            var text = document.createTextNode(quote); // "Yes we can!"
            p.appendChild(text); // <p>Yes we can!</p>
            div.appendChild(p); // <div id="quote"><p>Yes we can!</p></div>
        }
    }
}
