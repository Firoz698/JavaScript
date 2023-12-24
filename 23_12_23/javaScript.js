


console.log(window.location)
console.log(location.href)

var MyBom = document.querySelector(".localdiv");

var p1 = MyBom.children[0];
p1.textContent="Location Href =  " +  location.href;

var p2 = MyBom.children[1];
p2.textContent="Location Protocol =  " +  location.protocol;

var p3 = MyBom.children[2];
p3.textContent="Location HostName =  " +  location.hostname;

var p4 = MyBom.children[3];
p4.textContent="Location Port =  " +  location.port;

var p5 = MyBom.children[4];
p5.textContent="Location Pathname =  " + location.pathname;

var buttonId = document.getElementById('ButtonID');

buttonId.addEventListener("click",function(){
    location.assign("https://www.facebook.com/mdfirozali698/");
})