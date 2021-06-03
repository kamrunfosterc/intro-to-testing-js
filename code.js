// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    // return 'Say Hello';
    if (name === 'Jane'){
        return 'Hello, Jane!'; //ex 3
    } else if (name === 'Ashley') {
        return 'Hello, Ashley!';// ex 4
    } else if (name === 'Pat') {
        return 'Hello, Pat!';// ex 5 check
    }else {
        return 'Hello, ' + name + '!';
    }//  ex 6
    // git saved Ex 7
    else if (name === undefined){
        return "Hello, World!";//ex8
    }

    /* else if (name()){
        return 'Hello, World!'
    } */
    //return "Say, Hello";
}