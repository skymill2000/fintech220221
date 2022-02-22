let car01 = "sonata";
let car02 = "bmw";
let car03 = "tesla";

let cars = [car01, car02, car03];

//in Java
//String [] cars = new array[3];
//ArrayList<String> stringArray = new ArrayList<String>

for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (car of cars) {
  console.log(car);
}

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  console.log(car);
}

cars.map((car) => {
  console.error(car);
});
