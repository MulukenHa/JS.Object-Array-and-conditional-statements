// Task 1
function Total(num1, num2){
    if (num1 == num2) {
        return 3 * num1;
    }
    return num1 + num2;
}

// Task 2
let x = Math.floor((Math.random() * 10) + 1);
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

//task 4

function Closet(num1, num2){
    ans1 = 100 - num1
    ans2 = 100 - num2

    if (ans1 > ans2){
        return ans2
    }
    
    return ans1
}

// Task 5
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
