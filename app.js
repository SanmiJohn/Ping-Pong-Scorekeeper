const Firstbtn = document.getElementById('firstbtn');
const Secondbtn = document.getElementById('secondbtn');
const Thirdbtn = document.getElementById('thirdbtn');
let Number = document.getElementById('number').value
let Firstspan = document.getElementById('firstspan');
let Secondspan = document.getElementById('secondspan');

let i = 0
function Buttons1() {
    Firstspan.innerText = i + 1;
    i++;
}
let j = 0
function Buttons2() {
    Secondspan.innerText = j + 1;
    j++;
}

function Reset() {
    Firstspan.innerText = '0'
    Secondspan.innerText = '0'
}

Firstbtn.addEventListener('click', Buttons1)
Secondbtn.addEventListener('click', Buttons2)
Thirdbtn.addEventListener('click', Reset)