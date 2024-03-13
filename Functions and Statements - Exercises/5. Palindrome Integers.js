function solve(arrNumbers){
    const num = String(arrNumbers);
    const reversed = num.split(",");

    for (let i = 0; i < reversed.length; i++){
        let text = reversed[i];
        let reverseText = "";
        
        for(let k = text.length - 1; k >= 0; k--){
        reverseText += `${text[k]}`;
        }
        if (text == reverseText){
            console.log(`true`);
        }
        else{
            console.log(`false`);
        }
    }
}