$(document).ready(function () {
    svg4everybody({});
});

if($('.reviews__slider').length>0){
	$('.reviews__slider').slick({
		infinite: true,
		dots: true,
		arrows: true,
		centerMode: true,
		variableWidth: true,
		slidesToShow: 1,
		nextArrow:'<button type="button" class="slick-next"><svg version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></svg></button>',
		prevArrow:'<button type="button" class="slick-prev"><svg version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
		responsive: [{breakpoint: 768, settings: {}}]
	});
}
// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}


//cartProduct=============//
//слайдер================//
if($('.cartProduct-slider').length>0){
    $('.cartProduct-slider').slick({
        nextArrow:'<button type="button" class="slick-next"><svg version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></svg></button>',
        prevArrow:'<button type="button" class="slick-prev"><svg version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></svg></button>',
    });
}
//кнопки "+" "-" =================//
$(document).ready(function() {
   $('.minus').click(function () {
       var $input = $(this).parent().find('input');
       var count = parseInt($input.val()) - 1;
       count = count < 1 ? 1 : count;
       $input.val(count);
       $input.change();
       return false;
   });
   $('.plus').click(function () {
       var $input = $(this).parent().find('input');
       $input.val(parseInt($input.val()) + 1);
       $input.change();
       return false;
   });
});
//смена цвета=================================//
// $('.tab__navitem').on('click', function(){
//     if ($(this).hasClass('active')) {return;}
//     var tabName = $(this).data('tab'),
//     tab = $('.tab-item[data-tab="'+tabName+'"]');
//     $('.tab__navitem.active').removeClass('active');
//     $(this).addClass('active');
//
//     $('.tab-item.active').removeClass('active');
//     tab.addClass('active');
// });

$('.tab__navitem').click(function() {
    var tabName = $(this).attr('data-tab');
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('.item-product').find('.item-product__color .' + tabName).addClass('active').siblings().removeClass('active');
});

$(".cartProduct__full").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
});
//========================//