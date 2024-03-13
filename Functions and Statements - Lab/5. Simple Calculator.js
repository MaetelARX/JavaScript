function solve (num1, num2, operator){
    if (operator == "multiply"){
        console.log(num1 * num2);
    }
    else if (operator == "divide"){
        console.log(num1 / num2);
    }
    else if (operator == "add"){
        console.log(num1 + num2);
    }
    else{
        console.log(num1 - num2);
    }
}