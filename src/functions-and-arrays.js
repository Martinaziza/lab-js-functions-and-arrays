// Iteration 1 | Find the Maximum
//Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns
//  the bigger number.
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1
    }
}

// Iteration 2 | Find the Longest Word
//Implement the function findLongestWord that takes as an argument an array of words 
// and returns the longest one. If there are 2 with the same length, it should return 
// the first occurrence.

//The function should return null if an empty array is passed as an argument.


const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];


 let letterCount = 0;

function findLongestWord(arr) {
   if (!arr.length){
    return null
   }

   let longest = arr[0] 
    for (let i = 0; i < arr.length; i++) {   
     const currentWords = arr[i]
     if (currentWords.length > longest.length) {
        longest = currentWords
     }  
    }
    return longest
}




// Iteration 3 | Sum Numbers

// Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

// Implement the function named sumNumbers that takes an array of numbers as an argument and returns
//  the sum of all the numbers in the array. Later in the course, we will learn how to do this using the 
// reduce array method, making your work significantly easier. For now, let's practice the 
// "declarative" way of adding values using loops.
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    if (!array.length) {
        return 0
    }
    
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]
        
    }
    return total
}

// Iteration 4 | Numbers Average
//The logic behind this:

//Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?)
//Divide that sum by the number of elements in the array.

//Implement the function averageNumbers that expects an array of numbers and
// returns the average of the numbers.


const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArray) {
    if (!numbersArray.length){
        return 0
    }
    
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++){
        sum += numbersArray[i]
    }
    return sum/numbersArray.length
}

console.log(averageNumbers(numbers2))




// Iteration 5 | Find Elements
//Declare a function named doesWordExist that will take in an array 
// of words as one argument and a word to search for as the other. 
// Return true if the word exists in the array; otherwise, return false.

//The function should return null if an empty array is passed as an 
// argument.
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(searchArray, word) {
    if (!searchArray.length) {
        return null
    }
    for (i=0; i<searchArray.length; i++){
        if (searchArray.includes(word)){
            return true
        } else {
            return false
        }

    }
}
