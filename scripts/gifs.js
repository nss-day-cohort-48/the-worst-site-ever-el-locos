$('img').hover(function() {
    $(this).find('gif-img-one')
    $(this).css('position','absolute').css('top', Math.random()*500 + 'px').css('left', Math.random()*600 + 'px');
});