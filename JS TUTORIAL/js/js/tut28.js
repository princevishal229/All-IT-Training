console.log("This is tutorial 28");

// Object literal: Object.prototype
let obj ={
    name: "Harry",
    channel: "Code With Harry",
    address: "Mars"

}



function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function(){
    return this.name;

}

Obj.prototype.setName = function(newName){
    return this.name = newName;
}

let obj2 = new Obj("Rohan");
console.log(obj2);
