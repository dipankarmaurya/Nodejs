console.log('I am from utility.js');

let fname = "dipankar";

// use to exports specific variable so that we can use this 
// module.exports = fname;

// we can exports function and objects

let sum = (a, b)=>{
    return a + b;
}

module.exports = sum;