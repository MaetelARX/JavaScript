function print(arr){
    let odd = 0;
    let even = 0;

    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);

        if (arr[i] % 2 != 0){
            odd += arr[i]
        }
        else {
            even += arr[i]
        }
    }
    console.log(even - odd);
}