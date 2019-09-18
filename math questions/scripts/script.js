let num1;
let num2;

function generateMultiplicationQuestion() {
    clear();
    num1 = Math.floor(Math.random() * Math.floor(999));
    num2 = Math.floor(Math.random() * Math.floor(99));
    document.getElementById("qq").innerHTML += num1 + " x " + num2 + " = " + " ";
}

function check() {
    let a = document.getElementById("ans").value;
    let rans = num1 * num2;
    if (a == rans) {
        document.getElementById("wrong").innerHTML = "";
        document.getElementById("correct").innerHTML = "correct!!";
        generateMultiplicationQuestion()
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
function clear()
{
    document.getElementById("qq").innerHTML = "";
}