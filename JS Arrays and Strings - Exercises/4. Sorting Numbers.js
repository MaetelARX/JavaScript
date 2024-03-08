function print(arr){
    let result = [];
    const sorted = arr.sort((a, b) => a-b);

    while(arr.length > 0){
        let firstElement = sorted.shift();
        let lastElement = sorted.pop();

        result.push(firstElement);

        if(lastElement){
            result.push(lastElement);
        }
    }
    return result;
}