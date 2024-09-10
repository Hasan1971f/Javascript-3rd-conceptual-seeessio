// ______________________Object_______________________
// amar nam Hasan, amar basa sirajgonj

function showInfo(info) {
    // jodi error massege chai taholey
    if(typeof info !== "object"){
        return "provide a valif object...!"
    }
    
    const result = "amar nam "+info.name+ ", amar basa "+info.address
    return result
}

const person = {
    name: "hasan",
    address: "sirajgonj" 
     
}
// valid object er result er jonno
// const x = showInfo("hello")
// const x = showInfo(person)
// console.log(x)



// hasan@sirajgonj.com

function creatEmail(info) {
    if(typeof info !== "object"){
        return "invalid object"
    }
    const result = info.name+"@"+info.address+".com"
    return result
}
console.log(creatEmail(person))