const displayScrn = document.getElementById('displayScrn');
let result = "";
let storedInput = "";
let addInput = "";
let triggerMulti = false;
let noDec = true;
let screenText = "";


document.getElementById("1").addEventListener("click", function () {
    addText(1);
    ani(1);
});
document.getElementById("2").addEventListener("click", function () {
    addText(2);
    ani(2);
});
document.getElementById("3").addEventListener("click", function () {
    addText(3);
    ani(3);
});
document.getElementById("4").addEventListener("click", function () {
    addText(4);
    ani(4);
});
document.getElementById("5").addEventListener("click", function () {
    addText(5);
    ani(5);
});
document.getElementById("6").addEventListener("click", function () {
    addText(6);
    ani(6);
});
document.getElementById("7").addEventListener("click", function () {
    addText(7);
    ani(7);
});
document.getElementById("8").addEventListener("click", function () {
    addText(8);
    ani(8);
});
document.getElementById("9").addEventListener("click", function () {
    addText(9);
    ani(9);
});
document.getElementById("0").addEventListener("click", function () {
    addText(0);
    ani(0);
});
document.getElementById("decimal").addEventListener("click", function () {
    decNumber = document.getElementById("displayScrn").innerHTML;
    if (decNumber > Math.floor(decNumber)) {
        noDec = false;
    } else {
        noDec = true;
        addText(".");
    }
    ani("decimal");
});

function ani(element) {
    let change = document.getElementById(element);
    setTimeout(function () {
        change.style.display = (change.style.background = 'lightgrey');
        setTimeout(function () {
            change.style.display = (change.style.background = 'rgb(240, 240, 240)');
        }, 100);
    }, 100);
}

function ani2(element) {
    let change = document.getElementById(element);
    setTimeout(function () {
        change.style.display = (change.style.background = 'lightgrey');
        setTimeout(function () {
            change.style.display = (change.style.background = 'rgb(250, 250, 250)');
        }, 100);
    }, 100);
}

function ani3(element) {
    let change = document.getElementById(element);
    setTimeout(function () {
        change.style.display = (change.style.background = 'darkblue');
        setTimeout(function () {
            change.style.display = (change.style.background = 'rgb(57, 107, 214');
        }, 100);
    }, 100);
}

function add(storedInput, addInput) {
    result = Number(storedInput) + Number(addInput);
    return result;
}

function minus(storedInput, addInput) {
    result = storedInput - addInput;
    return result;
}

function divide(storedInput, addInput) {
    if (storedInput == 0 && addInput == 0) {
        result = "Dividing by zero? Really?";
        return result;
    }
    result = storedInput / addInput;
    return result;
}

function times(storedInput, addInput) {
    result = storedInput * addInput;
    return result;
}

function operate(storedInput, operator, addInput) {
    if (operator == "+") {
        result = add(storedInput, addInput);
        return result;
    } else if (operator == "-") {
        result = minus(storedInput, addInput);
        return result;
    } else if (operator == "*") {
        result = times(storedInput, addInput);
        return result;
    } else if (operator == "%") {
        result = divide(storedInput, addInput);
        return result;
    }
}

function addText(input) {
    displayScrn.insertAdjacentText('beforeend', input);
}

function backspace(input) {
    screenText = displayScrn.innerHTML;
    screenTextBack = screenText.toString().substring(0, screenText.length - 1);
    displayScrn.innerHTML = screenTextBack;
}

function clearContent() {
    displayScrn.innerHTML = "";
}

function equals() {
    displayScrn.innerHTML = result;
}

function resetParameters() {
    storedInput = "";
    addInput = "";
    operator = "";
    result = "";
}

document.getElementById('add').addEventListener("click", function () {
    if (triggerMulti == false) {
        operator = "+";
        storedInput = displayScrn.innerHTML;
        triggerMulti = true;
    } else if (triggerMulti == true) {
        addInput = displayScrn.innerHTML;
        storedInput = operate(storedInput, operator, addInput);
        operator = "+";
    }
    clearContent();
    ani2('add');
});

document.getElementById('minus').addEventListener("click", function () {
    if (triggerMulti == false) {
        operator = "-";
        storedInput = displayScrn.innerHTML;
        triggerMulti = true;
    } else if (triggerMulti == true) {
        addInput = displayScrn.innerHTML;
        storedInput = operate(storedInput, operator, addInput);
        operator = "-";
    }
    clearContent();
    ani2('minus');
});

