// First Way
var o = new Object;
o.firstName = 'Ajayi';
o.lastName = 'Raphael';
o.age = 19;
o.isteaching = true;
o.greet = function() { console.log('Hi')}

// Second Way
var o2 = new Object;
o2['firstName'] = 'Ajayi';
02['secondName'] = 'Raphael';

// Third Way
o3 = {
    firstName = 'Raphael',
    secondName = 'Temitope',
    greet = function(){
        console.log ('hi')
    }
}