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