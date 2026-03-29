console.log('This is tut 20');
let impArray = ['adrak','pyaz','bhindi'];


//Add a key value pair inside local Storage
// localStorage.setItem('Name','Harry');
// localStorage.setItem('Name2','Rohan');
// localStorage.setItem('Sabzi',JSON.stringify(impArray))

//Clears the entire localStorage
//localStorage.clear();

//Clear a particular key-value pair
//localStorage.removeItem('Name');

//Retrive an item from local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)


// sessionStorage.setItem('Name','Harry');
// sessionStorage.setItem('Name2','Rohan');
// sessionStorage.setItem('Sabzi',JSON.stringify(impArray));
