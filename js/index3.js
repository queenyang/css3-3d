window.onload = function() {
    // 加载页面 执行动画
    // 根据配置渲染banner分割个数，挪动图片位置
    let iCurIndex = 0;
    const part = 5;
    const bannerConDom = document.getElementsByClassName('banner-con')[0];
    const wrpWidth = bannerConDom.offsetWidth;
    const prevBtn = document.getElementsByClassName('prev')[0];
    const nextBtn = document.getElementsByClassName('next')[0];
    init(part);
    nextBtn.onclick = loopNext;
    prevBtn.onclick = loopPrev;
    // 根据配置添加节点
    function init(part) {
        let bannerInDom = '';
        let zIndex = 0;
        const itemWidth = wrpWidth / part ;
        const zIndexMax = Math.ceil(part / 2);
        const remain = part % 2 ;
        for(let i=0; i<part; i+=1) {
            if(i+1 <= zIndexMax) {
                zIndex += 1;
            } else if( (i+1 <= zIndexMax + 1) && !remain ){
                zIndex = zIndexMax;
            } else {
                zIndex -= 1;
            }
            bannerInDom +=  '<div class="banner-item" style="width:'+ itemWidth +';left:'+ i*itemWidth  +'px; transition-delay:'+ 0.1*i +'s; z-index:'+ zIndex +'">' +
                                '<div class="front" style="background-position:'+  -i*itemWidth +'px"></div>' +
                                '<div class="back" style="background-position:'+  -i*itemWidth +'px"></div>' + 
                                '<div class="left"></div>' +
                                '<div class="right" style="transform: translateX('+ (itemWidth-150) +'px) rotateY(90deg) "></div>' +
                                '<div class="top" style="background-position:'+  -i*itemWidth +'px"></div>' + 
                                '<div class="bottom" style="background-position:'+  -i*itemWidth +'px"></div>' +
                            '</div>';
        }
        bannerConDom.innerHTML = bannerInDom ;
    }
    function loopNext() {
        if(iCurIndex + 1 >= 4) {
            iCurIndex = 0;
        } else {
            iCurIndex += 1;
        }
        turnOver();
    }
    function loopPrev() {
        if(iCurIndex - 1 <= 0) {
            iCurIndex = 4;
        } else {
            iCurIndex -= 1;
        }
        turnOver();
    }
    // 魔方翻转动画
    function turnOver() {
        let bannerItemArr = document.getElementsByClassName('banner-item');
        for(let i=0; i<bannerItemArr.length; i++) {
            bannerItemArr[i].style.transform = `rotateX(${iCurIndex*90}deg)`;
        }
    }
}