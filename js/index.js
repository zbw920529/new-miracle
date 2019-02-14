var nav=document.getElementById('nav')
var li=document.getElementsByClassName('nav-li')
var znph=document.getElementById('znph')
var znjc=document.getElementById('znjc')
var gif=document.getElementById('gif')
var index=0
var checkd=0
var navTitle=[
    {title:'首页',url:'#banner',name:'/'},
    {title:'关于我们',url:'#about',name:'about'},
    {title:'合作伙伴',url:'#panner',name:'about'},
    {title:'联系我们',url:'#footer',name:'about'},
]
var length=navTitle.length
navs()
function navs(){
    var html=''

    for(var i=0;i<length;i++){
        // var navClass=index===i?'a active-nav':'' class="+navClass+'a'+"
        console.log(index===i)
        html+= "<li class='nav-li' onclick='changIndexNav(i)' >"+ "<a href="+navTitle[i].url+" class='a' >" +navTitle[i].title+ "</a>"+ "</li>"
    }
    nav.innerHTML=html
}
function changIndexNav(a) {
    console.log(a)
}

for(i=0;i<li.length;i++){
    li[i].onclick=function(){
        for(j=0;j<li.length;j++){
            li[j].className="a";
        }
        this.className="active-nav";
    }
}
function changeCheckd(index){
    if(index===0){
        znph.src='./img/btn_znph1.jpg'
        znjc.src='./img/btn_znjc1.jpg'
        gif.src='./img/znph.gif'
        console.log(znph)
    }else{
        znph.src='./img/btn_znph2.jpg'
        znjc.src='./img/btn_znjc2.jpg'
        gif.src='./img/znjc.gif'
        console.log(index)
    }
}