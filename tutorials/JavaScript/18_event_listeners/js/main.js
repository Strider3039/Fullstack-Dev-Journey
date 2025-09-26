const view1 = document.getElementById('view1');
const view2 = document.getElementById('view2');

view1.style.display = 'none';
view2.style.display = 'flex';

// // Syntax: addEventListener(event, function, useCapture)
// const doSomething = () => {
//     alert('Doing something');
// }

// // Event: on click
// // Function: doSomething
// // UseCapture: Will not capture event in capturing phase
// h2.addEventListener('click', doSomething, false);
// h2.removeEventListener('click', doSomething, false);

// h2.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.textContent = 'Clicked!';
// })

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        console.log('readyState: complete');
        initApp();
    }
});

const initApp = () => {
    const div = view2.querySelector('div');
    const h2 = div.querySelector('h2');

    // Event Bubbling
    // When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
    view2.addEventListener(
        'click',
        (event) => {
            view2.style.backgroundColor = 'purple';
        },
        false
    );

    div.addEventListener(
        'click',
        (event) => {
            div.style.backgroundColor = 'blue';
        },
        false
    );

    h2.addEventListener(
        'click',
        (event) => {
            event.stopPropagation();    // Stops the event from bubbling up to parent elements
            event.target.textContent = 'Clicked!';
        },
        false
    );
};
