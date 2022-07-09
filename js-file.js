let result = 0.1;
let input1 = 0.1;
let input2 = 0.1;
let input3 = 0.1;
let input4 = 0.1;
let input5 = 0.1;
let input6 = 0.1;
let input7 = 0.1;
let input8 = 0.1;
let input9 = 0.1;
let input10 = 0.1;
let input11 = 0.1;

function operate(input1, operator, input2) {

    function add(input1, input2) {
        result = Number(input1) + Number(input2);;
        return result;
    }

    function minus(input1, input2) {
        result = input1 - input2;
        return result;
    }

    function divide(input1, input2) {
        if (input1 == 0 && input2 == 0) {
            result = "Dividing by zero? Really?";
            return result;
        }
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

function clearInputs(result, input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11) {
    result = 0.1;
    input1 = 0.1;
    input2 = 0.1;
    input3 = 0.1;
    input4 = 0.1;
    input5 = 0.1;
    input6 = 0.1;
    input7 = 0.1;
    input8 = 0.1;
    input9 = 0.1;
    input10 = 0.1;
    input11 = 0.1;
}

function equals() {
    const displayScrn = document.getElementById('displayScrn');
    displayScrn.innerHTML = result;
}

function ani(element) {
    let change = document.getElementById(element);
    setTimeout(function() {
        change.style.display = (change.style.background = 'lightgrey');
         setTimeout(function() {
            change.style.display = (change.style.background = 'rgb(240, 240, 240)');
         }, 100);
    }, 100);
}

function ani2(element) {
    let change = document.getElementById(element);
    setTimeout(function() {
        change.style.display = (change.style.background = 'lightgrey');
         setTimeout(function() {
            change.style.display = (change.style.background = 'rgb(250, 250, 250)');
         }, 100);
    }, 100);
}

function ani3(element) {
    let change = document.getElementById(element);
    setTimeout(function() {
        change.style.display = (change.style.background = 'darkblue');
         setTimeout(function() {
            change.style.display = (change.style.background = 'rgb(57, 107, 214');
         }, 100);
    }, 100);
}

document.getElementById("1").addEventListener("click", function(){
    addText(1);
    ani(1);
});
document.getElementById("2").addEventListener("click", function(){
    addText(2);
    ani(2);
});
document.getElementById("3").addEventListener("click", function(){
    addText(3);
    ani(3);
});
document.getElementById("4").addEventListener("click", function(){
    addText(4);
    ani(4);
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
});
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
    input1 = displayScrn.innerHTML;
    operator = "-";
    clearContent();
    ani2('minus');
});
document.getElementById('add').addEventListener("click", function(){
    input1 = displayScrn.innerHTML;
    operator = "+";
    clearContent();
    ani2('add');
});
document.getElementById('divide').addEventListener("click", function(){
    input1 = displayScrn.innerHTML;
    operator = "%";
    clearContent();
    ani2('divide');
});
document.getElementById('times').addEventListener("click", function(){
    input1 = displayScrn.innerHTML;
    operator = "*";
    clearContent();
    ani2('times');
});
document.getElementById('clear').addEventListener("click", function(){
    clearContent();
    ani2('clear');
});
document.getElementById('equals').addEventListener("click", function(){
    input2 = displayScrn.innerHTML;
    operate(input1, operator, input2, operator, input3, operator, 
        input4, operator, input4, operator, input5, operator, input6, operator,
        input7, operator, input8, operator, input9, operator, input10, operator, input11);
    equals(result);
    ani3('equals');
    result = 0.1;
    input1 = 0.1;
    input2 = 0.1;
    input3 = 0.1;
    input4 = 0.1;
    input5 = 0.1;
    input6 = 0.1;
    input7 = 0.1;
    input8 = 0.1;
    input9 = 0.1;
    input10 = 0.1;
    input11 = 0.1;
});