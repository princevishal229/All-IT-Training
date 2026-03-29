console.log("Ajax tutorial in one video");

// This code snippet demonstrates how to make an asynchronous HTTP request using the XMLHttpRequest object in JavaScript

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){

    console.log('You have clicked the fetchBtn');
    

    setTimeout(() => {
    
    // Instaniate an xhr object    
   
        const xhr = new XMLHttpRequest(); // An XMLHttpRequest object (xhr) is created. This object is used to interact with servers via HTTP.


   // open the object

   // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); // use this post request
    xhr.setRequestHeader('Content-type','application/json');


   // what to do on progress(optional)  This optional event handler is called periodically when the request receives more data.
   xhr.onprogress = function(){
      console.log('On Progress');


   }

//    xhr.onreadystatechange = function name(){
//     console.log('ready state is',xhr.readyState);


//    }


   // what to do when response is ready
   // The onload event handler is called when the request completes successfully.


   xhr.onload = function (){
       if(this.status === 200){
            console.log(this.responseText)

       }
       else{
         console.log("Some error occured")


       }


   }

   // send the request
   // The send method sends the request to the server.
   const params = JSON.stringify({"name": "test34sad545321", "salary": "123", "age": "23"});
   xhr.send(params);

   console.log("We are done");



}, 2000);

}


let popBtn = document.getElementById('popHandler');
popBtn.addEventListener('click',popHandler);


function popHandler(){

    console.log('You have clicked the pop Handler');
    

    setTimeout(() => {
    
    // Instaniate an xhr object    
   
        const xhr = new XMLHttpRequest(); // An XMLHttpRequest object (xhr) is created. This object is used to interact with servers via HTTP.


   // open the object

    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    


   

   xhr.onload = function() {
    if (xhr.status === 200) {

        let obj = JSON.parse(this.responseText);
        console.log(obj);

        let employees = obj.data;

        let list = document.getElementById('list');
        str = "";
        for (let key in employees)
        { 

            str += `<li>${employees[key].employee_name} </li>`;
        } 
        list.innerHTML = str;

    } else {
        console.log('Error:', xhr.status);
    }
};

// handle network errors
xhr.onerror = function() {
    console.log('Request Error...');
};

// send the request with some data
// const data = JSON.stringify({name: "test", salary: "123", age: "23"});
xhr.send();
console.log("We are done fetching employees");

}, 1000); // assuming you want a delay of 1000 milliseconds (1 second)
} 



