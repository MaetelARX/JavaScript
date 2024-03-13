function solve(num){
    let result = "";
    for (let i = 0; i < num; i++){
        for (let k = 0; k < num; k++){
            if(k == num - 1){
                result += `${num}\n`;
            }
            else{
                result += `${num} `;
            }
        }
    }
    console.log(result);
}