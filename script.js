let numbers = [4,5,3,5,"7",9];


function doubleTheElements(numbers) {
    for (let index = 0; index<numbers.lenght; index++ ){
        numbers [index]=numbers[index]*9
    }
    return numbers 
}
let numbersInput = [4,5,3,5,"7",9];
let numbersOutput = doubleTheElements (numbersInput);
console.log("Double array",numbers);
console.log("numbers",numbers[4]);
