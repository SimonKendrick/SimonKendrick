
const reset = (event) => {

    event.preventDefault();

    aboutPageElement.style.display="none";
    travelPageElement.style.display="none";
    hackingPageElement.style.display="none";
    landingPageElement.style.display="none";
    
    contentElement.style.backgroundImage = "url()";
    contentElement.style.backgroundImage = "linear-gradient(to bottom, rgb(0 0 255 / 50%), rgb(255 255 0 / 50%))";


}



const handleAboutClick = (event) => {

    reset(event);


    aboutPageElement.style.display="flex";



    console.log(aboutAnchorElement);

}

const handleTravelClick = (event) => {

    reset(event);



    travelPageElement.style.display="flex";


    console.log(aboutAnchorElement);

}
const handleHackingClick = (event) => {


    reset(event);


    event.preventDefault();


    hackingPageElement.style.display="flex";

    
    console.log(aboutAnchorElement);

}

let aboutAnchorElement=document.getElementsByName("about_anchor")[0];
aboutAnchorElement.addEventListener("click",handleAboutClick,false);

let travelAnchorElement=document.getElementsByName("travel_anchor")[0];
travelAnchorElement.addEventListener("click",handleTravelClick,false);

let hackingAnchorElement=document.getElementsByName("hacking_anchor")[0];
hackingAnchorElement.addEventListener("click",handleHackingClick,false);



let contentElement=document.getElementsByClassName("content")[0];

let landingPageElement=document.getElementsByClassName("landing_page")[0];

let aboutPageElement=document.getElementsByClassName("about_page")[0];

let travelPageElement=document.getElementsByClassName("travel_page")[0];

let hackingPageElement=document.getElementsByClassName("hacking_page")[0];



