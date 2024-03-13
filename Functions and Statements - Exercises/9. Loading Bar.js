function loadingBar(number){
    let count = 10;
    let divide = number / 10;

    let leftBracket = "[";
    let rightBracket = "]";

    let result = leftBracket;
    for (let i = 0; i < divide; i++){
        result += "%";
    }
    count -= divide;
    for(let k = 0; k < count; k++){
        result += ".";
    }
    result += rightBracket;

    if (number == 100){
        console.log(`${number}% Complete!\n${result}`);
    }
    else{
        console.log(`${number}% ${result}\nStill loading...`);
    }
}