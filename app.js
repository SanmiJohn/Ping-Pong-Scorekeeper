const Firstbtn = document.getElementById('firstbtn');
const Secondbtn = document.getElementById('secondbtn');
const Thirdbtn = document.getElementById('thirdbtn');
let Firstspan = document.getElementById('firstspan');
let Secondspan = document.getElementById('secondspan');

function Buttons() {
    for (i = 0; i < 10; i++) {
        Firstspan.innerText = i
    }
}

Firstbtn.addEventListener('click', Buttons)
