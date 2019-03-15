var nav=document.getElementById('nav');
var headerChekButton=document.getElementById('header-chekButton');
var show=true;
//导航栏切换选中效果
$('.nav-li a').click(function() {
    $('.nav-li a').attr('style','color:rgb(255, 255, 255)')
    $(this).attr('style','color:rgb(114, 184, 255)')
});
// 关于我们右边图片切换
function changeCheckd(index){
    if(index===0){
        $('#znph').attr('src','./img/btn_znph1.jpg');
        $('#znjc').attr('src','./img/btn_znjc1.jpg');
        $('#gif').attr('src','./img/znph.gif');
    }else{
        $('#znph').attr('src','./img/btn_znph2.jpg');
        $('#znjc').attr('src','./img/btn_znjc2.jpg');
        $('#gif').attr('src','./img/znjc.gif');
    }
};
//鼠标移入合作伙伴区域后图片恢复默认
$('.panner_right_left a img').mouseover(function() {
    $(this).attr('src',$(this).attr('data-src'))
});
//离开合作伙伴区域后图片恢复默认
$('.panner_right_left a img').mouseleave(function() {
    $(this).attr('src',$(this).attr('back-src'))
});
// 移动端隐藏导航栏
$('.header-chekButton').click(function() {
    show=!show;
    if(show){
        nav.style.height=0;
        nav.style.transition='height 0.6s';
        headerChekButton.style.transform="rotate(0deg)";
        headerChekButton.style.transition="transform 0.3s"
    }else{
        nav.style.height='10rem';
        nav.style.transition='height 0.6s';
        headerChekButton.style.transform="rotate(-90deg)";
        headerChekButton.style.transition="transform 0.3s"
    }
});
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
//弹出模态框
$(".md-trigger").click(function(){
   $('#modal').addClass('md-show')
});
//关闭模态框
$(".md-close").click(function(){
    $('#modal').removeClass('md-show')
});
//禁止视频另存为
$('#video').bind('contextmenu',function() { return video; });
