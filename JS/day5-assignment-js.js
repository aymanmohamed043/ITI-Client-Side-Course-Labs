
// 1. Predict (in comments) the output order of this code, then run to verify.
console.log(a());
var b = function(){ return 'B'; };
function a(){ return 'A'; }
console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.

// Answer: A, B becsuse a() is a function so it called from every even b is variable function called after it's definition so two are work correctly


// 2. Rewrite a function declaration sum(a,b) into a
//  function expression stored in a variable named add and confirm both produce same result for (3,4).
function sum(a,b){
    return a + b;
}
const add = (a,b) => {
    return a + b;
}
console.log("Q2");
console.log(sum(3,4));
console.log(add(3,4));

// 3. Create a named function expression assigned to var factorial.
//  Use the internal name ONLY for recursion. Log factorial(5). 
// Show (comment) that the internal name is not global.

var factorial = function fact(n){
    if(n <=1 ){
        return 1;
    }
    return n * fact(n-1)
}
console.log("Q3");
console.log(factorial(5));
// console.log(fact(5)); // give me that multiply undefined 


// 4. Write a function showInfo that logs arguments.
// length and each argument. Call it with 0, then 2, then 5 arguments.

function showInfo(){
    console.log(arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log("--------------------------");
}

console.log("Q4");
showInfo();
showInfo(1,2,3);
showInfo(1,2,3,4,5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1]
//  before and after. Explain result in a comment.

function mutate(x,y){
    console.log("Before",x,y);
    console.log("Args Before",arguments[0],arguments[1]);
    x = 10;
    y = 20;
    console.log("After",x,y);
    console.log("Args After",arguments[0],arguments[1]);
}
console.log("Q5");
mutate(1,2); // inside function arguments are related to our locat vars so it changes they change too 


// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === "number"){
            sum += arguments[i];
        }
    }
    return sum  
}

console.log("Q6");
// console.log(sumAll());
console.log(sumAll(2,5,3));


// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll(){
    return Array.from(arguments).reduce((a,b) => a + b);
}
console.log("Q7");
// console.log(sumAll()); // give me error of empty array with reduce
console.log(sumAll(2,5,3));

// 8. Write describeValue that returns different strings based on number of 
// args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.

function describeValue(){
    if(arguments.length === 0){
        return "none";
    }else if(arguments.length === 1){
        return "one:" + arguments[0];
    }else if(arguments.length === 2){
        return "two:" + arguments[0] + "," + arguments[1];
    }else{
        return "too many";
    }
}
console.log("Q8");  
console.log(describeValue());
console.log(describeValue(1));
console.log(describeValue(1,2));
console.log(describeValue(1,2,3));

// 9. Create an array funcs of three small anonymous functions that transform a number.
//  Apply them in order to start = 10 (loop). Log final result.

const funcs = [function(a){return a*2;},function(a){return a*3;},function(a){return a*4;}];
let start = 10;
for (let i = 0; i < funcs.length; i++) {
    start = funcs[i](start);
}
console.log("Q9");
console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies.
//  Create double and triple; test with 7.
function makeMultiplier(factor){
    return function(n){
        return n * factor;
    }
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log("Q10");
console.log(double(7));
console.log(triple(7));

// 11. Implement once(fn) runs fn only first time,
//  returns its return value. Test with a function that logs and returns a string.

// function once(fn){
//     let called = false;
//     return function(){
//         if(!called){
//             called = true;
//             return fn();
//         }
//     }
// }

// function sayHi(){
//     return "Hi Ayman";
// }
// const sayHiOnce = once(sayHi);
// console.log("Q11");
// console.log(sayHiOnce());
// console.log(sayHiOnce());
// console.log(sayHiOnce());

// 12. (Bonus) Modify once so subsequent calls return the FIRST result
//  (like a memo of zero-arg function). Keep original version comment above for comparison.

function once(fn){
    let called = false;
    let result;
    return function(){
        if(!called){
            called = true;
            result = fn();
            return result;
        }else{
            return result;
        }
    }
}

function sayHi(){
    return "Hi Ayman";
}
const sayHiOnce = once(sayHi);
console.log("Q12");
console.log(sayHiOnce());
console.log(sayHiOnce());
console.log(sayHiOnce()); // closure so the inner remmember the result of the first call

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. 
// State stays private. Demonstrate two independent counters.

function makeCounter(start){
    let count = start;
    return {
        inc: function(){
            count++;
            return count;
        },
        dec: function(){
            count--;
            return count;
        },
        value: function(){
            return count;
        }
    }
}
const counter1 = makeCounter(10);
const counter2 = makeCounter(20);
console.log("Q13");
console.log(counter1.inc());
console.log(counter1.dec());
console.log(counter1.value());
console.log(counter2.inc());
console.log(counter2.dec());
console.log(counter2.value());

// 14. makeAdder(start) returns a function that adds its argument to internal total and
//  returns current total each call. Demonstrate separate instances.

function makeAdder(start){
    let total = start;
    return function(a){
        total += a;
        return total;
    }
}
const adder1 = makeAdder(10);
const adder2 = makeAdder(20);
console.log("Q14");
console.log(adder1(5));
console.log(adder1(5));
console.log(adder2(5));
console.log(adder2(5));

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).

function memoize1(fn){
    let cache = {};
    return function(a){
        if(a in cache){
            return cache[a];
        }else{
            cache[a] = fn(a);
            return cache[a];
        }
    }
}

function slowSquare(n){
    return n*n;
}
const memoizedSlowSquare = memoize1(slowSquare);
console.log("Q15");
console.log(memoizedSlowSquare(9));
console.log(memoizedSlowSquare(9));

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive
//  args by joining them with '|' as a key. Show with add3(a,b,c).

function memoizeN(fn){
    let cache = {};
    return function(...args){
        let key = args.join('|');
        if(key in cache){
            return cache[key];
        }else{
            cache[key] = fn(...args);
            return cache[key];
        }
    }
}

function add3(a,b,c){
    return a + b + c;   
}
const memoizedAdd3 = memoizeN(add3);
console.log("Q16");
console.log(memoizedAdd3(1,2,3));
// 17. Make object user with name and method sayHi logging 'Hi NAME'. 
// Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.

const user = {
    name: "Ayman",
    sayHi: function(){
        console.log("Hi " + this.name);
    }
}
console.log("Q17");
user.sayHi(); // Hi Ayman from the object 
const f = user.sayHi; // assigning the function to a variable
f(); // Hi as it take the method from the object only not related to it and not access its properties

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.

const user2 = {
    name: "Sara",
}
console.log("Q18");
user.sayHi.call(user2); 

// 19. Create greeter.greet(greeting,sign).
//  Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.

const greeter = {
    greet: function(greeting,sign){
        console.log(greeting + " " + this.name + sign);
    }
}
console.log("Q19");
greeter.greet.apply({name: "Ali"}, ["Hello","!"]);

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). 
// Call with different greetings.

const greetLara = greeter.greet.bind({name:"Lara"});
console.log("Q20");
greetLara("Hello","!");
greetLara("Hi","?");
greetLara("Bye",".");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).


// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.

// 28. Write code that tries to log x before let x = 5;.

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).

// 36. (write answers BEFORE running):
//     var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
//     var inc = obj.inc;
//     console.log(obj.inc());
//     console.log(inc()); 
//    Explain both lines.

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();

// 40. Write 2 things that were new or tricky today (comment).


