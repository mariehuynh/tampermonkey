// ==UserScript==
// @name        Amazon Prime Now sales
// @description Hide nonsales on Prime Now
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       *primenow.amazon.com/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$( document ).ready(function() {
    console.log("Running Amazon Prime Now sales Tampermonkey script now");

    // Find the cards
    $(".product_grid__item__2ggXX").each(function(index,value){

        var card = $(this);
        var onsale = card.has("div").html().search("asin_price__priceDiscount__3hnAu");

        if (onsale == -1) {
            card.hide();
        }
    }
    );
});

