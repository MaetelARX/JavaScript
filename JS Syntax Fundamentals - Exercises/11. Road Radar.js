function print(kilometers, area){
    let sum = 0;
    if (area == `motorway`){
        if (kilometers > 130){
            sum += kilometers - 130;

            if (sum <= 20){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 130 - speeding`)
            }
            else if (sum <= 40){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 130 - excessive speeding`)
            }
            else{
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 130 - reckless driving`)
            }
        }
        else{
            console.log(`Driving ${kilometers} km/h in a 130 zone`);
        }
    }
    else if (area == `interstate`){
        if (kilometers > 90){
            sum += kilometers - 90;

            if (sum <= 20){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 90 - speeding`)
            }
            else if (sum <= 40){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 90 - excessive speeding`)
            }
            else{
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 90 - reckless driving`)
            }
        }
        else{
            console.log(`Driving ${kilometers} km/h in a 90 zone`);
        }
    }
    else if (area == `city`){
        if (kilometers > 50){
            sum += kilometers - 50;

            if (sum <= 20){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 50 - speeding`)
            }
            else if (sum <= 40){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 50 - excessive speeding`)
            }
            else{
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 50 - reckless driving`)
            }
        }
        else{
            console.log(`Driving ${kilometers} km/h in a 50 zone`);
        }
    }
    else{
        if (kilometers > 20){
            sum += kilometers - 20;

            if (sum <= 20){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 20 - speeding`)
            }
            else if (sum <= 40){
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 20 - excessive speeding`)
            }
            else{
                console.log(`The speed is ${sum} km/h faster than the allowed speed of 20 - reckless driving`)
            }
        }
        else{
            console.log(`Driving ${kilometers} km/h in a 20 zone`);
        }
    }
}