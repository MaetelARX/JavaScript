function sub(num1, num2, num3){
    const sum = (a, b) => a + b; 
    const subtract = (a, b) => a - b;
    
    const result = subtract(sum(num1,num2), num3);
    return result;
}