//Union Type
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(1, 20));
console.log(combine('hemanth', 'peela'));
