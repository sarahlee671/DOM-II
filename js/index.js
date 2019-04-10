// Your code goes here

//When you mouse down on the nav links, it turns the font green and moves 4px down
//When you mouse up on the nav link, it turns the font back to white and moves up 4px.
//When you scroll down to the page and click on a nav-link, the preventDefault() prevents it from scrolling back to the top
const navBtns = document.querySelectorAll(".nav-link");
navBtns.forEach(function(navBtn){
    navBtn.addEventListener('mousedown', function(event){
        event.preventDefault()
        event.target.style.color = 'green'
        event.target.style.transform = 'translateY(4px)'
    });
    navBtn.addEventListener('mouseup', function(event){
        event.target.style.transform = 'translateX(4px)'
        event.target.style.color = 'black'
    
    })
    navBtn.addEventListener('click', function(event){
        event.preventDefault()
    });
});

//When you mouseover logo, it turns the background blue and when you mouseleave, it goes back to white.
const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'blue'
})
logo.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = 'white'
})

//When you double click on .content-section container, it turns pink
const contentDestination = document.querySelector(".content-section");
contentDestination.addEventListener('dblclick', function(event){
    event.currentTarget.style.backgroundColor = "pink"
})

//When you double click on the paragraph on .content-section, it turns purple 
//Does not fire the parent to turn pink because used .stopPropagation()
const contentPara = document.querySelector(".content-section p");
contentPara.addEventListener('dblclick', function(event){
    event.currentTarget.style.backgroundColor = "purple"
    event.stopPropagation();
})

//Turns the button text red when the mouse moves over the button
const signMeUpBtns = document.querySelectorAll('.btn');
signMeUpBtns.forEach(function(signMeUpBtn){
    signMeUpBtn.addEventListener('mousemove', function(event){
        event.target.style.color = "red"
    });
});

//Changes the image opacity when you mouse enter an image
const contentImages = document.querySelectorAll('.img-content');
contentImages.forEach(function(image){
    image.addEventListener('mouseenter', function(event){
        event.target.style.opacity = '0.5'
    })
})

//console.log that the page is loaded 
const pageLoad = document.querySelector('window');
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

//console.log which key was pressed anywhere in the window console
const keyPressed = document.querySelector("window");
window.addEventListener('keydown', function(event){
    console.log(`A key was pressed down! This is the key: ${event.key}`);
})




 





