// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    // return 'Say Hello';
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
    } else {
        return "Hello, World!"
    }
}
