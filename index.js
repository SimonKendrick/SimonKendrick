const handleAboutClick = (event) => {

    event.preventDefault();

    aboutPageElement.style.display="flex";
    travelPageElement.style.display="none";
    hackingPageElement.style.display="none";

    console.log(aboutAnchorElement);

}

const handleTravelClick = (event) => {

    event.preventDefault();

    aboutPageElement.style.display="none";
    travelPageElement.style.display="flex";
    hackingPageElement.style.display="none";

    console.log(aboutAnchorElement);

}
const handleHackingClick = (event) => {

    event.preventDefault();

    aboutPageElement.style.display="none";
    travelPageElement.style.display="none";
    hackingPageElement.style.display="flex";

    console.log(aboutAnchorElement);

}

let aboutAnchorElement=document.getElementsByName("about_anchor")[0];
aboutAnchorElement.addEventListener("click",handleAboutClick,false);

let travelAnchorElement=document.getElementsByName("travel_anchor")[0];
travelAnchorElement.addEventListener("click",handleTravelClick,false);

let hackingAnchorElement=document.getElementsByName("hacking_anchor")[0];
hackingAnchorElement.addEventListener("click",handleHackingClick,false);



let aboutPageElement=document.getElementsByClassName("about_page")[0];

let travelPageElement=document.getElementsByClassName("travel_page")[0];

let hackingPageElement=document.getElementsByClassName("hacking_page")[0];



