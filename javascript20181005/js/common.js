//0~1のランダムな数字
console.log(Math.random())
//0~9まで(小数点あり)
console.log(Math.random()*10)

//小数点切り捨て
console.log(Math.floor(3.555))
//0~9までのランダムな整数 配列の値をランダムに出したいときなどに使う
console.log(Math.floor(Math.random()*10))
//1~10までのランダムな整数
console.log(Math.floor(Math.random()*10 )+ 1)

//配列の値をランダムに出す
var names = ['亀井','渡邊','安部']
console.log(names[Math.floor(Math.random() * names.length)])

//繰り上げ
console.log(Math.ceil(3.1))

//四捨五入
console.log(Math.round(3.1))
console.log(Math.round(3.5))

//最大・最小　それぞれを取得する
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))

//最大値・最小値を決めたい
var randomNum = Math.floor(Math.random() * 100 )
console.log(randomNum)
console.log(Math.min(randomNum,50)) //最大値を決めたいとき（小さい方をとって欲しい）最大値を50とする
console.log(Math.max(randomNum,50)) //最小値を決めたいとき・最小値を50とする






//Q1. 引数に数字を入れ実行すると、0から引数で渡した数字までの「奇数・偶数で分けた連想配列」を戻り値（return）で返す関数を作る
//console.log(numObj(100))
console.log(numObj(100))
function numObj(num) {
    var newObj ={
        odd: [] ,
        even: [] //あらかじめ宣言する
    }
for(var i=0; i<=num; i++){
    if(i % 2 ===0 ) {
        newObj.even.push(i)
    } else{
        newObj.odd.push(i)
    }
}
    return newObj
}

//Q2 第1引数に配列、第2引数に文字列を渡すと、 第1引数の配列の最後に第2引数で渡した文字列を追加した配列を戻り値（return）で返す関数を作る
var fruits= ['りんご','めろん','ぶどう']
console.log(addFruit(fruits, 'すいか'))
function addFruit(fruits,fruitname) {
    fruits.push(fruitname) 
    return fruits
}

//Q3 引数に数字を入れると、1からその引数までの乱数を戻り値（return）で返す関数を作る
console.log(rundomNum(10))
function rundomNum(num) {
    var num=Math.floor(Math.random()* num+1)
    return num
}

//Q4. 引数に(min, max)のような 2つ数字を入れ、minからmaxまでの整数の乱数を戻り値（return）で返す関数を作る
console.log(randomRangeNum(3, 10))
function randomRangeNum(min,max){
    return Math.floor(Math.random()* (max - min + 1))+min
}

//Q5. 引数に数字を渡すと、金額表記の文字列に変換して戻り値（return）で返す関数を作る
//console.log(getMoneyFormat(1000000))
//function getMoneyFormat(money)
console.log(getMoneyFormat(1234567))
function getMoneyFormat(money){
    var str = String(money) //数字を変換
    var newString = ''
    for(var i =str.length - 1,j=1; i>=0;i--,j++) {
        if (j % 3 === 0 && j !== str.length) {
            newString = ',' + str[i] + newString
        } else {
            newString = str[i] + newString
        }
    }
    return newString
}

//Q6. 引数に文字列を入れ、5文字以上の場合は、４文字までとし、以降を…とする関数をつくる
console.log(cutString('aaaa'))
console.log(cutString('12345'))
console.log(cutString('123456'))
function cutString(str) {
    if(str.length > 4) {
        return str.slice(0,4)+ '...'
    }else {
        return str    
    }
}