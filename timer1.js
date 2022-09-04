


let times = process.argv
let last = null;
function makeSound(i) {
    setTimeout(() => {

        process.stdout.write('\x07')   
    }, i * 1000)
  }

for (const t of times) {
    if(t < 0){
        last = t;

    }else if(t <= last){

    }else if(t == "" || t == null){
        last = t;

    }else{
        makeSound(t)
    }
}
   
