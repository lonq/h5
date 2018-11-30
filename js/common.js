//返回顶部
$("body").append("<div class='float-tool'><div id='top-tool'><a href='javascript: void(0);' title='回到顶部'></a></div></div>");
$('.float-tool').css("display", "none");
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.float-tool').css("display", "block");
        } else {
            $('.float-tool').css("display", "none");
        }
    });
    $('#top-tool').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 600)
    })
});
//iOS监听事件
document.body.addEventListener('touchstart', function() {});

$(function() {
    //清除文本框内容
    $('.clear-text input').on('keyup', function() {
        var v = $(this).val();
        var b = $(this).parent().parent().find('.clear-text-btn');
        if (v.length > 0) {
            b.removeClass('invisible');
        } else {
            b.addClass('invisible');
        }
    });
    $('.clear-text .clear-text-btn').on('click', function() {
        $(this).addClass('invisible').parent().find('input').val('').focus();
    })
});