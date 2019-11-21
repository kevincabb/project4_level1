
//-----Grab start button and set event listener----//
/*let startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', function (e) {
    loadHTML('../pages/home.html');
});
*/

//-----Function to load and inject different HTML pages----//
function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        console.log('test');
        if (this.readyState == 4 && this.status == 200) {
            //when Injecting HTML, you do't need a JSON.parse
            let myArr = this.responseText;
            //conditional statement to load the proper page items

            if (url == '../pages/home.html') {
                loadMenuPage(myArr);
            }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//-----Function to load Menu page----//
/*
function loadMenuPage(info) {
    inject.innerHTML = info;
}
*/
