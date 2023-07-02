var animation = document.getElementById("box");
animation.style.webkitAnimationPlayState = "paused";
var stars = document.getElementById("starsContainer");
stars.style.webkitAnimationPlayState = "paused";
var craters = document.getElementById("cratersContainer");
craters.style.webkitAnimationPlayState = "paused";

var trigger = document.getElementById("box");
trigger.addEventListener('click', animationStart);

function animationStart() {
    var animation = document.getElementById("box");
    var divAnimation = document.getElementById("animationContainer");
    var textGoner = document.getElementById("clickMe");
    var stars = document.getElementById("starsContainer");
    var craters = document.getElementById("cratersContainer");
    craters.style.webkitAnimationPlayState = "running";
    stars.style.webkitAnimationPlayState = "running";
    textGoner.style.display = "none";
    divAnimation.style.webkitAnimationPlayState = "running";
    animation.style.webkitAnimationPlayState = "running";
    animation.style.cursor = "default";
}

var tab1 = document.getElementById("tabContainer1");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button1.addEventListener('click', showContent1);
button2.addEventListener('click', showContent2);
button3.addEventListener('click', showContent3);

//Content 1- Heading 1 for the Tab Button 1//
function showContent1() {
    var tab2 = document.getElementById("tabContainer2");
    var tab1 = document.getElementById("tabContainer1");
    var tab3 = document.getElementById("tabContainer3");
    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    button1.style.backgroundColor = "black";
    button2.style.backgroundColor = "#343538";
    button3.style.backgroundColor = "#343538";
}

//Content 2- Heading 2 for the Tab Button 2//
function showContent2() {
    var tab2 = document.getElementById("tabContainer2");
    var tab1 = document.getElementById("tabContainer1");
    var tab3 = document.getElementById("tabContainer3");
    tab3.style.display = "none"
    tab1.style.display = "none";
    tab2.style.display = "block";
    button1.style.backgroundColor = "#343538";
    button2.style.backgroundColor = "black";
    button3.style.backgroundColor = "#343538";

}

//Content 3- Heading 3 for the Tab Button 3//
function showContent3() {
    var tab2 = document.getElementById("tabContainer2");
    var tab1 = document.getElementById("tabContainer1");
    var tab3 = document.getElementById("tabContainer3");
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "block";
    button1.style.backgroundColor = "#343538";
    button2.style.backgroundColor = "#343538";
    button3.style.backgroundColor = "black";

}