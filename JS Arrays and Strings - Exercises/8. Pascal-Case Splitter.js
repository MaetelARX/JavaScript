function solve(template){
    const isUpperCase = str => str === str.toUpperCase();
    let result = `${template[0]}`;

    for(let i = 1; i < template.length; i++){
        if (isUpperCase(template[i])){
            result += ", ";
        }
        result += `${template[i]}`;
    }
    console.log(result);
}