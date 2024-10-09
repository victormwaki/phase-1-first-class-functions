// 1) receivesAFunction: takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback(); // Calls the callback function
}

// Example callback function to pass in
function exampleCallback() {
    console.log("Callback function has been called!");
}

// Testing receivesAFunction
receivesAFunction(exampleCallback); // Output: "Callback function has been called!"

// 2) returnsANamedFunction: returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction; // Return the named function
}

// Testing returnsANamedFunction
const namedFunc = returnsANamedFunction();
namedFunc(); // Output: "I am a named function!"

// 3) returnsAnAnonymousFunction: returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}

// Testing returnsAnAnonymousFunction
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // Output: "I am an anonymous function!"
