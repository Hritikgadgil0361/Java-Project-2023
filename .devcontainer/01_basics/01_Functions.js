
function myfunction(){
console.log("hritik");
console.log("gadgil");
}
//myfunction()  //This is how functions exicutes if we ue return then we need to use console.log

function addtwono (number1, number2){
    let result = number1 + number2
    return result
    console.log(result)    // we can't print anything after return 
}
const result = addtwono(54, 78)
//console.log(result);

function calculateCardPrice (...num1){   // ... is used as a rest operater which gives all values which are in arguments in arry form

    return num1
}
//console.log(calculateCardPrice(256276, 26637, 672));

//how to pass obj in function
const user ={
    username : "hritik",
    Price: 199
}
function handleObject(anyobject){
    console.log('username is ${anyobject.username} and price is ${anyobject.Price}');
}
handleObject(user)

//how to pass array
const mynewarrya = [200,400, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(mynewarrya));

