let count=0;
let id = setInterval(function (msg) {
    count++;
    console.log(msg, new Date());
    if(count == 11){
        console.log("종료")
        clearInterval(id);
    }
  }, 1000, "현재시간");

