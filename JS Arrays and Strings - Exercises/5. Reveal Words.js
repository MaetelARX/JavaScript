function solve(wordsInput, template){
    const words = wordsInput.split(`, `);
    let startIndex = -1;
    let endIndex = -1;
    
    for (let i = 0; i < template.length; i++){
        if(template[i] === `*`){
            if(startIndex < 0){
                startIndex = i;
                endIndex = i + 1;
            }
            else{
                endIndex = i + 1;
            }
        }
        else{
            if (startIndex >= 0) {
                let lenght = endIndex - startIndex;
                let word = words.find(w => w.lenght === lenght);
                template = template.replace('*'.repeat(lenght), word);
                startIndex = -1;
                endIndex = -1;
            }
        }
    }
    console.log(template);
}
solve('great','softuni is ***** place for learning new programming languages');