function getBtn(number) {
    var input = document.getElementById("result");
    input.value += number;
}

function clearResult(number) {
    var input = document.getElementById("result");
    input.value = "";
}


function backSpace(number) {
    var input = document.getElementById("result");
    input.value = input.value.slice(0, -1);
}


function getReault(number) {
    var input = document.getElementById("result");
    input.value = eval(input.value);
}