document.getElementById('divide').addEventListener("click", function () {
    if (triggerMulti == false) {
        operator = "%";
        storedInput = displayScrn.innerHTML;
        triggerMulti = true;
    } else if (triggerMulti == true) {
        addInput = displayScrn.innerHTML;
        storedInput = operate(storedInput, operator, addInput);
        operator = "%";
    }
    clearContent();
    ani2('divide');
});

document.getElementById('times').addEventListener("click", function () {
    if (triggerMulti == false) {
        operator = "*";
        storedInput = displayScrn.innerHTML;
        triggerMulti = true;
    } else if (triggerMulti == true) {
        addInput = displayScrn.innerHTML;
        storedInput = operate(storedInput, operator, addInput);
        operator = "*";
    }
    clearContent();
    ani2('times');
});

document.getElementById('clear').addEventListener("click", function () {
    clearContent();
    ani2('clear');
    resetParameters()
    triggerMulti = false;
});

document.getElementById('Del').addEventListener("click", function () {
    backspace();
    ani2('Del');
});

document.getElementById('equals').addEventListener("click", function () {
    if (triggerMulti == true) {
        addInput = displayScrn.innerHTML;
        storedInput = operate(storedInput, operator, addInput)
    }
    equals(storedInput);
    ani3('equals');
    resetParameters()
    triggerMulti = false;
});




// Keyboard support:

document.addEventListener('keydown', (event) => {
    console.log(event);
});

document.addEventListener('keydown', (event) => {
    if (event.key == "0") {displayScrn.insertAdjacentText('beforeend', 0);}
    else if (event.key == "1") {displayScrn.insertAdjacentText('beforeend', 1);}
    else if (event.key == "2") {displayScrn.insertAdjacentText('beforeend', 2);}
    else if (event.key == "3") {displayScrn.insertAdjacentText('beforeend', 3);}
    else if (event.key == "4") {displayScrn.insertAdjacentText('beforeend', 4);}
    else if (event.key == "5") {displayScrn.insertAdjacentText('beforeend', 5);}
    else if (event.key == "6") {displayScrn.insertAdjacentText('beforeend', 6);}
    else if(event.key == "7") {displayScrn.insertAdjacentText('beforeend', 7);}
    else if(event.key == "8") {displayScrn.insertAdjacentText('beforeend', 8);}
    else if(event.key == "9") {displayScrn.insertAdjacentText('beforeend', 9);}
    else if(event.key == ".") {    
        decNumber = document.getElementById("displayScrn").innerHTML;
        if (decNumber > Math.floor(decNumber)) {
            noDec = false;
        } else {
            noDec = true;
            addText(".");
        }
    }
    else if(event.key == "Backspace") {backspace();}
    else if(event.key == "+") {
        if (triggerMulti == false) {
            operator = "+";
            storedInput = displayScrn.innerHTML;
            triggerMulti = true;
        } else if (triggerMulti == true) {
            addInput = displayScrn.innerHTML;
            storedInput = operate(storedInput, operator, addInput);
            operator = "+";
        }
        clearContent();
    }
    else if(event.key == "-") {
        if (triggerMulti == false) {
            operator = "-"
            storedInput = displayScrn.innerHTML;
            triggerMulti = true;
        } else if (triggerMulti == true) {
            addInput = displayScrn.innerHTML;
            storedInput = operate(storedInput, operator, addInput);
            operator = "-";
        }
        clearContent();
    }
    else if(event.key == "*") {
        if (triggerMulti == false) {
            operator = "*";
            storedInput = displayScrn.innerHTML;
            triggerMulti = true;
        } else if (triggerMulti == true) {
            addInput = displayScrn.innerHTML;
            storedInput = operate(storedInput, operator, addInput);
            operator = "*";
        }
        clearContent();
    }
    else if(event.key == "/") {
        if (triggerMulti == false) {
            operator = "%";
            storedInput = displayScrn.innerHTML;
            triggerMulti = true;
        } else if (triggerMulti == true) {
            addInput = displayScrn.innerHTML;
            storedInput = operate(storedInput, operator, addInput);
            operator = "%";
        }
        clearContent();
    }
    else if(event.key == "=") {    
        if (triggerMulti == true) {
            addInput = displayScrn.innerHTML;
            storedInput = operate(storedInput, operator, addInput)
        }
        equals(storedInput);
        resetParameters()
        triggerMulti = false;
    }
});