document.querySelector('.open').addEventListener('click', () =>{
    const ul = document.querySelector(".nav-list");
    ul.classList.add('active')
})

// Close Nav Bar...
document.querySelector('.close').addEventListener('click', () =>{
    const ul = document.querySelector(".nav-list");
    ul.classList.remove('active')
})

// const lastSpace = (items) => {
//     let x;
//     for (item of items) {
//         if (item === ' ') {
//             x = items.lastIndexOf(item);
//         }
//     }
//     return x;
// } 

const lastSpace = (items) => {
    let x;
    if (items.includes(' ')){
        x = items.lastIndexOf(' ');
        return x
    }
    return null;
}

const lineBreaker = (items) => {
    if (items.length > 17){
        items = items.slice(0, 15);
        if (lastSpace(items)){
            let last = lastSpace(items);
            items = items.slice(0, last)+'...';
        }else {
            items += '...';
        }
        return items;
    }
    return items;
}

let data = 'hi i am joel, i am trying to test my appwhat do you think?';
console.log(lineBreaker(data));

let james= 'jamesisabadguytruatedfghjn';
console.log(lineBreaker(james))