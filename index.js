


//console.log(document.querySelector("a[href='#new-intervention']"));



const handleAboutClick = (event) => {

    preventDefault();


    console.log(aboutAnchorElement);
}



let aboutAnchorElement=document.querySelector("a[href='about']");


aboutAnchorElement.addEventListener('onclick',handleAboutClick);


