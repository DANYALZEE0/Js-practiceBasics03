const user = {
    username: "Zeeshan",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hey ${this.username} , Welcome to My app. `);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "Zaid"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//      let username = "Zeeshan"
//     console.log(this.username);
// }
// chai()
//  const chai = function(){
//     let username = "Zeeshan"
//     console.log(this.username);
//  }


// const chai = () => {
//     let username = "Zeeshan"
//     console.log(this);
//  }
//  chai()

// const addTwo = (num1, num2) =>  num1 + num2
    
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "Zeeshan"})
    

console.log(addTwo(3,4));

const myArr = [1,2,3,6,5]