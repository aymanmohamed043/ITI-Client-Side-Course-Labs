// 1. Convert the string "258.90" to: (a) integer, (b)floating number. Store in two variables.

var strNum = '258.90';
var myIntger = parseInt(strNum);
var myFloat= parseFloat(strNum);

console.log(myIntger, myFloat);


// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
var strNum = '7.45678';
var myStringNumber = Number(strNum).toFixed(2);

console.log(myStringNumber, + myStringNumber);

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.

console.log(isNaN('abc')); // true
console.log(isNaN(' ')); // false

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.

console.log((.1 + .2).toFixed(1));
console.log(typeof (.1 + .2).toFixed(1));


// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px")
//  returning the integer part or null if it starts with non-digit.

function getNumber(value){
    var output = parseFloat(value);

    if (Number.isNaN(output)){
        return null
    }

    else{
        return output
    }
}

console.log(getNumber('12a'))
console.log(getNumber('a12'))


// 6. Implement isFiniteNumber(value) that returns true
//  only for finite numeric values
//  (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite.
//  Provide 4 passing and 4 failing test examples (comments).

function isFiniteNumber(value){
    if (+value === value){
        console.log(true)
    }

    else{
        console.log(false)

    }
}

isFiniteNumber(12)         // true
isFiniteNumber(900000)     // true
isFiniteNumber(-1)        // true
isFiniteNumber(0)         // true
isFiniteNumber('12')       //false
isFiniteNumber(NaN)       //false
isFiniteNumber(null)      //false
isFiniteNumber(undefined) //false 

// 7. Remove leading and trailing spaces from the string "   hello world  ".

console.log("   hello world  ".trim())

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).

console.log("javascript".slice(4))
console.log("javascript".substring(4))

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).

console.log("Banana Mania".split('a').length-1)


//10. Write a function reverseString(s) without using array reverse (iterate backwards).

function reverseString(s){
    return s.split(" ").reduce((function(acc, word){
     return word + " "+ acc
    }))
}

var s = 'Hello From JavaScript'

console.log(reverseString(s))

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".

function capitalizeWords(sentence){
    var myString = [];
    for (var word of sentence.split(" ")){
        myString.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    console.log(myString.join(" "));
}


capitalizeWords("hello there friend")


// 12. Extract the domain (without protocol and path) from a 
// URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.

var url ="https://example.com/path/to/page"
var start = url.indexOf('/') + 2 
var newUrl = url.slice(start)


console.log(newUrl.slice(0, newUrl.indexOf('/')))


// 13. Implement a simple substring search function naiveIndexOf(haystack, needle)
//  that returns first index or -1 (do not call built-in indexOf inside the loop).

function naiveIndexOf(haystack, needle) {
    return haystack.indexOf(needle)
}

console.log(naiveIndexOf("javascript", "m"))
console.log(naiveIndexOf("javascript", "a"))

// 14. Buggy code: 
var s = 'hello';
if (s.toUpperCase = 'HELLO') {
     console.log('match'); }  // Fix and explain issue.


// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.

var arr = [1, 2, 3, 4, 5]

arr.push(6)
arr.unshift(0)

console.log(arr)

// 16. Remove the last element and store it. Remove the first element and store it.

var lastNumber = arr.pop()
var firstNumber = arr.shift(0)

console.log(arr, firstNumber, lastNumber)

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.

var arr = [10,20,30,40,50]

var newArr = arr.slice(0, 3)

console.log(newArr)

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].

var arr = [1, 2, 3, 4, 5]

arr.splice(2, 2, 'a', 'b')

console.log(arr)

// 19  Demonstrate the difference between slice and splice on the same starting array (show original after each).
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("Slice: ", arr.slice(3)) 
console.log("Original after Slice: ", arr) 
console.log("Splice: ", arr.splice(3)) 
console.log("Original after Splice: ", arr) 



// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.

var arr = [];
arr[7] = 7;

console.log(arr.length)

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).

function compact(array){
    var newArr = []
    for(var n of array){
        if(n){
            newArr.push(n)
        }
    }

    console.log(newArr)
}

compact([0, null, NaN, 12, 'ayman'])


// 22 Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .

a = [1, 2, 3, 4]
b = []
for (n of a ){
    b.push(n)
}

b.push('b')

console.log(b)
console.log(a)

//23  Map [1,2,3] to their squares using map.

arr = [1, 2, 3]

function square(n){
    return Math.pow(n, 2)
}
console.log(arr.map(square))


// 24. Filter [5,10,15,20] to keep values >= 12.

console.log([5,10,15,20].filter(function(n){
    if(n >= 12){
        return n
    }
}))

