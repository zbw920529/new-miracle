
var znph=document.getElementById('znph')
var znjc=document.getElementById('znjc')
var gif=document.getElementById('gif')
var nre=document.getElementById('nre')
var lsbe=document.getElementById('lsbe')
var yge=document.getElementById('yge')
var tpn=document.getElementById('tpn')
var nav=document.getElementById('nav')
var headerChekButton=document.getElementById('header-chekButton')
var show=true

// 导航栏选中效果
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
                nre.src='./img/btn_nre2.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn1.jpg'
            )
        case 'lsbe':
            return(
                lsbe.src='./img/btn_lsbe2.jpg',nre.src='./img/btn_nre1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn1.jpg'
            )
        case 'yge':
            return(
                yge.src='./img/btn_yge2.jpg',nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',tpn.src='./img/btn_tpn1.jpg'
            )
        case 'tpn':
            return(
                tpn.src='./img/btn_tpn2.jpg', nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg'
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

$(function(){
    //锚点跳转滑动效果
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