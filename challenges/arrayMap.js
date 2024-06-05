/*
 Contiguous sub-array with a given sum.
 */

/*
Approach: Sliding Window technique with a hash map to store the sums we have so far
 */

/**
 *
 * @param arr
 * @param target
 * @return {boolean}
 */

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

const test = () => {
    const tests = [
        { arr: [1, 2, 3, 4, 5], target: 9, expected: true },
        { arr: [1, 2, 3, 4, 5], target: 20, expected: false },
        { arr: [1, 2, 3, 4, 5], target: 15, expected: true },
        { arr: [1, 2, 3, 4, 5], target: 4, expected: true },
        { arr: [1, -1, 2, -2, 3, -3, 4], target: 0, expected: true },
        { arr: [], target: 0, expected: false },
        { arr: [1, 2, 3, 4, 5], target: 50, expected: false },
        { arr: [10, 20, -10, 30, 40], target: 50, expected: true },
        { arr: [-5, 5, -5, 5], target: 0, expected: true },
        { arr: [10, -10, 10, -10, 10], target: 10, expected: true },
        { arr: [4, 2, 7, 1, 9, 5], target: 17, expected: true }
    ];


    let allTestsPassed = true;

    tests.forEach((test, index) => {
        const result = hasSum(test.arr, test.target);
        if (result === test.expected) {
            console.log(`✅ Test ${index + 1} Passed`);
        } else {
            console.log(`❌ Test ${index + 1} Failed`);
            allTestsPassed = false;
        }
    });

    if (allTestsPassed) {
        console.log("✅ All tests passed!");
    } else {
        console.log("❌ Some tests failed.");
    }
}

test();