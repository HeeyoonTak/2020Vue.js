// (1) 배열을 만든다.
// (2) Math.random() 메소드를 사용하여, 
//     1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
// (3) 배열에 원소들 중에서 짝수(2의 배수)를 찾아서 모두 제거한다.
// (4) 배열을 출력한다.

let array = [];
for(let i=0; i<100; i++){
    array[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
}

for(let i=0; i<100; i++){
   if(array[i]%2==0){
       array.splice(i,1,null);
   } 
}//앞으로 당기면서 뒤에 있던 짝수가 자리를 채우므로 삭제 X

console.log(array.filter(function(e){
    return e
}));