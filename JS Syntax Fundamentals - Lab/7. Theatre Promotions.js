function print(day, number){
    let result;
    if (number > 122 || number < 0){
        console.log("Error!");
        return;
    }
    if(day == "Weekday"){
        if (number <= 18 || number > 64){
            result = 12;
        }
        else{
            result = 18;
        }
    }
    else if (day == "Holiday"){
        if (number <= 18){
            result = 5;
        }
        else if (number > 64){
            result = 10;
        }
        else{
            result = 12;
        }
    }
    else if (day == "Weekend"){
        if (number <= 18 || number > 64){
            result = 15;
        }
        else{
            result = 20;
        }
    }
    console.log(`${result}$`);
}