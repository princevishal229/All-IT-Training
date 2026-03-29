console.log("This is tutorial 37");

// Pretend that response is coming from the server
const students = [
    {name: "harry", subject:"Javascript"},
    {name: "Rohan", subject:"Machine Learning"}

]

 
 function enrollStudent(student){
    return new Promise(function(resolve,reject){

        setTimeout(function()  {
            students.push(student);
            console.log("Students has been enrolled");
            
            const error = false;
            if(!error){
                
                resolve('Everything is fine');
    
            }
            else{
    
                reject('Error: Something went wrong');
    
    
            }
            
            }, 5000);
        });


}
    



  function getStudents(){
    setTimeout(function()  {
        let str =""
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
       });
 
       document.getElementById('students').innerHTML = str;
       console.log("Students have been fetched");

        }, 1000);


  }

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("The error occured")
});
//getStudents();



