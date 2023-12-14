//object literals

const mysym = Symbol("Key1")
const Jsuser = {
    name : "Hritik",
    "Full name": "Hritik GAdgil",
    age : 23,
    [mysym] : "key1",  // Symbols are written in [] in objects 
    isLoggeIn : false,
    lastLoginDays : ["Monday","Saturdya"]
}
//console.log(Jsuser[mysym]);
//console.log(Jsuser.name);
//console.log(Jsuser["Full name"])
 Jsuser.age = 24 // this is how we can change variables in objects

 //Object.freeze(Jsuser) // used to freeze the object
Jsuser.age = 25
//console.log(Jsuser);
Jsuser.greeting = function(){
    //before using function we have to unFreeze the obj
    console.log("Hello Js User");
}

Jsuser.greetingTwo = function(){
    console.log('Hellow Js User , ${this.name}');
}
console.log(Jsuser.greetingTwo());