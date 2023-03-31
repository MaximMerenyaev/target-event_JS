let box_first = document.getElementById("first");
let box_second = document.getElementById("second");
let box_third = document.getElementById("third");
let btnClear = document.getElementById("btn-clear");

let counter_first = 0;
let counter_second = 0;
let counter_third = 0;

box_first.addEventListener('click', ()=>{
    counter_first++;
    box_first.innerHTML = "<p>" + counter_first + "</p>";
});
box_second.addEventListener('click', ()=>{
    counter_second++;
    box_second.innerHTML = "<p>" + counter_second + "</p>";
});
box_third.addEventListener('click', ()=>{
    counter_third++;
    box_third.innerHTML = "<p>" + counter_third + "</p>";
});
btnClear.addEventListener('click', ()=>{
    counter_first = 0;
    counter_second = 0;
    counter_third = 0;
    box_first.innerHTML = "<p>" + 0 + "</p>";
    box_second.innerHTML = "<p>" + 0 + "</p>";
    box_third.innerHTML = "<p>" + 0 + "</p>";
});