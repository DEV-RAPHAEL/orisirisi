/* EXECUTION TASKS 
   BROWSER APIS
   FUNCTION QUEUE
   EVENT LOOP
*/
function printone() {
   console.log('1')

}
function printtwo() {
   console.log('2')
}
function printthree() {
   console.log('3')
}
setTimeout(printone, 3000);
setTimeout(printtwo, 1000);
printthree();
