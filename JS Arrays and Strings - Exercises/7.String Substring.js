function solve(word, template){
    let words = template.split(" ");

    for (let i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
        if(words[i] === word){
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}