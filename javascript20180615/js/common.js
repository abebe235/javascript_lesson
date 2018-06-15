var num = 100
num = 20
console.log(num)

//const num2 = 10 ;
//console.log(num2);
/*const=varと同じようなもの（上書きできるかできないかの違い）
var=宣言後でも上書き可
const=上書き不可なので、変数が確実にわかる=コードとして迷うことが少なくなる*/

const num3 = Math.floor(Math.random()*10)
console.log(num3)

//奇数ですと表示する
//2で割り切れなかった時＝余りがある
/*if(num3 % 2 === 1){
   console.log(num3,'奇数です')
   } ;*/
/*if(num3 % 2 !== 0){    //0ではないとき　!=否定
   console.log(num3,'奇数です')
   } ;*/
/*if(!(num3 % 2 === 0)){  //!以下の式自体を否定している
   console.log(num3,'奇数です')
   } ;*/

//num3が奇数の場合は「奇数です」偶数の場合は「偶数です」と表示する。
//結果をbox内に表示
var result = '' 
/*if(num3 % 2 ===0) {
    console.log (num3,'偶数です。')
    result = '偶数です'
} 
else {
    console.log (num3,'奇数です。')
    result = '奇数です'
} ;*/

if(num3 % 2!==0) {
    console.log (num3,'奇数です。')
    result = '奇数です'
} 
else if(num3 === 0) {
    console.log (num3,'0です。') 
    result = '0です'
}
else {
    console.log(num3,'偶数です。')
    result = '偶数です'
}
$('.box').html(num3 + 'は' + result)  //html上のboxの中に結果を表示する