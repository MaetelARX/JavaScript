function solve(order, quantity){
    if (order == "coffee"){
        console.log(`${(quantity * 1.50).toFixed(2)}`);
    }
    else if (order == "water"){
        console.log(`${(quantity * 1.00).toFixed(2)}`);
    }
    else if (order == "coke"){
        console.log(`${(quantity * 1.40).toFixed(2)}`);
    }
    else{
        console.log(`${(quantity * 2.00).toFixed(2)}`);
    }
}