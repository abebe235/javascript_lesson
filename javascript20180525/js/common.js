var test = 'テスト' ;

console.log (test) ;
console.log (10 % 3) ;
// 掛ける:* 割る:/

//javascriptのタイプについて
//文字列
var text = '文字列' ;//シングルかダブルで囲む(主にシングル)
console.log (text) ;

//数値
var num = 1 ;
console.log (num) ;

//論理値
var bool = true ;
var bool2 = false ;
console.log (bool , bool2 ) ;

/*文字列を数値に変換する　parseInt
文字列に数値が入っていて、数値のみ取り出したい時に使う */
console.log (parseInt ('100px')) ; 

//Boolean if文で「文字が空のものだけ判断したい」など、そういう時に使うことがある
console.log(Boolean('テスト')) ;
console.log(Boolean(1)) ; 
//存在していない時 falseになる（1文字でも入っていればtrueになる）
console.log(Boolean('')) ; 
//0は特殊（0はない、1はあるという判断が下される）
console.log(Boolean(0)) ; 
//-でも+でも、数値としては存在しているのでtrue
console.log(Boolean(-1)) ;



$('.box').parallaxFit({
    start : 0 ,
    end : 500 ,
    toStyle : {
        left: '300px'
    }    
})