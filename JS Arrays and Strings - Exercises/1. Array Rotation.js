function print(arr, count){
    for(let i = 0; i < count; count--){
        arr.push(arr[i]);
        arr.shift();
    }
    console.log(arr.join(' '));
}