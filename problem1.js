
// const numbers = [2,4,21,5,6,23,20,9]


// const max =Math.max(2,4,21,5,6,23,20,9)
// console.log(max)

// let biggest = numbers[0]
// console.log('before loop:', biggest)
// for (let i = 1; i < numbers.length; i++ ) {
//     console.log("current number:", numbers[i], "biggest number:", biggest)
//     if(numbers[i] > biggest){
//         biggest = numbers[i]
//     }
//     console.log("current biggest:", biggest)
// }
// console.log('after loop:', biggest)



// _________________Function use_____________________

function giveBiggestNumber(array) {
    let biggest = array[0]
    for (let i = 1; i< array.length; i++) {
        if(array[i] > biggest){
            biggest = array[i]
        }
        
    }
    return biggest
}
const numbers = [2,4,21,5,6,23,20,9]
const result = giveBiggestNumber(numbers)
console.log(result)