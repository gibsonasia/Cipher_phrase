function cCipher (value, shiftNum){

    let encrypt= "" //empty string

    //loop through 
    for(let i = 0; i < value.length; i++){

        let letter = value[i]; //character value of the given index of the string

        //checks if letter is upper case used Decimal value of upper case letter to shitf
        if(letter.toUpperCase(encrypt[i])){
            let l = String.fromCharCode((letter.charCodeAt(0) + shiftNum - 65) % 26 + 65)
            encrypt += l;  //updates the encryption string with upper case value
        }
        else{
            //else if letter lower case use the Decimal value of lowercase letter to shift
            let l = String.fromCharCode((letter.charCodeAt(0)+ shiftNum-97) % 26 + 97)
            encrypt += l; //updates the encryption string with lower case value
        }
    }

    return encrypt;
    
}
//use of letters ASCII values
