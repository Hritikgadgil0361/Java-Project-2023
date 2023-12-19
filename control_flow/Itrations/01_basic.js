//for loop
for(let index = 0; index < 20; index++){
    if(index == 5){
        console.log("Print 5");
        break       // used to break the control flow 
    }
    console.log(index);
}
for(let index = 0; index < 20; index++){
    if(index == 5){
        console.log("Print 5");
        continue       // it allows to  continue the loop after its if condition
    }
    console.log(index);
}