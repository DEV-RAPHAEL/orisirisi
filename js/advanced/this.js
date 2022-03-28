//The code below will create a function what is this 
function whatisthis(){
   //The code below show THIS which is also same as window in the console.
    console.log(this);
}
//The code below creates an object PERSON. and assigns some values to the VARIABLES FIRST NAME AND LAST NAME    
var person = {
    //This code was written by a 1 year, 3 days old girl.
    dara : 'I am a baby',
    //This code was written by a 1 year, 3 days old girl.
    firstname : 'Ajayi',
    lastname : 'Romeo',
    whatisthis: function(){
        console.log(this);
    },
    greet: function(){
        console.log('hi,' + this.firstname);
    },
    ask: function(){
        console.log('How are you today?' + this.lastname)
    }
};
person.whatisthis();
person.greet();
person.ask();

var student = {
    firstname : 'Bolanle',
    lastname : 'Pepper Them',
    greet: function(){
        console.log('hi,' + this.firstname);
},
}

/* student.greet = person.greet; */
/* student.greet(); */ 
var studentgreet = person.greet.bind(student);  
/* studentgreet();   */
//The code below writes out everything in tha student object
console.log(JSON.stringify(student))
person.greet.apply(student);
var music = {
    
}