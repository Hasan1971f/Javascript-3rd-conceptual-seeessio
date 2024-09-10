

// const x = [3,2,true,true,"hello",false,34,{name: "hasan"}]

// function countBoolean(arry) {
//     if (!Array.isArray(arry)) {
//         return "please provide valid arry"
//     }
//     let count = 0
//     for (let item of arry){
//         if (typeof item === "boolean") {
//             count++
//         }
//     }
//     return count
// }
// const result = countBoolean(x)
// console.log(result)



// Bus =50
// Micro = 15
// Rickshaw = 20tk

function rickshawVara(pepoles) {
    const bus = 50
    const micro = 15
    const rickshawcost = 20
    
   const remainAfterBus = pepoles % bus
  

   const remainAfterMicro = remainAfterBus % micro
   return remainAfterMicro * rickshawcost

}


console.log(rickshawVara(234))