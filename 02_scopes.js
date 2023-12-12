
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER", a); 
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(params) {
    const username = 'Zeeshan'
    function two(params) {
        const website = "Youtube"
        console.log(username);
    }
   // console.log(website);

   two()


}
// one()

if (true) {
    const username = "Zeeshan"
    if (username === "Zeeshan") {
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    // console.log(username);
}

// console.log(username);



// +++++++++++++++++++++++++ intersting  +++++++++++++++
// console.log(addone(5))

// function addone(num) {
//     return num +1 
// }


// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }


const str1 = "addOne"

console.log(str1.slice(3,6));
console.log(str1);