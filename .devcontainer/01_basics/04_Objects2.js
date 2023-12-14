const TinderUser = new Object() // This is how we can write singleton objects
TinderUser.Id = "1234Abc"
TinderUser.Name = "Sammy"
TinderUser.LoggedIn = false

//console.log(TinderUser);

// Objects inside objests==
const regularuser = {
    email : "Hritik@gmai.com",
    Fullname :{
        userFullname :{
            firstname : "abc",
            lastname :"def"
        }
    }
}
//console.log(regularuser);



//How to add two obj

const obj1 = {a:"12", b:"24"}
const obj2 = {c:"12",d:"24"}

const obj3 = Object.assign({}, obj1, obj2)

//console.log(obj3);
const obj4 = {...obj1, ...obj2}
//console.log(obj4);

console.log(TinderUser);
console.log(Object.keys(TinderUser)); // it will only gives the values of the variables , will give the arry
console.log(Object.values(TinderUser)); //it will gives the values
console.log(Object.entries(TinderUser));// it will provide the value:key set in arry form
 console.log(TinderUser.hasOwnProperty('Logged')); //we can ask obj is this value available 