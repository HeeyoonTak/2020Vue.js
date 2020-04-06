// personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
// persons1 배열을 복제해서 persons2 배열을 생성한다.
// persons2 배열을 새로 배열을 만들어서, persons1 배열의 값들을 복사.
// deep copy가 되도록 복제해야 한다.(배열 복제) 
// -> person2 배열을 만들어서, person1 배열의 값들을 복사
// 즉 배열만 복제 되는 것이 아니고, 배열이 참조하는 객체들도 복제 되어야 한다.
// persons2 배열을 출력한다.

let persons1 = [];
for(let i=0; i<10; i++){
    persons1[i] ={name: "홍길동", age: 16+i};
}
console.log("persons1 객체")
console.log(persons1);

let persons2 = [];
for(let i=0; i<10; i++){
    persons2[i]=Object.assign({},persons1[i]);
}
console.log("persons2 객체")
console.log(persons2);

