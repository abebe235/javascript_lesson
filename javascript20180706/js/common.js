var fruits= ['みかん','ぶどう','さくらんぼ','バナナ']
//変数名   = [配列番号 0から始まる]
console.log(fruits)
console.log(fruits[0])

//配列の中に配列を入れる 二次元配列
var fruits2= [
   ['りんご','さくらんぼ','いちご'], //赤い果物
	['かき','みかん','びわ'], // オレンジ色果物
	['バナナ','パイナップル','レモン'] //黄色い果物
    ]
console.log(fruits2[1][1])
//複雑になってきたときの、別の書き方
var orange= fruits2[1]
console.log(orange[1]) //みかんのみ表示される

//object
var fruits3 = {
    red: ['りんご','さくらんぼ','いちご'], //赤い果物
    orange: ['かき','みかん','びわ'], // オレンジ色果物
    yellow:['バナナ','パイナップル','レモン'] //黄色い果物
}

var fruits4 = {
    red: 'りんご', //赤い果物
    orange: 'みかん', // オレンジ色果物
    yellow:'バナナ' //黄色い果物
}

console.log (fruits4.red)
console.log (fruits4['red']) //両方ともりんご
console.log (fruits3.yellow[1])

/*変数の中に色を入れてオブジェクトから配列を取ってくる
var color ='orange'
console.log(fruits3[color])*/

//配列の長さを取ってくる
console.log(fruits.length) //配列の長さを表示
for (var i=0; i < fruits.length; i++ ){
    console.log(i)
    console.log(fruits[i])   
}


var colors= ['赤','青','黄色']
console.log(colors)
colors[0]= '茶色'
colors[3]='紫'　//最初に書いてなかった値も、後で代入し追加することができる
console.log(colors)
//配列の番号に=と代入したい値を入力した

//objectに値を代入する
var colors2 = {} //空のobject
colors2.red ='赤'
console.log(colors2)


//Q1
/*for (var i=0; i<=100; i++){
    if (i % 2 ===0){
        console.log(i)
    }
}*/

//Q2
/*
for (var i=0; i<=100; i++){
    if (i>=10&&i<=30 || i>=70&&i<=90){
        console.log(i)
    }
}
*/

//Q3
/*for (var i=0; i<=100; i++){
    if (i % 3 ===0){
        console.log(i)
    }
}*/

//Q4 1900年から2100年までの閏年の年をすべて表示する（4で割れるが100で割れない。または、400で割れる）






































