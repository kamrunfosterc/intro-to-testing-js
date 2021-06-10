// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(parameter){
    var name = parameter;
    // if (name === undefined || name === true || name === false)

    if (typeof name === "string") { //could also make (typeof name === "string" && isNaN(name))
        if( isNaN(name)){ //nested if statement
            //checks for "", "bob", "6" ... bob goes to name input
            return "Hello, " + name + "!";
        }
        return "Hello, World!";// might be good with out

    }
    return "Hello, World!";
}

/* alternatively
   if (typeof name !== "string") {
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
    */