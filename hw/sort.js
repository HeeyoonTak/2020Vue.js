// (1) 배열을 만든다.
// (2) Math.random() 메소드를 사용하여, 
//     1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
// (3) 배열의 오름차순으로 정렬한다.
// (4) 배열을 출력한다.

let array = [];
for(let i=0; i<100; i++){
    array[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}
array.sort();
console.log(array); // 문자열 순서 정렬
array.sort(function(a,b){
    return a-b;
})
console.log(array);