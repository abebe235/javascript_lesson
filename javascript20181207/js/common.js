//console.log('test') 
//""は属性を書いたりするのに使うので、''を使う
//''の中には""を入れ子状にできるので、こちらを使う（""の中に""は使えない）

var tabMenuItem = $('.tabMenuItem')
var tabItem =$('.tabItem')
var prev = $('.prev')
var next = $('.next')
var currentNum = 0 
 //自分が今どの位置にいるか教える
//var isROOP = trueかfalse //メニューをループするものと打ち止めるものの共存の時に必要

tabMenuItem.on('click' , function() {
//    console.log($(this).index()) //クリックした位置のタグの順番を取ってくる
    move($(this).index()) //自分のクリックした位置にクラスを付ける（関数に渡してあげる）
})

prev.on('click' , function() {
    console.log('前')
//ここで前の値をmove関数に渡してあげる
    move(currentNum-1)
})

next.on('click' , function() {
    console.log('次')
//ここで次の値をmove関数に渡してあげる
    move(currentNum+1)
})

//引数num番目にだけクラスをつける関数
function move(num) { //移動を管理する関数
    //ここでnumにマイナスの値が来た時はメニューの最後に飛ばして
    //メニューの最後の数以上だったら0に行く
    if(num < 0) { //もしもnumが0未満だったら
        num= tabItem.length-1 //numに（メニューの数-1）を代入（num=lastNum）
    }　else if (num >= tabItem.length){ //もしも（メニューの数）より大きかったら（if（num > lastNum））
        num=0 //numに0を代入
    }
    tabMenuItem.removeClass('on') //クラスを消すとき
    tabMenuItem.eq(num).addClass('on')
    tabItem.removeClass('on') 
    tabItem.eq(num).addClass('on')
    prev.removeClass('on') 
    prev.eq(num).addClass('on')
    next.removeClass('on') 
    next.eq(num).addClass('on')

    //currentNum = num
    //currentNum = Math.min(num, tabMenuItem.length-1)
    //currentNum = Math.max(num, 0)
    //tabMenuItem.removeClass('on')
    //tabMenuItem.eq(currentNum).addClass('on')
    //tabItem.removeClass('on') 
    //tabItem.eq(currentNum).addClass('on')
    //メニューと最初と最後で打ち止める時（繰り返さない）
    
//    var lastNum = tabMenuItem.length-1
//    if(isRoop) {
//        if(num < 0) {
//        num= lastNum
//    }　else if (num >= lastNum){ 
//        num=0 
//    } else {
//        currentNum = Math.min(num, lastNum)
//        currentNum = Math.max(num, 0)
//    }
//    
//    currentNum = num
//    console.log(currentNum)
//
//    tabMenuItem.removeClass('on') //クラスを消すとき
//    tabMenuItem.eq(num).addClass('on')
//    tabItem.removeClass('on') 
//    tabItem.eq(num).addClass('on')
//    prev.removeClass('on') 
//    prev.eq(num).addClass('on')
//    next.removeClass('on') 
//    next.eq(num).addClass('on') }
//      メニューをループするものと打ち止めるものの共存


