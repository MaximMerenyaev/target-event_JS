let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');

let b1 = true;
let b2 = true;
let b3 = true;

button1.addEventListener('click', ()=>{
    if (b1) {
        b1 = false;
        button1.classList.add("left");
    } else {
        b1 = true;
        button1.classList.remove("left");
    }
});

button2.addEventListener('click', ()=>{
    if (b2) {
        b2 = false;
        button2.classList.add("left");
    } else {
        b2 = true;
        button2.classList.remove("left");
    }
});

button3.addEventListener('click', ()=>{
    if (b3) {
        b3 = false;
        button3.classList.add("left");
    } else {
        b3 = true;
        button3.classList.remove("left");
    }
});