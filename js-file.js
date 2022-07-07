let result = '';

function operate(input1, operator, input2) {

    function add(input1, input2) {
        result = input1 + input2;
        return result;
    }

    function minus(input1, input2) {
        result = input1 - input2;
        return result;
    }

    function divide(input1, input2) {
        result = input1 / input2;
        return result;
    }

    function times(input1, input2) {
        result = input1 * input2;
        return result;
    }

    if (operator == "+") {
        result = add(input1, input2);
        return result;
    } else if (operator == "-") {
        result = minus(input1, input2);
        return result;
    } else if (operator == "*") {
        result = times(input1, input2);
        return result;
    } else if (operator == "%") {
        result = divide(input1, input2);
        return result;
    }
}

function addText(input) {
    const displayScrn = document.getElementById('displayScrn');
    displayScrn.insertAdjacentText('beforeend', input);
}

function clearContent() {
    const displayScrn = document.getElementById('displayScrn');
    displayScrn.innerHTML = "";
}

function equals() {
    const displayScrn = document.getElementById('displayScrn');
    displayScrn.innerHTML = result;
}

function ani(element) {
    let change = document.getElementById(element);
    setTimeout(function() {
        change.style.display = (change.style.background = 'darkgrey');
         setTimeout(function() {
            change.style.display = (change.style.background = 'lightgrey');
         }, 100);
    }, 100);
}

function ani2(element) {
    let change = document.getElementById(element);
    setTimeout(function() {
        change.style.display = (change.style.background = 'darkgrey');
         setTimeout(function() {
            change.style.display = (change.style.background = 'rgb(235, 235, 235)');
         }, 100);
    }, 100);
}

document.getElementById("1").addEventListener("click", function(){
    addText(1);
    ani(1);
});
document.getElementById("2").addEventListener("click", function(){
    ani(2);
    addText(2);
});
document.getElementById("3").addEventListener("click", function(){
    addText(3);
    ani(3);
});
document.getElementById("4").addEventListener("click", function(){
    ani(4);
    addText(4);
});
document.getElementById("5").addEventListener("click", function(){
    addText(5);
    ani(5);
});
document.getElementById("6").addEventListener("click", function(){
    addText(6);
    ani(6);
});
document.getElementById("7").addEventListener("click", function(){
    addText(7);
    ani(7);
});operate(7, ' * ', 9)

document.getElementById("8").addEventListener("click", function(){
    addText(8);
    ani(8);
});
document.getElementById("9").addEventListener("click", function(){
    addText(9);
    ani(9);
});
document.getElementById("0").addEventListener("click", function(){
    addText(0);
    ani(0);
});
document.getElementById('minus').addEventListener("click", function(){
    addText(' - ');
    ani('minus');
});
document.getElementById('add').addEventListener("click", function(){
    addText(' + ');
    ani('add');
});
document.getElementById('divide').addEventListener("click", function(){
    addText(' / ');
    ani('divide');
});
document.getElementById('times').addEventListener("click", function(){
    addText(' * ');
    ani('times');
});
document.getElementById('clear').addEventListener("click", function(){
    clearContent();
    ani2('clear');
});
document.getElementById('equals').addEventListener("click", function(){
    equals(result);
    ani2('equals');
});