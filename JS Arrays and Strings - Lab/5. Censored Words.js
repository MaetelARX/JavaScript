function print(input, censored){
    let index = input.indexOf(censored);
    while (index >= 0){
        input = input.replace(censored, '*'.repeat(censored.length));
        index = input.indexOf(censored);
    }
    console.log(input);
}