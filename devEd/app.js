const container = document.querySelector(".container");
const card = document.querySelector(".card");
const title = document.querySelector('.title');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const sneaker = document.querySelector('.sneaker img');

// Base Card Animation ...
container.addEventListener("mousemove", (event) => {
    let xAxis = ((window.innerWidth/2 - event.pageX) / 10);
    let yAxis = ((window.innerHeight/2 - event.pageY) /10);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener("mouseenter", e => {
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    title.style.transform = 'translateZ(150px)';
    purchase.style.transform = 'translateZ(80px)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    card.style.transition = 'none';
})

container.addEventListener("mouseleave", e => {
    card.style.transition = 'all 1s ease';
    card.style.transform = "initial";
    title.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    // sneaker.style.transform = 'initial';
    // DevEd solution...
    // card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})