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