$('.box').parallaxFit({ //boxのタグにアクセスできる・parallaxFitにアクセスする
    start : 0 ,
    end : 500 ,
    fromStyle: {
        transform: 'scale(1) rotate(0deg)' ,
        backgroundColor: 'rgb(255,0,0)',       
},
    toStyle : {
        transform: 'scale(2) rotate(180deg)' ,
        backgroundColor: 'rgb(0,255,0)', 
        left: '200px'
},    

motion1Start: 600,
motion1End: 800,
motion1ToStyle: {
    top: '200px'
},
  
motion1Easing: 'easeInElastic',
motion2End: 1500,
motion2ToStyle: {
    width: '300px' ,
    height: '500px',
},

motion2Easing: 'easeInElastic' 
/*motion3Start: 1500,
morion3End: 800,
motionToStyle:  {
    width: '',
    height: '',
},
                      
motion3Easing: '' ,
motion4Start: ,
motion4End: ,
motion4ToStyle: {
        : ''
                      } */
})