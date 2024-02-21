function print(number, group, day){
    let result;
    if (group == 'Students'){
        if (day == `Friday`){
            result = number * 8.45;
        }
        else if (day == `Saturday`){
            result = number * 9.80;
        }
        else{
            result = number * 10.46;
        }

        if (number >= 30){
            result *= 0.85;
        }
    }
    else if (group == 'Business')
    {
        if (number >= 100){
            number -= 10;
        }
        if (day == `Friday`){
            result = number * 10.90;
        }
        else if (day == `Saturday`){
            result = number * 15.60;
        }
        else{
            result = number * 16;
        }
    }
    else{
        if (day == `Friday`){
            result = number * 15;
        }
        else if (day == `Saturday`){
            result = number * 20;
        }
        else{
            result = number * 22.50;
        }
        if (number >= 10 && number <= 20){
            result *= 0.95;
        }
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}