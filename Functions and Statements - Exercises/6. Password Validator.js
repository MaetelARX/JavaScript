function solve(password){
    let count = 0;
    const regexNum = /\d/g;
    let condition = true;
    const regexNumAndLetters = /[A-Za-z0-9]*$/g;
    if (password.length < 6 || password.length > 10){
        console.log(`Password must be between 6 and 10 characters`);
        count++;
    }
    for (let i = 0; i < password.length; i++){
        if((password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0)<= 90)
        || (password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122)
        || (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57))
        {
            continue;
        }
        else{
            condition = false;
        }
    }

    if (condition == false){
        console.log("Password must consist only of letters and digits");
        count++;
    }
    const foundTwoDigits = password.match(regexNum);
    if(foundTwoDigits == null || foundTwoDigits.length < 2){
        console.log("Password must have at least 2 digits");
        count++;
    }

    if (count == 0){
        console.log(`Password is valid`);
    }
}