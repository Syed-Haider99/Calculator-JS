const display = document.getElementById("display");
function appendToDisplay(input) {
display.value += input;
}
function clearDisplay() {
display.value = "";
}
function backSpace() {
display.value = display.value.slice(0, -1);
}
function Calculate() {
try {display.value = eval(display.value);}
    catch (error) {
        display.value = "Error";
}
}