let car1 = {
  name: "sonata",
  ph: 200,
  start: () => {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let car2 = {
  name: "bmw",
  ph: 400,
  start: () => {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let car3 = {
  name: "tesla",
  ph: 300,
  start: () => {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let cars = [car1, car2, car3];

//#work3 배열 내 bmw 라는 이름을 가진 차량이 존재 할때 "차량이 있습니다" 텍스트를 출력
// if({condition}){
// }
//사용하는 방법 map 함수를 활용해서 표현 할것
