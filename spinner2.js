process.stdout.write('hello from spinner1.js... \rheyyy\n');


let caracteres = ["|", "/", "-","\\","|","/","-","\\"]
let counter =1 

// console.log(caracteres[0], caracteres[1],  caracteres[2])
for (i = 0; i < 7 ; i++){
    setDelay(i)
} 
  function setDelay(i) {
    setTimeout(() => {
        process.stdout.write(`\r${caracteres[i]}`)
    }, 100 * counter)
    counter++ 
  }

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);


// setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r|   '); 
//   }, 800);

  
// setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r/   '); 
//   }, 900);

  
// setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r-   '); 
//   }, 900);

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   '); 
//   }, 1000);