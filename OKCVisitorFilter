// ==UserScript==
// @name        OkCupid "Visitor" Filter
// @description Hides "visitors" of < 80% match to increase usefulness of the page
// @version     0.1
// @namespace   http://mariehuynh.com/
// @include     http://www.okcupid.com/visitors
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(".user_row_item").each(function( index ) {
    match = $( this ).children(".match_percentages")
                     .children(".match")
                     .text();
                     
    if(parseInt(match, 10) < 80)
        $( this ).hide();
});
