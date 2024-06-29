//defined a type
let x: number = 1;
console.log(x);

let y:any;

function greet(firstName: string){
    console.log("Hello");
}
//taking fn as input
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee1 implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}