// 25. Reduce [2,4,6] to product.

console.log([2, 4, 6].reduce(function(total, num){
    return total * num
},1))



// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.

var arr = [1, 2, 3, 4, 5];
console.log(arr.reduce(function(total, num){
    return total + num
},0))

var sum = 0;

for (n of arr){
    sum = sum + n
}

console.log(sum)

//27. Implement arrayProduct(a) using reduce; 
// then implement arrayProductLoop(a) using a for loop. Confirm outputs equal.
var arr = [1, 2, 3, 4, 5];
console.log(arr.reduce(function(total, num){
    return total * num
},1))

var total = 1;

for (n of arr){
    total = total * n
}

console.log(total)

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set).
//  Complexity target: O(n^2) acceptable; comment how to improve.

var arr = [1, 3, 2, 2, 3, 4, 4, 1]

var uniqueArr = []

for(n of arr){
    if(uniqueArr.indexOf(n) === -1){
        uniqueArr.push(n)
    }
}
console.log(arr)
console.log(uniqueArr)

//29. Flatten one level: flatten1([1,[2,3],[4],5]) =>
//  [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).

var arr = [1, [2, 3], [4], 5]
var newArr = []

for(n of arr){
    if(typeof n === 'number'){
        newArr.push(n)
    }
    else{
        for (m of n){
            newArr.push(m)
        }
    }
}

console.log(arr)
console.log(newArr)

// 31. Create object person with name and age; add a new property city after creation.
var person = {
    name :'ayman',
    age  : 24, 
}

console.log(person)
person['city'] = 'Qena'
console.log(person)

// 32. Access a property via bracket notation with a dynamic key variable.

var userName = 'name'

console.log(person[userName])

// 33. Write function countKeys(obj) returning number
//  of own enumerable properties (use for-in).

function countKeys(obj){
    count = 0 
    for (key in person){
        count += 1
    }
    console.log(count)
}

countKeys(person)

// 39. List (as comments) 5 different values that coerce to false in ES5.

// 1- 0
// 2- null 
// 3- undefined 
// 4- NaN
// 5- ""
// 6- false


// 40. safeToBoolean(v): return true only if v is strictly true, 
// 'true', 1, or '1'; else false.

function safeToBoolean(v) {
    if (v === true || v === 'true' || v === 1 || v === '1'){
        return true
    }
    else{
        return false
    }
}

console.log(safeToBoolean(true))
console.log(safeToBoolean(1))
console.log(safeToBoolean('1'))
console.log(safeToBoolean('true'))
console.log(safeToBoolean('false'))
console.log(safeToBoolean(0))
console.log(safeToBoolean(false))


// 41. Create a Date for Jan 1, 2025 00:00 local.

var date = new Date(2024, 0, 1, 0, 0, 0)
console.log(date)


// 42. Get the current year from new Date().

console.log(Date().split(' ')[3])

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).

function daysBetween(d1, d2){
    console.log((Math.abs((d2 - d1)) / (1000*60*60*24)).toFixed(2))
}

daysBetween(new Date(), new Date(2025, 7, 23, 10, 42, 0))

// 44. Generate a random integer 1..100.

console.log(parseInt(Math.random() * 101))


// 45. Round 4.567 to nearest integer, round down, and round up (three results).

console.log("Round: " + Math.round(4.567))
console.log("Round Down: " + Math.round(4.467))
console.log("Round Up : " + Math.round(4.567))

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).

function randomIntArray(n, min, max){
    var arr = []
    for(var i = 0; i < n; i++){
        var randomNum = parseInt(Math.random() * 101)
        console.log("Random Number is: ", randomNum)
        if (randomNum < min){
            arr.push(randomNum + (min - randomNum))
        }
        else if(randomNum > max){
            arr.push(randomNum - (randomNum - max))
        }
        else {
            arr.push(randomNum)
        }
    }
    console.log(arr)
}

randomIntArray(5, 20, 80)




// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" 
// return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).

function parsePriceList(str){
    var obj = {}
    // split each element 
    for (element of str.split(";")){
        obj[element.split(":")[0]] = element.split(":")[1]
    }
    console.log(obj)
}
parsePriceList("Apple:2.50;Orange:1.75;Banana:3")

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort 
// ascending (provide sample input and output). Use a numeric compare fn.

function filterAndSortNumbers(mixedArray){
    var finiteArray = mixedArray.filter(function(n){return Number.isFinite(n)})
    console.log(finiteArray.sort(function(a,b){return a-b}))
}

var mixedArray = [10, "20", NaN, Infinity, -5, "hello", 3.5, -Infinity, null, 0];

filterAndSortNumbers(mixedArray)














