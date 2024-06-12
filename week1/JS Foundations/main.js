let a = 10;

for(let i=0; i<=100; i++){
    a += 1;
}
setInterval(()=>{console.log(a)}, 1 * 1000)

const users1 = {
    firstName: "Ankit",
    gender:"male"
}

console.log(users1["firstName"])

let arr = [{
    firstName: "Ankit",
    gender:"male"
},
{
    firstName: "Ankit",
    gender:"male"
}]


for(let i=0; i<arr.length; i++){
    console.log(arr[i]["firstName"])
}

function findSum(a,b){
    //...
    return a+b
}