window.onload = function() {
    // 加载页面 执行动画
    // 根据配置渲染banner分割个数，挪动图片位置
    var bannerConDom = document.getElementsByClassName('banner-con')[0];
    var wrpWidth = bannerConDom.offsetWidth;
    init(4);
    // 根据配置添加节点
    function init(part) {
        var bannerInDom = '';
        var itemWidth = parseInt(wrpWidth / part, 10) ;
        var zIndexMax = Math.ceil(part / 2);
        var remain = part % 2 ;
        var zIndex = 0;
        for(var i=0; i<part; i+=1) {
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
    function loop() {

    }

}