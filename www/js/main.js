$( document ).ready(function() {

    // A patch to fix {skip to content} functionality for some browsers
    $(".skip").click(function(event){
        var skipTo="#"+this.href.split('#')[1];
        $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
            $(this).removeAttr('tabindex');
        }).focus();
    });
});