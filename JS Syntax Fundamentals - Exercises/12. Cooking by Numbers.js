function print(num, op1, op2, op3, op4, op5){
    let number = Number(num);
    let operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0] 

    for (let i = 0; i < operations.length; i++){
        switch (operations[i]){
            case 'c':
                number /= 2;
                console.log(number);
                break;
            case 'd':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 's':
                number += 1;
                console.log(number);
                break;
            case 'b':
                number *= 3;
                console.log(number);
                break;
            case 'f':
                number -= number * 0.2;
                console.log(number);
                break;
        }
    }
}