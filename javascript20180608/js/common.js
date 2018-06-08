var num = 6 ;

//if(条件) {処理}
if(num === 10) {    //もしも変数が__の場合(trueの場合)
   console.log ('num変数は10だよ!')
   } else if (num === 5){
    console.log ('num変数は5だよ!')   
   } else if (num === 1){　　//(他にも)もしもこの数字だった場合は
    console.log ('num変数は1だよ!')   
   } else {
       console.log ('それ以外の数字') //上のどれにも当てはまらない時は
   } ;




//0~9までのランダムに数字を生成、それをrandomNum変数に入れる
var randomNum = Math.floor(Math.random() * 10) ; 
console.log(randomNum) ;

/* 条件　3以上かつ8以下の場合にtrue
ヒント1:(3以上)かつ(8以下)
ヒント2:かつは"&&" */
if(randomNum>=3 && randomNum<=8 ) {
   console.log(randomNum, 'この数字は3~8までの数字')
   }　else {
   console.log(randomNum, 'それ以外！')
   } ;


if(randomNum % 2 === 0) {
   console.log(randomNum,'この数字は偶数です')
   } /*else {
   console.log(randomNum, '奇数')
   }*/ ;

