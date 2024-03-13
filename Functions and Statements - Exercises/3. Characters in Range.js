function charRange(first, second){
    let result = "";
    if (first.charCodeAt(0) > second.charCodeAt(0)){
        for (let i = 1 + second.charCodeAt(0); i < first.charCodeAt(0); i++){
            if (i != first.charCodeAt(0) - 1){
                result += `${String.fromCharCode(i)} `;
            }
            else{
                result += `${String.fromCharCode(i)}`;
            }
        }
    }
    else{
        for (let i = 1 + first.charCodeAt(0); i < second.charCodeAt(0); i++){
            if (i != second.charCodeAt(0) - 1){
                result += `${String.fromCharCode(i)} `;
            }
            else{
                result += `${String.fromCharCode(i)}`;
            }
        }
    }
    return(result);
}