function makeHello() {
    var message = 'Hello, World';

    function logMessage() {
        console.log(message);
    }
    return logMessage;
}

var sayHello = makeHello();

sayHello();
