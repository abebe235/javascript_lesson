function test(){
  console.log('test');
}
test() //実行

function addNum(num, num1) {
    console.log(num + num1)
}
addNum(1,10) //引数を渡して実行

//引数に渡された数だけfor文を回す
function forNumber(num) {
    for(var i=0; i<num; i++){
        console.log(i)
    }
}
forNumber(10)

function addNum2(num , num1) {
    return num + num1
}
console.log(addNum2(1,1000)) //処理した結果1001の数字として返ってくる


//引数で渡した数だけ、数が入った配列を返す関数
function numArray(num) {
    var ary =[]
    for(var i=0; i<num; i++){
        ary[i]=i
    }
return ary
}
console.log(numArray(20))