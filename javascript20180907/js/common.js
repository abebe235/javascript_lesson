var colors= ['赤','青','黄色','緑'] ;
console.log(colors[1]) ;

var users = [
    {
        name: 'かめい',
        age: 33
    },
    {
        name: 'あべさん',
        age:25
    },
    {
        name:'あべくん' ,
        age: 18
    }
]
//あべくんの年齢を表示
console.log(users[2].age)
console.log(users[2]['age'])
/*var abe= users[2]
console.log(abe.age)
console.log(age['age'])
でも可
*/
//配列の長さを調べる
console.log('colors配列の長さは' + colors.length)

//配列を結合する
var fruits =['みかん','バナナ'] 
var fruits2 =['パイナップル','ぶどう']
var fruits3 =['りんご','スイカ']
console.log(fruits.concat(fruits2,fruits3))

//配列の追加
var animal =['うさぎ','ねこ']
animal.unshift('うし')//配列の最初に追加
animal.push('いぬ')//配列の最後に追加
console.log(animal)

var nums=[] //（あらかじめ空配列を用意しておいて、あとで値を入れる)
nums.push(1)
nums.push(2)
nums.push(3)
console.log(nums)

//配列の削除
var sports =['野球','バスケ','サッカー']
sports.shift() //配列の最初を削除する
sports.pop() //配列の最後を削除
console.log(sports)

//配列の差し替え
fruits.splice(1,2,'追加したい値','追加したい値2') ;
console.log(fruits)

//配列の取り出し
var song=['演歌','ジャズ','J-POP']
console.log(song.slice(1,3))
console.log(song.slice(1)) //2つ目を省略すると最後まで

//配列のソート
var sortNums=[3,4,2,6,9,1]
sortNums.sort()
console.log(sortNums)

//配列の逆順
sortNums.reverse()
console.log(sortNums)

 //文字を区切り文字で配列に変換
 var date ="2013/4/26" ;
console.log(date.split('/')) 



//Q1. 配列に0〜50、50〜0の配列を入れてそれぞれ表示。


//Q2. 下記の果物が入った配列を、一つづつ表示。

//Q3. 下記の連想配列を、下記の結果になるように表示。

//Q4. 文字列’2013/4/26'を[年,月,日]のような配列に分割し、配列の最後に[曜日,時間]を追加（[年,月,日,曜日,時間]）

//Q5 0〜100の奇数・偶数をそれぞれ連想配列に分けて表示