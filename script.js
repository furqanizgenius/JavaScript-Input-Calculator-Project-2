
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let clear = document.querySelector('.clear');


plus.addEventListener('click', () => {
    let result = document.querySelector('.result');
    let first = parseFloat(document.querySelector('.first').value);
    let second = parseFloat(document.querySelector('.second').value);

    if (isNaN(first) || isNaN(second)) {
        result.innerText = "Enter any Number...";
        result.style.color = "red";
    }
    else {
        let sum = first + second;
        result.innerText = "Sum : " + sum;
    }
})
minus.addEventListener('click', () => {
    let result = document.querySelector('.result');
    let first = parseFloat(document.querySelector('.first').value);
    let second = parseFloat(document.querySelector('.second').value);

    if (isNaN(first) || isNaN(second)) {
        result.innerText = "Enter any Number...";
        result.style.color = "red";
    }
    else {
        let minus = first - second;
        result.innerText = "Subtraction : " + minus;
    }
})

multiply.addEventListener('click', () => {
    let result = document.querySelector('.result');
    let first = parseFloat(document.querySelector('.first').value);
    let second = parseFloat(document.querySelector('.second').value);

    if (isNaN(first) || isNaN(second)) {
        result.innerText = "Enter any Number...";
        result.style.color = "red";
    }
    else {
        let multiply = first * second;
        result.innerText = "Multiplication : " + multiply;
    }
})

divide.addEventListener('click', () => {
    let result = document.querySelector('.result');
    let first = parseFloat(document.querySelector('.first').value);
    let second = parseFloat(document.querySelector('.second').value);

    if (isNaN(first) || isNaN(second)) {
        result.innerText = "Enter any Number...";
        result.style.color = "red";
    }
    else {
        let divide = first / second;
        result.innerText = "Division : " + divide;
    }
})

clear.addEventListener('click', ()=>{
    let result = document.querySelector('.result');
    let first = document.querySelector('.first');
    let second = document.querySelector('.second');

    first.value = "";
    second.value = "";
    result.innerText = "";
    result.style.color = "white";
})
