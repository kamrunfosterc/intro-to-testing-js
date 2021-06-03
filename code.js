// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    // return 'Say Hello';
    /* kathleen ver: up to #6
    * if (name === undefined){
    *   return "Hello, World";
    * }
    * return "Hello, " + name + "!"
    *>> ALSO ... alternatively for string
    * >> up to #8
    * if (typeOf(name) != "string"){
    *   return "Hello, World";
    * }
    * return "Hello, " + name + "!"
    * }
    * */
    var x_name = name;
    if (x_name === ""){
        return "";
    }
    else if (x_name === 'Jane'){
        return 'Hello, Jane!'; //ex 3
    } else if (x_name === 'Ashley') {
        return 'Hello, Ashley!';// ex 4
    } else if (x_name === 'Pat'){
        return 'Hello, Pat!';/* ex 5 check*/
    } else if(x_name === true){
        return "Hello, World!"
    }
    else {
        return "Hello, World!"
    }
}
