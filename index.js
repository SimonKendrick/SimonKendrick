var reset = function (event) {
    event.preventDefault();
    aboutPageElement.style.display = "none";
    travelPageElement.style.display = "none";
    hackingPageElement.style.display = "none";
    landingPageElement.style.display = "none";
    contentElement.style.backgroundImage = "url()";
    contentElement.style.backgroundImage = "linear-gradient(to bottom, rgb(0 0 255 / 50%), rgb(255 255 0 / 50%))";
};
var handleAboutClick = function (event) {
    reset(event);
    aboutPageElement.style.display = "flex";
    console.log(aboutAnchorElement);
};
var handleTravelClick = function (event) {
    reset(event);
    travelPageElement.style.display = "flex";
    console.log(aboutAnchorElement);
};
var handleHackingClick = function (event) {
    reset(event);
    event.preventDefault();
    hackingPageElement.style.display = "flex";
    console.log(aboutAnchorElement);
};
var aboutAnchorElement = document.getElementsByName("about_anchor")[0];
aboutAnchorElement.addEventListener("click", handleAboutClick, false);
var travelAnchorElement = document.getElementsByName("travel_anchor")[0];
travelAnchorElement.addEventListener("click", handleTravelClick, false);
var hackingAnchorElement = document.getElementsByName("hacking_anchor")[0];
hackingAnchorElement.addEventListener("click", handleHackingClick, false);
var contentElement = document.getElementsByClassName("content")[0];
;
var landingPageElement = document.getElementsByClassName("landing_page")[0];
;
var aboutPageElement = document.getElementsByClassName("about_page")[0];
var travelPageElement = (document.getElementsByClassName("travel_page")[0]);
;
var hackingPageElement = document.getElementsByClassName("hacking_page")[0];
;
