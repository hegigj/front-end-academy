// const divEl = document.querySelector('div');
// // divEl.innerHTML = 'Hello DOM';
// // divEl.innerText = '<h1>Hello DOM</h1>';
// divEl.innerHTML = `
//     <h1>Hello Div</h1>
// `;
// divEl.style.color = '#ff0000';
// // divEl.style.backgroundColor = '#0000ff'; // background-color
// // divEl.style.BackgroundColor = '#0000ff';
// // divEl.style.borderRadius = '15px';
// divEl.classList.add('style-div');
// divEl.style = {
//     color: 'green',
//     backgroundColor: 'yellow'
// };
// divEl.id = 'div1';
// // console.log(divEl.id);
// const [h2El] = document.getElementsByTagName('h2');
// console.log(h2El);
//
// //Array destructuring
// // const arr = [1,2,3];
// // const el1 = arr[0];
// // const el3 = arr[2];
// // const [element1, ,element3] = arr;
// // console.log(el1, element1);
//
// const [pEl] = document.getElementsByClassName('text');
// console.log(pEl);
// pEl.innerText = 'This is a p tag';
// pEl.style.color = 'red';
//
// const spanEl = document.getElementById('demo');
// spanEl.innerText = 'Span';
//
// // document.querySelectorAll
// function querySelector(selectors) {
//     const [el] = document.querySelectorAll(selectors);
//     return el;
// }
//
// const h3El = querySelector('div h3');
// console.log(h3El.innerHTML);

// document.querySelector('.text')
function sayHi(event) {
    const h3El = document.querySelector('div>h3');
    const btnEl = event.target;
    const btnText = btnEl.innerText;
    btnEl.innerText = 'Loading ...';
    setTimeout(
        () => {
            h3El.innerText = 'Hi Endi';
            btnEl.innerText = btnText;
        },
        2000
    );
}

const btnEl = document.querySelector('div>button');
btnEl.addEventListener('click', sayHi);

const addNameToListBtn = document.getElementById('addNameToList');
addNameToListBtn.addEventListener(
    'click',
    (event) => {
        // select input which is direct child of div
        const inputEl = document.querySelector('div>input');
        // assign input value to constant
        const inputValue = inputEl.value;
        inputEl.value = '';
        if (inputValue) {
            // select ul which is direct child of div
            const ulEl = document.querySelector('div>ul');
            // create new li element
            const liEl = document.createElement('li');
            // add input value to li element
            liEl.innerText = inputValue;
            // li append to ul
            ulEl.appendChild(liEl);
        } else {
            alert('Input is empty!');
        }
    }
);
// Krijoni te njejtin funksionalitet si me siper por ne vend te butonit add
// do degjoni eventin "Enter" ne momentin kur te shtypni tastin enter ne
// tastjere
const inputEl = document.querySelector('div>input');
inputEl.addEventListener(
    'keyup',
    (event) => {
        console.log(event);
    }
);