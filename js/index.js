var znph=document.getElementById('znph')
var znjc=document.getElementById('znjc')
var gif=document.getElementById('gif')
var nre=document.getElementById('nre')
var lsbe=document.getElementById('lsbe')
var yge=document.getElementById('yge')
var tpn=document.getElementById('tpn')
// 导航栏选中效果
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
                nre.src='./img/btn_nre1.jpg',lsbe.src='./img/btn_lsbe1.jpg',yge.src='./img/btn_yge1.jpg',tpn.src='./img/btn_tpn2.jpg'

            )
    }
}