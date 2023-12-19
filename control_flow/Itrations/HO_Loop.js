// for of loop
const arr = [1, 2, 3, 4, 5, 6]   // if for of loop there is not need to give conditions
for (const i of arr) {
    //console.log(i);
}
const greetings = "Hello Wolrd "  // if for of loop there is not need to give conditions
for (const i of greetings) {
    //console.log(`Each char is ${i}`);
}

// For Each loop
/*const coding  = ["js","java","cpp","py"]
coding.forEach( function (item){
    console.log(item);

})*/


 //Objects in array
const mycoding  =[
    {
        languagename : "javascripte",
        languagefilename : "js"
    },
    {
        languagename : "python",
        languagefilename : "py"
    },
    {
        languagename : "rubby",
        languagefilename : "rb"
    }
]
mycoding.forEach( function(item){
    console.log(item.languagefilename);
})
