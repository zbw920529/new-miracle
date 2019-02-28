var znph=document.getElementById('znph')
var znjc=document.getElementById('znjc')
var gif=document.getElementById('gif')
var nre=document.getElementById('nre')
var lsbe=document.getElementById('lsbe')
var yge=document.getElementById('yge')
var tpn=document.getElementById('tpn')
var nav=document.getElementById('nav')
var headerChekButton=document.getElementById('header-chekButton')
var btn_nre1='./img/btn_nre1.jpg'//nre1
var btn_lsbe1='./img/btn_lsbe1.jpg'
var btn_yge1='./img/btn_yge1.jpg'
var btn_tpn1='./img/btn_tpn1.jpg'
var btn_nre2='./img/btn_nre2.jpg' //nre2
var btn_lsbe2='./img/btn_lsbe2.jpg'
var btn_yge2='./img/btn_yge2.jpg'
var btn_tpn2='./img/btn_tpn2.jpg'
var show=true

//锚点滑动效果
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
                nre.src=btn_nre2,lsbe.src=btn_lsbe1,yge.src=btn_yge1,tpn.src=btn_tpn1
            )
        case 'lsbe':
            return(
                lsbe.src=btn_lsbe2,nre.src=btn_nre1,yge.src=btn_yge1,tpn.src=btn_tpn1
            )
        case 'yge':
            return(
                yge.src=btn_yge2,nre.src=btn_nre1,lsbe.src=btn_lsbe1,tpn.src=btn_tpn1
            )
        case 'tpn':
            return(
                tpn.src=btn_tpn2, nre.src=btn_nre1,lsbe.src=btn_lsbe1,yge.src=btn_yge1
            )
        default:
            return(
                nre.src=btn_nre1,lsbe.src=btn_lsbe1,yge.src=btn_yge1,tpn.src=btn_tpn1
            )
    }
}
//离开合作伙伴区域后图片恢复默认
function pannerLeaveImg(){
    nre.src=btn_nre1,lsbe.src=btn_lsbe1,yge.src=btn_yge1,tpn.src=btn_tpn1
}
// 移动端隐藏导航栏
function showNav(){
    show=!show
    if(show){
        nav.style.height=0
        nav.style.transition='height 0.6s'
        headerChekButton.style.transform="rotate(0deg)"
        headerChekButton.style.transition="transform 0.3s"
    }else{
        nav.style.height='10rem'
        nav.style.transition='height 0.6s'
        headerChekButton.style.transform="rotate(-90deg)"
        headerChekButton.style.transition="transform 0.3s"
    }
}
//锚点跳转滑动效果
$(function(){
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    500);
                return false;
            }
        }
    });
})
