function solve(num1, num2, num3){
    let result = num1;

    if (num2 < num1 && num2 < num3){
        result = num2;
    }
    else if (num3 < num1 && num3 < num1){
        result = num3;
    }
    console.log(result);
}