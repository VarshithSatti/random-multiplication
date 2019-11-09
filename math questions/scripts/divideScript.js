let n;
let n1;
let num1;
let num2;
let tensgen = false;
let limit = 10;

function ChangeLimit() {
    let x = document.getElementById("LLI").value;
    if(x == "") {
        alert("please enter a number");
        return;
    }
    limit = x;
}

function generateDivisonQuestion(changeToTens) {
    clear();
    n = 999;
    n1 = limit;
    if (changeToTens == "tens") {
        n = 99;
        tensgen = true;
    }
    num1 = Math.floor(Math.random() * Math.floor(n));
    num2 = Math.floor(Math.random() * Math.floor(n1));
    document.getElementById("qq").innerHTML += num1 +  '/'  + num2 + " = " + " ";
}

function check() {
    let a = document.getElementById("ans").value;
    let rans = Math.floor(num1 / num2);
    if (a == rans) {
        document.getElementById("wrong").innerHTML = "";
        document.getElementById("correct").innerHTML = "correct!!";
        if(tensgen == true)
        {
            generateDivisonQuestion("tens")
            return;
        }
        generateDivisonQuestion()
        return;
    } else if (a == "") {
        document.getElementById("wrong").innerHTML = "please enter a number!!";
        document.getElementById("correct").innerHTML = "";
        return;
    } else {
        document.getElementById("wrong").innerHTML = "wrog answer try again!!";
        document.getElementById("correct").innerHTML = "  ";
        return;
    }
}

function clear() {
    document.getElementById("qq").innerHTML = "";
    document.getElementById("correct").innerHTML = "";
    document.getElementById("wrong").innerHTML = "";
}