console.log("This is tutorial 44");


// Pretend this is coming from server as response
let a = "Harry Bhai";
a = undefined;
if(a != undefined){
   throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}

try {

    // jkdhhd
    console.log("We are inside try block");
    functionHarry();
    
}catch (error) {
    console.log("Are you okay?");
    console.log(error.message);
    
}finally{
    console.log("Finally we will run this")
}