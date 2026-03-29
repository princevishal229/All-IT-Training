console.log("This is tutorial 27");

let car = {
    name:'Maruti 800',
    topSpeed: 89,
    run:function run(){
        console.log('car is running');

    }


}
// We have already seen constructors like these
// new Date();

// Creating constructors for cars
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);


    };
    this.analyze = function(){
        console.log(`This car is slower by ${200 -this.topSpeed}Km/H than Mercedes`);

    }


}
car1 = new GeneralCar('Nisan',180);
car2 = new GeneralCar('Maruti Alto',80);
console.log(car2);
//car2.run();  

