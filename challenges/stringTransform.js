

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


function test() {
    const tests = [
        { input: "Hello", expected: "72101108108111" },    // Length 5, replace with ASCII
        { input: "OpenAI", expected: "IAnepO" },           // Length 6, reverse the string
        { input: "transform", expected: "mrofsnart" },     // Length 9, reverse
        { input: "ABCDEFGHIJKLMNO", expected: "797877767574737271706968676665" }, // Length 15, reverse and replace
        { input: "abcdefghijk", expected: "abcdefghijk" }, // Length 11, no change
        { input: "abcdefghij", expected: "979899100101102103104105106" }, // Length 10, replace with ASCII
        { input: "abcde", expected: "979899100101" },      // Length 5, replace with ASCII
        { input: "abcdef", expected: "fedcba" },           // Length 6, reverse the string
        { input: "a", expected: "a" },                     // Length 1, no change
        { input: "", expected: "" }                        // Length 0, no change
    ];

    tests.forEach((test, index) => {
        const result = stringTransform(test.input);
        if (result === test.expected) {
            console.log(`✅ Test ${index + 1} passed`);
        } else {
            console.log(`❌ Test ${index + 1} failed: expected "${test.expected}", but got "${result}"`);
        }
    });
}

// Run the tests
test();