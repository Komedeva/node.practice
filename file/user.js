const variant  = 22;

function createUser  (name, age){
    logger (`Hello, my name is ${name} and I am ${age} years old`)
}
console.log(222)
function logger (string){
    console.log(string);
}

module.exports = {
    variant,
    createUser
}