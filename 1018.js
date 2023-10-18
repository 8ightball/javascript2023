function printHello() {
  console.log('Hello');
  console.log('Good Morning');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  console.log(childMessage);
}