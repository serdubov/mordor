$(document).ready(() =>{
    var width = $(window).width();
    var centered = width / 2;
    var $parallax;

    $(window).on('load resize', function() {
        width = $(window).width();
        centered = width / 2;
    });

    $('#position').mousemove((e) => {
        var pos_x = e.pageX;
        if(pos_x < centered){
            $parallax = centered - pos_x;
            $parallax = $parallax / 8;
            $('#hare').css('transform', 'translate3d(' + $parallax + 'px, 0, ' + $parallax/2 + 'px)');
            $('#back_2').css('transform', 'rotateY(' + $parallax/125 + 'deg)');
            $parallax = $parallax / 1.5;
            $('#smoke').css('transform', 'translateX(-' + $parallax + 'px)');
        }else{
            $parallax = pos_x - centered;
            $parallax = $parallax / 8;
            $('#hare').css('transform', 'translate3d(-' + $parallax + 'px, 0, ' + $parallax/2 + 'px)');
            $('#back_2').css('transform', 'rotateY(-' + $parallax/125 + 'deg)');
            $parallax = $parallax / 1.5;
            $('#smoke').css('transform', 'translateX(' + $parallax + 'px)');
        }
    });
});