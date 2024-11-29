// Task 1
function Total(num1, num2){
    if (num1 == num2) {
        return 3 * num1;
    }
    return num1 + num2;
}

// Task 2
let x = Math.floor((Math.random() * 10) + 1); // Generate once
function GuessGame(guess){
    if (guess == x) {
        return "Good Work";
    }
    return "Not Matched";
}

// Task 3
function InRange(l, h){
    if (50 <= l && h <= 99) {
        return true;
    }
    return false;
}

// Task 4
var list = [];

function ArrayAdder(){ 
    var input = document.getElementById("input").value;
    list.push(input);
    document.getElementById("input").value = ""
}

display = true
function ArrayDisplay(){
    
    if (display){
        document.getElementById("result").innerHTML = list.join(", ");
        document.getElementById("display").innerHTML = "hide"
        display = false
    }else{
        document.getElementById("result").innerHTML = "";
        document.getElementById("display").innerHTML = "display"
        display = true
    }
   
}
