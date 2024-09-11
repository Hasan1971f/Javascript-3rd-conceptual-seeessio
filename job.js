const person1 = {
    name: "abul kashem",
    honours: 40,
    hsc: 30, 
    isFFfamily: true


}

const person2 = {
    name: "mokber mia",
    honours: 45,
    hsc: 32, 
    isFFfamily: false


}

function jobSelection(info) {
    if (typeof info !== "object") {
        return "invalid object"
    }
    let total_marks = info.honours + info.hsc
    
    if(info.isFFfamily){
         total_marks = total_marks + (total_marks * 0.2)
    }
    console.log( total_marks)
   
   
   
    if (total_marks >= 80){
    return "you got the job"
   }
   else{
    return "you faild"
   }
}
console.log(jobSelection(person1))
