function print(number){
    let sum = 0;
    let text = String(number);
    let result = true;

    for (let k = 0; k < text.length; k++){
        sum += parseInt(text[k]);
    }

    for(let i = 0; i < text.length -1; i++){
        text[i] = parseInt(text[i]);
        text[i + 1] = parseInt(text[i + 1]);

        if (text[i + 1] != text[i]){
            result = false;
            break;
        }
    }
    console.log(result)
    console.log(sum);
}