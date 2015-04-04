$('[type="checkbox"]').click(function(){
    var element = $(this).next();
    if ($(this).is(':checked')) {
       element.addClass('strike')
    } else {
       element.removeClass('strike')
    }
});
