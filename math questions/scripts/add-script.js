let n;
let n1;
let num1;
let num2;
let tensgen = false;
let gotcorrect = false;

function generateadditionQuestion(changeToTens) {
    clear();
    n = 999;
    n1 = 99;
    if (changeToTens == "tens") {
        n = 99;
        tensgen = true;
    }
    num1 = Math.floor(Math.random() * Math.floor(n));
    num2 = Math.floor(Math.random() * Math.floor(n1));
    document.getElementById("qq").innerHTML += num1 + " + " + num2 + " = " + " ";
}

function check() {
    let a = document.getElementById("ans").value;
    let rans = num1 + num2;
    if (a == rans) {
        gotcorrect = true;
        document.getElementById("wrong").innerHTML = "";
        document.getElementById("correct").innerHTML = "correct!!";
        if (tensgen == true) {
            generateadditionQuestion("tens")
            return;
        }
        generateadditionQuestion()
        return;
    } else if (a == "") {
        gotcorrect = false;
        document.getElementById("wrong").innerHTML = "please enter a number!!";
        document.getElementById("correct").innerHTML = "";
        return;
    } else {
        gotcorrect = false;
        document.getElementById("wrong").innerHTML = "wrog answer try again!!";
        document.getElementById("correct").innerHTML = "  ";
        return;
    }
}

function clear() {
    document.getElementById("qq").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
    if (gotcorrect == true) {
        return;
    }
    document.getElementById("correct").innerHTML = "";
}