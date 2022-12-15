const Firstbtn = document.getElementById('firstbtn');
const Secondbtn = document.getElementById('secondbtn');
const Thirdbtn = document.getElementById('thirdbtn');
let Number = document.getElementById('#playingto')
// Grade = Number.value;

// for (t = 0; t > Number.length; t++) {
//     Grade = Number[t].value;
// }

let Firstspan = document.getElementById('firstspan');
let Secondspan = document.getElementById('secondspan');


let i = 0
function Buttons1() {
    Firstspan.innerText = i + 1;
    i++;
    if (Firstspan.innerText === Number) {
        document.getElementById('firstbtn').disabled = true;
        document.getElementById('secondbtn').disabled = true;
        document.getElementById('firstbtn').style.backgroundColor = '#598392'
        document.getElementById('secondbtn').style.backgroundColor = '#6981f1'
    }
}

let j = 0
function Buttons2() {
    Secondspan.innerText = j + 1;
    j++;
    if (Secondspan.innerText === Number) {
        document.getElementById('firstbtn').disabled = true;
        document.getElementById('secondbtn').disabled = true;
        document.getElementById('firstbtn').style.backgroundColor = '#598392'
        document.getElementById('secondbtn').style.backgroundColor = '#6981f1'
    }
}

function Reset() {
    j = 0
    i = 0
    Firstspan.innerText = i
    Secondspan.innerText = j
    document.getElementById('firstbtn').disabled = false;
    document.getElementById('secondbtn').disabled = false;
    document.getElementById('firstbtn').style.backgroundColor = '#124559'
    document.getElementById('secondbtn').style.backgroundColor = '#4361ee'
}

Firstbtn.addEventListener('click', Buttons1)
Secondbtn.addEventListener('click', Buttons2)
Thirdbtn.addEventListener('click', Reset)

