//配列の長さを取る
var fruits = ['りんご','ぶどう','さくらんぼ','バナナ','スイカ','メロン']
console.log(fruits,fruits.length)

//配列を連結する
var fruits2 = ['パイン','マンゴー']
console.log(fruits.concat(fruits2))

//文字列として繋げる
var date = [2018,7,13]
console.log(date, date.join('/'))

//配列の追加
var fruits3 = ['バナナ']
console.log (fruits3)
fruits3.push('ぶどう')　//後ろにどんどん追加する(push)
console.log (fruits3)
fruits3.unshift('みかん') //前に追加(unshift)
console.log(fruits3) 

//配列の削除
//fruits3.shift() //最初を削除・削除なので()の中は何もなし
console.log(fruits3)
fruits3.pop() //後ろから削除
console.log(fruits3)

//削除と追加(入れ替える)
fruits.splice(2,4,'みかん','みかん','みかん')
console.log(fruits)



//配列を取り出す
var animal = ['猫','犬','うさぎ','ハムスター','ゾウ']
console.log(animal.slice(1,3))
console.log(animal.slice(animal.length - 2 , animal.length)) //配列の後ろから２つとってくる

//並べ替え
var num =[3,1,2,5] 
console.log (num.sort())

//配列の逆順
console.log(num.reverse())

//joinの逆のようなもの（区切り文字を指定して文字列から配列に変換）
var dateString = '2018/7/13'
console.log(dateString.split('/'))