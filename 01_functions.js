

function satMyNAme(params) {
    console.log("Z");
    console.log("E");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

// satMyNAme()

// function AddTwoNumbers(Num1, Num2) {
//     console.log(Num1 + Num2);
// }

function AddTwoNumbers(Num1, Num2) {
    // let Result = Num1 + Num2
   
    // return Result
  //  console.log("Zeeshan"); // bydefault After Return no value execute.
  return Num1+ Num2
}
const Result = AddTwoNumbers(3 ,5)
// console.log("Result:", Result);

function loginUserMessege(username = "sam") {
   //  if (username === undefined) {
    if (!username) {
        console.log("Please Enter yourname");
        return
    }
    return  `${username} just logged in`
    
}

// console.log(loginUserMessege("Zeeshan"));


// console.log(loginUserMessege(""));

// console.log(loginUserMessege());
//just logged in
 //undefined just logged in #outputs

//#Shoping cart Example

function calculaateCartPrice(val1 , val2, ...Num1) {
    return Num1
}
// console.log(calculaateCartPrice(200, 300, 600))

const user = {
    username: "Zeeshan",
    prices: 2356

}

function HandleObject(anyObject) {
   console.log(`UserName is ${anyObject.username} and Price is ${anyObject.price} `); 
}
// HandleObject(user)
HandleObject({
  username: "Zee",
  price: 399  
})




// const MynewArray = [200,300,400,600] 
function returnSecondValue(getArray) {
    return getArray[0]
}
// console.log(returnSecondValue(MynewArray))
console.log(returnSecondValue([900,300,400,600]))

