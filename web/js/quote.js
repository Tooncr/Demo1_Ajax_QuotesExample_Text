var xhr = new XMLHttpRequest();
//0
function getNewQuote () {
    xhr.open("GET", "ManageQuoteServlet",true);
    // 1
    xhr.onreadystatechange = getData;
    xhr.send(null);
    //2
    //3
    //4
}

function getData () {
    if (xhr.status == 200) {
        if (xhr.readyState == 4) {
            var div = document.getElementById("quote"); //<div>
            var p = document.createElement("p"); //<p></p>
            var text = document.createTextNode(xhr.responseText); //xxx
            p.appendChild(text); //<p>xxx</p>
            div.appendChild(p); //<div><p>xxx</p></div>
        }
    }
}