function solve(input){
    let sum = 0;
    for (let i = 0; i < input.length; i++){
        if (input[i] == "soap"){
            sum += 10;
        }
        else if (input[i] == "water"){
            sum += sum * 0.20;
        }
        else if (input[i] == "vacuum cleaner"){
            sum += sum * 0.25;
        }
        else{
            sum *= 0.90;
        }
    }
    console.log(`The car is ${sum.toFixed(2)}% clean.`);
}