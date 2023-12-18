/*const user = {
    username: "hritik",
    Price: 999,

    welcomeMessage : function(){ 
        //console.log('${this.username},welcome to website');
        console.log(this);

    }
}*/

//user.welcomeMessage ()

//user.username = "Sam"
//user.welcomeMessage()

/*function chai(){
    
    console.log(this)  // when we print this outside the function it will give {} empty 
}                       //when we print this inside the finction it will give lots of values  
chai()*/                     // can not use this in function it noly used in obj

/* () => {} //str of arrow function
const addTwo = (num1,num2) => {
return num1 + num2   // when we use return its explisit return
//}
console.log(addTwo(6, 6))*/

const addTwo = (num1, num2) => (num1 + num2) //its same as above  but this asha linyala implisite return
console.log(addTwo(6,6)) 