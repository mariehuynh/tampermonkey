// ==UserScript==
// @name        Joann shippable
// @description Hide unshippable items on Joann
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       https://www.joann.com/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==
$( document ).ready(function() {

    $('body').prepend('<input type="button" value="Hide All Non-Shipping" id="button1" style="top: 0px;z-index: 1000; position: sticky;">');

    $('#button1').click(function(){
      	$(".product-grid__item:contains('Not available for shipping')").hide();  // Hides unavilable items; this class may well change in the future
    });
});
