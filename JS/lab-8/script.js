// 1. Create a module file called 'utils.js' that exports 
// a function named 'greetUser' which takes a name parameter and returns "Hello, 
// [name]!". Then import and use this function in another file.
import DataFetcherClass, { greetUser } from "./utils.js";

console.log("Q1")
console.log(greetUser())
console.log(greetUser("ayman"))


// 2. Write a Promise that resolves after 2 seconds with the message
//  "Task completed!". Use .then() to log the result to the console.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Task completed!")
    }, 2000)
})

myPromise.then(function(value){ 
    console.log(value)
})


// 3. Create an async function called 'waitAndGreet' that uses setTimeout with 
// a Promise to wait 1 second, then returns "Welcome!".

function waitAndGreet(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Welcome")
    }, 1000)
})
}

async function welcome(){
    let w = await waitAndGreet()
    console.log(w)
}
welcome();

// 4. Write an async function that fetches user data from 
// 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.

async function fetchDate() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        let data = await response.json()
        console.log("Get data succesfully")
        console.log("Data", data);
        console.log("name", data.name);
        console.log("email", data.email);
    } catch (error) {
        console.log("error", error);
        
    }
}

fetchDate();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' 
// and returns only their titles as an array.

async function fetchDate2() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log("Get data succesfully from 2")
        console.log("Data 2", data);
        for(let i= 0; i<3; i++){
            console.log("title", i, ":- ", data[i].title);
        }
        // console.log("name", data.name);
        // console.log("email", data.email);
    } catch (error) {
        console.log("error", error);
        
    }
}
fetchDate2();

// 6. Create a simple timer function using Promise that counts from 1 to 3,
//  logging each number after 1 second intervals.
const count = new Promise((resolve, reject) => {
      let total = 0;
      for (let i = 1; i <= 3; i++) {
          setTimeout(() => {
              ++total
              console.log(`count is ${total}`);
            }, 1000);
        }
})

count.then(function(){ 
    console.log()
})

// 7. Write a function that safely parses JSON data with try/catch. 
// Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.

function parseJson(obj){
    try {
        JSON.parse(obj)
        return true
    } catch (error) {
        return false
    }

}

console.log("valid json:  ",parseJson('{"name": "Omar"}'))
console.log("valid json:  ",parseJson('{name: Omar}'))

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos',
//  converts it to JSON, and returns the count of completed todos.
async function fetchDate3() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        let data = await response.json()
        console.log("Get data succesfully from todo lists")
        console.log("completed tasks : ");
        for(let l of data){
            if (l.completed === true){
                console.log(l)
            }
        }
    } catch (error) {
        console.log("error", error);
        
    }
}

fetchDate3()

// 9. Build a simple module that exports a default class called 'DataFetcher' 
// with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
let url = "https://jsonplaceholder.typicode.com/posts"


let fetcher = new DataFetcherClass(url)
console.log(await fetcher.getUser(2))
