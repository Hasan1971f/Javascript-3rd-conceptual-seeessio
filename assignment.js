

// Problem 1 BesT solutaion

// function calculateTax(income, expenses) {
//     if (0 >= income || 0 >=expenses || expenses > income ) {
//         return "invalid input"
//     }
//     const difference = income - expenses
//     const tax = difference * .20
//     return tax
// }
// console.log(calculateTax(34000, 1753))




// _______________________________________problem 2_________________________



function sendNotification(email) {
   if (email.indexOf("@") === -1) {
     return "invalid email"
   }
   const emailsplit = email.split('@')
   if (emailsplit.length === 2) {
      const emailUserName = emailsplit[0]
      const emailDomain = emailsplit [1]

      const emailNotification = emailUserName + ("sent you an email from") + emailDomain
      return emailNotification
   }
    
}
console.log(sendNotification("zihad@gmail.com"))




