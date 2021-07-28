$( function()
{
    init();
    $(document).pjax('a:not(.imageLightbox):not(.nopjax)', 'article', {fragment:'article', timeout:6000});
    $(document).on('pjax:start', function() { $('article').fadeOut(); NProgress.start(); });
    $(document).on('pjax:end',   function() { $('article').fadeIn(); init(); NProgress.done();  });
    $(".navigation a").click(function(){
        $(".navigation a.current").removeClass("current");
        $(this).addClass("current");
    });
});

function init(){
    $("article img:not(.noImageLightBox)").each(function(i) {
        if (!this.parentNode.href) {
            $(this).wrap('<a class="post-imgLink" href="' + this.src + '" data-caption="' + this.alt + '"></a>');
        }
	});
    lightGallery(document.getElementsByTagName('article')[0], {
		selector: '.post-imgLink',
		share: false,
		showThumbByDefault: false,
		autoplayControls: false
    });
}