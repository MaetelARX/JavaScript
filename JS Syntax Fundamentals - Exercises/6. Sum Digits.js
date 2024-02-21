function print(num){
    let numberString = String(num)
    let sum = 0;
    for (let i = 0; i < numberString.length; i++){
        sum += parseInt(numberString[i]);
    }
    console.log(sum);
}