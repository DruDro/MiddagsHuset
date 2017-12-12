$(function () {

    $("[data-fancybox]").fancybox({
  
    });
    $("[data-fancybox]").on("mouseup mousedown click touchstart touchend", function(e){
        if($(window).width() < 768){
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });
    

    $(document).on("click", '.js-toggle-code', function (e) {
        e.preventDefault();
        e.stopPropagation;
        var link = $(this),
            pre = link.parent().next('.');
        if(link.hasClass('collapsed')){
            link.removeClass('collapsed');
            pre.slideDown(300);
        }
        else {
            link.addClass('collapsed');
            pre.slideUp(300);
        }
    });
});