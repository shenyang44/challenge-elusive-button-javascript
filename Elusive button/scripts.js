


let header = document.querySelector('h3');

let dog = document.querySelector('div');

dog.addEventListener('click', () => clicked());
dog.addEventListener("mouseover", () => move());


let area = document.querySelector('section');

let count = 0;

function move() {

    if (count < 10) {
        do {
            unitX = (Math.random() * window.innerWidth - 100);
            dog.style.left = `${unitX}px`;
            console.log(unitX)
            unitY = (Math.random() * window.innerHeight - 100);
            dog.style.top = `${unitY}px`;
        }
        while (unitY < 25 || unitX < 25);

        count++
        area.style.backgroundColor = getRandomColor();
        if (count > 9) {
            header.append('Ok, guess you can click it now. ')
        }
    }
    if (count == 5) {
        header.append('Wow, you is persistent. ')
    }
}

function clicked() {
    header.innerText = 'looks like you scared it away. i hope you are happy.';
    area.style.backgroundColor = 'red';
    dog.innerHTML = ''
    console.log(dog)
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}