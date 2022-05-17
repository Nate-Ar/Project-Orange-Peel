function sig() {
    let des = 0;
    let fake = 0;
    // getting number
    let numb = document.getElementById('siginput').value;
    // separate each digit
    let numbSep =[];

    for(i=0;i<numb.length;i++){
        let temp = parseInt(numb[i]);
        if (isNaN(temp) == true && numb[i] == '.'){
            des = i
            numbSep.push(numb[i]);
        }else {
            numbSep.push(parseInt(numb[i]));
            if (isNaN(numbSep[i]) == true){
                document.getElementById('sigE').innerHTML='Err What you have entered is not a number if in is in scientific notion plz convert and renter';
                numbSep.pop();
                numbSep = [];
                break
            }
        }
        console.log(des)

    }
    if (des == 0){
        numbSep.push('.')
        des = numbSep.length-1
        fake++
    }
    // Math Part

    // removing leading zeroes/sandwiches
    let leading = []
    for (x=0;x<numbSep.length;x++){
            if (numbSep[x] == 0 && x < des && numbSep[x+1] == 0){
                leading.push(x)
                // take out the zero only on the firest rule
            }
    }
    if (leading.length >= 1){
        leading.push(leading.length);
        let temp = leading.length;
        numbSep.splice(0,temp)
    }else {
        if (numbSep[0] == 0){
            numbSep.shift()
        }
    }
    // special casees
    if (fake == 1){
        if (numbSep[numbSep.length-2] == 0){
            numbSep.pop()
        }
        numbSep.pop()
    }
    // rule number 4 zeroes after the decimal

    console.log(numbSep);
    console.log(fake)
}
