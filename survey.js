const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function questions(q){
    return new Promise((cbfn, errorfn) => {
        rl.question(q, (u) =>{
            cbfn(u)
        }, () => {
            errorfn
        })
    })
}


async function survey(){
    await questions("What do you think of Node.js?")
    await questions("What do you think of JavaScript?")
rl.close();


}   
survey()
// rl.question('What do you think of Node.js? ',(answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//  } );


// rl.question('What do you think of JavaScript? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });