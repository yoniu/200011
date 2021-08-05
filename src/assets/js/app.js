$( function()
{
    init();
    $(document).pjax('a:not(.imageLightbox):not(.nopjax)', 'article', {fragment:'article', timeout:6000});
    $(document).on('pjax:start', function() { $('article').fadeOut(); NProgress.start(); });
    $(document).on('pjax:end',   function() { $('article').fadeIn(); init(); NProgress.done();  });
    $("a").click(function(){
        $(".navigation a.current").removeClass("current");
        if($(this).parent().hasClass("navigation")){
            $(this).addClass("current");
        }
    });
});

function init(){
    $("article img:not(.noImageLightBox)").each(function(i) {
        if (!this.parentNode.href) {
            $(this).wrap('<a class="post-imgLink" href="' + this.src + '" data-caption="' + this.alt + '"></a>');
        }
	});
    $("article .photosets").each(function(){
        var count = $(this).find("a.post-imgLink").length;
        switch(count){
            case 1:
                $(this).addClass("photosets-1");
                break;
            case 2:
                $(this).addClass("photosets-2");
                break;
            case 4:
                $(this).addClass("photosets-4");
                break;
            default:
                $(this).addClass("photosets-3");
        }
    });
    if($(".post-imgLink").length > 0){
        lightGallery(document.getElementsByTagName('article')[0], {
            selector: '.post-imgLink',
            share: false,
            showThumbByDefault: false,
            autoplayControls: false
        });
    }
    if($(".owl-carousel").length > 0){
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 10,
            dots: false,
            nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                1000: {
                    items: 2
                }
            }
        });
    }
    if($("#vcomments").length > 0){
        setTimeout(function(){
            new Valine({
                el:'#vcomments',
                appId: 'wo2ivx4hEwxl5ALC8gOkxFnB-gzGzoHsz',
                appKey: 'y6CWB3NQESIh1pyIBx8GwQ9z',
                requiredFields: ['nick', 'mail'],
                recordIP: true
            });
        }, 1000);
    }
}