function print(num1, num2){
    let text = "";
    let result = 0;
    for (let i = num1; i <= num2; i++){
        if(i == num2){
            text += `${i}`
        }
        else{
        text += `${i} `
    }
        result += i;
    }
    console.log(`${text}`);
    console.log(`Sum: ${result}`);
}