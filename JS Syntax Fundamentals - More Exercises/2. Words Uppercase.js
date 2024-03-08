function print(text){
    let result = "";
    for(let i = 0; i < text.length; i++){
        if(text[i] == "," || text[i] == "!" || text[i] == "?" || text[i] == "*" || text[i] == "%" || text[i] == "^"){
            continue;
        }
        if (text[i] == " " || text[i] == "."){
            result += ", ";
            continue;
        }
        result += text[i];
    }
    console.log(result.toUpperCase());
}
print('Functions in JS can be nested, i.e. hold other functions');