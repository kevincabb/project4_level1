//get inject element
//injecting under the navbar
let inject = document.getElementById('inject');


//the url that should load on page load
window.onload = loadHTML("../pages/home.html");


function loadHTML(url) {
    //XML HTTP-REQUEST

    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            console.log(myArr);
            if (url === "../pages/home.html") {
                homePageLoad(myArr);
            }
        };
        //Opening the connection
        xmlhttp.open("GET", url, true);
        //Sending the request
        xmlhttp.send();
    }
}


function homePageLoad(info){
    inject.innerHTML = info;
}
