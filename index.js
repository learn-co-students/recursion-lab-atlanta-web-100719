// Code your solution here!
function printString(myString) {
    console.log(myString[0])
    if (myString.length > 1) {
        printString(myString.substring(1, myString.length));
    } else {
        return true;
    }
}

function reverseString(myString) {
    const lastLetter = myString[myString.length - 1]
    if (myString.length > 1) {
        return lastLetter + reverseString(myString.substring(0, myString.length - 1));
    } else {
        return lastLetter;
    }
}


function isPalindrome(myString) {
    // if outside are the same and inside is a palindrome 
    if (myString.length === 1) {
        return true;
    } else if ((myString.length === 2) && (myString[0] === myString[1])) {
        return true
    } else if (myString[0] === myString[myString.length - 1]) {
        return isPalindrome(myString.substring(1, myString.length - 1))
    } else {
        return false
    }

}

function addUpTo(myNums, i) {
    if ((i > 0) && (myNums.length > 1)) {
        return myNums[0] + addUpTo(myNums.slice(1), i - 1)
    } else {
        return myNums[0]
    }
}

function maxOf(myNums) {
    if (myNums.length > 1) {
        const largestNum = maxOf(myNums.slice(1))
        return (myNums[0] > largestNum) ? myNums[0] : largestNum
    } else {
        return myNums[0]
    }
}


function includesNumber(myNums, element) {
    if (myNums.length >= 1) {
        if (myNums[0] === element) {
            return true
        } else {
            return includesNumber(myNums.slice(1), element)
        }
    } else {
        return false
    }
}

console.log(includesNumber([1, 2, 3, 4], 4))