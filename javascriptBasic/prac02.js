//method, func 선언 예전방식
function test(p1, p2){
    return p1 + p2;
}

let result = test(5,5)
console.log(result);

const plus = (p1, p2) =>{
    return p1 + p2;
}

const minus = (p1, p2) =>{
    return p1 - p2;
}

const multi = (p1, p2) =>{
    return p1 * p2;
}

const div = (p1, p2) =>{
    return p1 / p2;
}

//work#01
//arrow func 로 minus / multi / div 세개의 기능을 선언할것

console.log(plus(1,4));

