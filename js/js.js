
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter)
    // if (counter % 3 === 0) {
    //     alert(`Counter = ${counter}`);
    }

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;

    // setInterval(count, 1000);
});

function hello() {
    let head = document.querySelector('h1')
    if (head.innerHTML === 'Hello!') {
        head.innerHTML = 'Goodbye!';
    } else {
        head.innerHTML = 'Hello!';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };
});

document.addEventListener('DOMContentLoaded', () => {           //arrow function

    // document.querySelector('#red').onclick = function() {
    //     document.querySelector('#hello').style.color = 'red';
    // }
    // document.querySelector('#blue').onclick = function() {
    //     document.querySelector('#hello').style.color = 'blue';
    // }
    // document.querySelector('#green').onclick = function() {
    //     document.querySelector('#hello').style.color = 'green';
    // }

    // document.querySelectorAll('button').forEach(button => {
    //     button.onclick = () => {
    //         document.querySelector('#hello').style.color = button.dataset.color;
    //     }
    // })

    document.querySelector('select').onchange = function() {
        document.querySelector('#hello').style.color = this.value
    }
});

