function solve(num1, num2, num3){
    let negCount = 0;
    if (num1 < 0){
        negCount ++;
    }
    if (num2 < 0){
        negCount ++;
    }
    if (num3 < 0){
        negCount ++;
    }

    if (negCount % 2 == 0){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }
}