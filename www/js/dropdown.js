$(function(){
/* выбор города */
$('.delivery_list').click(function(){
$(".cities_list").slideToggle('fast');
});
$('ul.cities_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".cities_list").slideUp('fast');
$(".delivery_list span").html(tx);
$(".delivery_text").html(tv);
});
})

$(function(){
/* выбор категории */
$('.category_list').click(function(){
$(".variants_list").slideToggle('fast');
});
$('ul.variants_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".variants_list").slideUp('fast');
$(".category_list span").html(tx);
$(".category_text").html(tv);
});
})

$(function(){
/* выбор даты */
$('.date_list').click(function(){
$(".dates_list").slideToggle('fast');
});
$('ul.dates_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".dates_list").slideUp('fast');
$(".dates_list span").html(tx);
$(".date_text").html(tv);
});
})


$(function(){
/* выбор цены */
$('.price_list').click(function(){
$(".prices_list").slideToggle('fast');
});
$('ul.prices_list li').click(function(){
var tx = $(this).html();
var tv = $(this).attr('alt');
$(".prices_list").slideUp('fast');
$(".prices_list span").html(tx);
$(".price_text").html(tv);
});
})