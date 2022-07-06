function operate(input1, operator, input2) {
    let result = 0;

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

document.getElementById("1").addEventListener("click", function(){
    ani(1);
});
document.getElementById("2").addEventListener("click", function(){
    ani(2);
});
document.getElementById("3").addEventListener("click", function(){
    ani(3);
});
document.getElementById("4").addEventListener("click", function(){
    ani(4);
});
document.getElementById("5").addEventListener("click", function(){
    ani(5);
});
document.getElementById("6").addEventListener("click", function(){
    ani(6);
});
document.getElementById("7").addEventListener("click", function(){
    ani(7);
});
document.getElementById("8").addEventListener("click", function(){
    ani(8);
});
document.getElementById("9").addEventListener("click", function(){
    ani(9);
});
document.getElementById("0").addEventListener("click", function(){
    ani(0);
});
document.getElementById('minus').addEventListener("click", function(){
    ani('minus');
});
document.getElementById('add').addEventListener("click", function(){
    ani('add');
});
document.getElementById('divide').addEventListener("click", function(){
    ani('divide');
});
document.getElementById('times').addEventListener("click", function(){
    ani('times');
});
document.getElementById('clear').addEventListener("click", function(){
    ani('clear');
});
document.getElementById('equals').addEventListener("click", function(){
    ani('equals');
});

function ani(element) {
    let change = document.getElementById(element);
    setTimeout(function() {
        change.style.display = (change.style.background = 'darkgrey');
         setTimeout(function() {
            change.style.display = (change.style.background = 'lightgrey');
         }, 100);
    }, 100);
}