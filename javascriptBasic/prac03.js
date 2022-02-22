let car = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () =>{
        console.log("engine stop");
    }
}

console.log(car.name + "의 마력은 " + car.ph + "입니다.");
console.log(car.start);
car.start();