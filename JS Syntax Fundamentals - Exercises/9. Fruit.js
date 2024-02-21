function print(fruit, weight, quantity){
    let sum = 0;
    weight /= 1000;
    sum += weight * quantity;

    console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}