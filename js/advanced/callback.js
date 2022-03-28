/* Control flows with Asynchronous calls*/
        /* setTimeout */
        /* XMLHttpRequest(), jQuery.ajax(), fetch() */
        /* Database calls */
/* Executes functions once asynchronous returns value */
    
//sIMUALTE fetching data from a db
function getUsersFromDatabase(callback){
        setTimeout(() => callback ({
                firstName :"Jordan", lastName : "Boss"
 }),1000);
}     

/* // query user from db and greet them
function greetUser(){
        var user = getUsersSync();
        console.log('hi'+ user.firstName)
} */
greetUser();