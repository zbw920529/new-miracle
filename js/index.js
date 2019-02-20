var znph=document.getElementById('znph')
var znjc=document.getElementById('znjc')
var gif=document.getElementById('gif')
var nre=document.getElementById('nre')
var lsbe=document.getElementById('lsbe')
var yge=document.getElementById('yge')
var tpn=document.getElementById('tpn')
// 导航栏选中效果
//锚点滑动效果
$(function(){
    //锚点跳转滑动效果
    $('a[href*=#],area[href*=#]').click(function() {
        console.log(this.pathname)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    300);
                return false;
            }
        }
    });
})

var clientWidth = document.documentElement.clientWidth || document.body.offsetWidth;
// 获取根元素html
var html = document.documentElement;
//获取当前视口宽度和标准宽度比例 * 标准rem单位得到html的font-size这里设置的行内样式权重最大
html.style.fontSize = clientWidth/1920*100 + "px";
// 监听window的onresize屏幕的尺寸变化
// 如果我们改变为横屏时，html的font-size发生变化
window.onresize = function () {
    var clientWidth = document.documentElement.clientWidth || document.body.offsetWidth;
    //获取当前视口宽度和标准宽度比例 * 标准rem单位 1rem=512px
    document.documentElement.style.fontSize = clientWidth/1920*100 + "px";
};
function changeActive(navIndex){
    var navHome=document.getElementById('nav-home')
    var navAbout=document.getElementById('nav-about')
    var navPanner=document.getElementById('nav-panner')
    var navContact=document.getElementById('nav-contact')
    switch(navIndex){
        case 'navHome':
            return(
                navHome.style.color='#72b8ff',navAbout.style.color='#fff',navPanner.style.color='#fff',navContact.style.color='#fff'
            )
        case 'navAbout':
            return(
                navHome.style.color='#fff',navAbout.style.color='#72b8ff',navPanner.style.color='#fff',navContact.style.color='#fff'
            )
        case 'navPanner':
            return(
                navHome.style.color='#fff',navAbout.style.color='#fff',navPanner.style.color='#72b8ff',navContact.style.color='#fff'
            )
        case 'navContact':
            return(
                navHome.style.color='#fff',navAbout.style.color='#fff',navPanner.style.color='#fff',navContact.style.color='#72b8ff'
            )
        default:
            return(
                navHome.style.color='#72b8ff',navAbout.style.color='#fff',navPanner.style.color='#fff',navContact.style.color='#fff'
            )
    }
}
// 关于我们右边图片切换
function changeCheckd(index){
    if(index===0){
        znph.src='./img/btn_znph1.jpg'
        znjc.src='./img/btn_znjc1.jpg'
        gif.src='./img/znph.gif'
    }else{
        znph.src='./img/btn_znph2.jpg'
        znjc.src='./img/btn_znjc2.jpg'
        gif.src='./img/znjc.gif'
    }
}
//合作伙伴图片切换
function pannerImg(value){
    switch(value){
        case 'nre':
            return(
                nre.src='./img/btn_nre2.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn1.jpg'

            )
        case 'lsbe':
            return(
                nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe2.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn1.jpg')
        case 'yge':
            return(
                nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge2.jpg',tpn.src='./img/btn_tpn1.jpg'

            )
        case 'tpn':
            return(
                nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn2.jpg'

            )
        default:
            return(
                nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn1.jpg'

            )
    }
}
function pannerLeaveImg(){
    nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn1.jpg'
}