var test='テスト' ;
console. log(test , typeof test) ;
var num= 1 ;
console. log(test , typeof num) ;
var num2= '2'
console. log(test , typeof num2) ;
var bool = true ;
console. log(bool , typeof bool) ;
console. log(false , typeof false) ;

//比較演算子　右と左の値を比較する
console. log(1===1) ;
console. log(1!==1) ;
console. log(1<2) ;
console. log(1>2 ) ;
console. log(1>=1) ;
console. log(1<=1) ;
/*
a == b 値が等しい場合にtrue
a === b 値と型が等しい場合 true
a != b 値が等しくない場合 true
a !== b 値と型が等しくない場合 true
a > b a より b が小さい場合 true
a < b a が b より小さい場合 true
a >= b a が b 以上の場合 true
a <= b a が b 以下の場合 true
*/

//論理演算子　
var num = 10 ;
console. log(num > 5 && num < 20) ; //比較をたくさんしたい時に使える
var num2 =Math.floor(Math.random() * 10);//1~10までの数をランダムで作成する。Mathは大文字で！
console. log(num2 , num === 5 || num2 === 3) ; /*その数字と比較して5もしくは3の数字だった場合true*/
/*
a && b a b 2つの式・値が正しい（tureの）場合 true
a || b a b どちらかの式・値が正しい（tureの）場合 true
!a aが正しくない（falseの）場合 true
*/

