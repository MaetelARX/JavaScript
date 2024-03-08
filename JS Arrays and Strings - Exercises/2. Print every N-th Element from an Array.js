function print(arr, count){
    let newarr = []
    for(let i = 0; i < arr.length; i+= count){
        newarr.push(arr[i])
    }
    return newarr;
}