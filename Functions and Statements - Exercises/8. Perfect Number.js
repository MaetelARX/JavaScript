function solve(input){
    let num1 = 0;
    let condition = true;

    for (let i = 1; i < 20; i++){
        num1 = Math.pow(2,i) * (Math.pow(2, i+1)-1)
        if(input == num1){
            return `We have a perfect number!`;
        }
    }
    return `It's not so perfect.`;
}