// 1- Write a function that greets a user, using a default parameter for the name.
function greeting(user="user"){
    console.log(`Hello ${user}`)
}
console.log("Q1")
greeting()
greeting("ayman")

// 2- Write a function that calculates the total price with a default tax rate parameter.
function totalPrice(price, tax=.1){
    return price * (1 + tax)
}

console.log("Q2")
console.log(totalPrice(120))
console.log(totalPrice(120, .1))
console.log(totalPrice(120, .5))


// 3- Write a function that creates a user object, using a default role parameter.
function createObject(uName="user", uAge=21){
    return {
        name: uName,
        age: uAge
    }
}
console.log("Q3")
console.log(createObject())
console.log(createObject("ayman", 24))
// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiply (...nums){
    return nums.reduce(function(total, el){
        return total *= el
    })
}

console.log("Q4")
console.log(multiply(1,2,3))
console.log(multiply(1,2,3,4,5))
console.log(multiply(1,2,3,4,5,6))

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function operation(a, ...nums){
    return a * nums.reduce(function(total, el){
        return total += el
    })
}

console.log("Q5")
console.log(operation(1,2,3))
console.log(operation(1,2,3,4,5))
console.log(operation(1,2,3,4,5,6))

// 6- Write a function that takes a variable number of strings and returns
//  them as a single array using the rest operator.

function returnArray(...els){
    return els
}

console.log("Q6")
console.log(returnArray("1", "2", "3", "4"))

// 7- Create a new array by combining two arrays using the spread operator.
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let newArr = [...arr1, ...arr2]
console.log("Q7")
console.log(arr1)
console.log(arr2)
console.log(newArr)

// 8- Copy an array using the spread operator.
let arr3 = [1,2,3]
let arr4 = [...arr3]

console.log("Q8")
console.log("Before Edit")
console.log(arr3)
console.log(arr4)
console.log("After Edit")
arr4[0] = "hi"
console.log(arr3)
console.log(arr4)
// 9- Merge two objects into one using the spread operator.
let obj1 = {
    name: "ayman",
    age: 24
}

let obj2 = {
    gradauation: 2024
}
console.log("Q9")
console.log(obj1)
console.log(obj2)
console.log({...obj1, ...obj2})
// 10- Update a property in an object using the spread operator to create a new object.
console.log("Q10")
console.log({...obj1, ...obj2, name:"ahmed"})

// 11- Destructure an array to get the first and second elements into variables.
let arr5 = ["red", "green", "blue"]
let [main, second, third] = [...arr5]
console.log("Q11")
console.log(main, second, third)

// 12- Destructure an array to get the first element and the rest into another array.
let arr6 = ["red", "green", "blue"]
let [first, ...other] = [...arr6]
console.log("Q12")
console.log(first, other)

// 13- Destructure an object to extract two properties into variables.
let person = {...obj1, ...obj2} // {name: 'ayman', age: 24, gradauation: 2024}
let {name:pName, age} = {...person}
console.log("Q13")
console.log(pName, age)

// 14- Destructure an object and rename the extracted properties.
let {name:property1, age: property2} = {...person}
console.log("Q14")
console.log(property1, property2)
// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function extractData(obj, ...property){
    let data = []
    for (let p of property){    
         let {[p]: value} = {...obj}
         data.push(value)
    }
    return data
}

console.log("Q15")
console.log(extractData(person, "name", "age", "gradauation"))
console.log(extractData(obj1, "age"))
