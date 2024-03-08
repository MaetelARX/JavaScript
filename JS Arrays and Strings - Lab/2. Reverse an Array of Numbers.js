function print (n, input){
    let arr = [];

    for (let i = 0; i < n; i++){
        arr.push(input[i]);
    }
    arr.reverse();
    let result = "";
    for (let k = 0; k < arr.length; k++){
        if (k == arr.length - 1){
            result += `${arr[k]}`;
        }
        else{
            result += `${arr[k]} `;
        }
    }
    console.log(result);
}