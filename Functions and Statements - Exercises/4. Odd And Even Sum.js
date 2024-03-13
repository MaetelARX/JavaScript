function solve(number){
    let evenSum = 0;
    let oddSum = 0;
    const digits = Array.from(String(number), Number);
    for (let i = 0; i < digits.length; i++){
        if (digits[i] % 2 == 0){
            evenSum += digits[i];
        }
        else{
            oddSum += digits[i];
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}