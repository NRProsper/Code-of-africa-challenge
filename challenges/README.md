# Javascript Challenges
## 1. Coding Challenge 1:  Array manipulation
Given an array of integers and a target sum, determine if there exists a contiguous
subarray within the array that sums up to the target. Return true if such a subarray exists,
otherwise return false.

### Approach
Sliding Window technique with a hash map to store the sums we have so far

```
function hasSum(arr, target) {
    let currentSum = 0;
    const prefixSums = new Map();

    for(let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if(currentSum === target) {
            return true
        }
        if(prefixSums.has(currentSum - target)) {
            return true;
        }
        prefixSums.set(currentSum, i)
    }
    return false;
}

```

## 2. Coding Challenge 2: String manipulation
Given a string, transform it based on the following rules:

● If the length of the string is divisible by 3, reverse the entire string.

● If the length of the string is divisible by 5, replace each character with its ASCII code.

● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
both operations in the order specified above.

### Approach
Basic conditional check and string manipulation approach

```
function stringTransform(str) {
    const length = str.length;

    if (length % 15 === 0) {
        return str.split('').reverse().map(char => char.charCodeAt(0)).join('');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join('');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else {
        return str;
    }
}

```
I assume that the end users have nodejs installed on their computers

# Steps to run this files
If you have nodejs installed:
1. clone the repo
2. `cd` into the repo
3. run `node [nameofthefile] ` e.g. `node arrayMap.js`
4. Enjoy!