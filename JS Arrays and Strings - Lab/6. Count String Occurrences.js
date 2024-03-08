function print(string, searchedWord){
    let words = string.split(' ');
    let counter = 0;
    for (let element of words){
        if (element == searchedWord){
            counter ++;
        }
    }
    console.log(counter);
}