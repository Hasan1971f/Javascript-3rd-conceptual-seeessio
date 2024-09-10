
function calculateSavings(income) {
    if(typeof income !== "number"){
        return "invalid input"
    }
    const housRent = 5000
    const mealCost = 3000
    const personalExpense = 2000

    const totlExpense = housRent +  mealCost + personalExpense

    if (totlExpense > income) {
        return "Earn more"
    }

    const savings = income - totlExpense
    

    return savings
} 
const result =  calculateSavings(7000)
// const result =  calculateSavings("7000")
console.log(result)