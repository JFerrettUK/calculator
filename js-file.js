function operate(input1, operator, input2) {
    let result = 0;
    if (operator == "+") {
        function add(input1, input2) {
            result = input1 + input2;
            return result;
        }
    } else if (operator == "-") {
        function minus(input1, input2) {
            result = input1 - input2;
            return result;
        }
    } else if (operator == "*") {
        function times(input1, input2) {
            result = input1 * input2;
            return result;
        }
    } else if (operator == "%") {
        function divide(input1, input2) {
            result = input1 / input2;
            return result;
        }
    return result;
    }
}