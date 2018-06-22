/*
var a =10
var b =20

console.log('Q1',a+b)

a = b //jsでは「=」は「代入」という意味になる。これは「aにbを代入する」という指示
console.log("Q2",a,b)
*/

//Bloolean＝数字、何か文字列が入っていればtrueが表示　空欄や0はfalse

/*
num= 10
console.log(num % 3)
console.log(num % 2) //%=余り　余りが幾つなのかが表示される
*/

/*num=10 
num+= 10 //num= num+10
num++ //num= num+1
//上に書かれたものがプラスされていく
console.log(num)*/

//以上前回までの復習

//for文＝繰り返し処理

/*for(var i= 0; i<100; i++) {
    //10回分繰り返し: for(初期値; iが10以下の時; 1ずつ増えていく)
 console.log(i)       
}*/

for(var i= 0; i<100; i++) {
    if(i % 2 ===0) {
       console.log(i + 'は偶数！')
    }    
}

for(var i=0; i<100 ; i++) {
    $('body').append('<div class="box"></div>') ;
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    $('.box').eq(i).css({
    left: Math.random() * 1000+'px',
    top: Math.random() * 1000 +'px',
    backgroundColor: 'rgb('+ r +','+ g +','+ b +')'
    })
    
    $('.box').eq(i).parallaxSpeed({
        style: 'top' ,
        speed: Math.random() * 2-1,
        fixStyleValue: String($('.box').eq(i).css('top')),
        fixScrollPosition: 0
    })
}