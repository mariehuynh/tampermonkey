// ==UserScript==
// @name        Safeway Coupons
// @description Adds all Safeway Coupons to card so I don't have to click 400x
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       http://www.safeway.com/ShopStores/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$('body').prepend('<input type="button" value="Click All Add Buttons" id="button1">')

$('#button1').click(function(){
    $(".lt-button-primary-add").trigger("click");
    return false;
});