// ==UserScript==
// @name        Pinterest Sorter
// @description Batch prompt to pin everything Liked, toggle liked on "Likes" page
// @version     0.1
// @namespace   http://mariehuynh.com/
// @include     *.pinterest.com/*/likes/
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$( document ).ready(function() {
    $('body').append('<input type="button" value="Pin All" id="PA">')
    $('body').append('<input type="button" value="Toggle All Hearts" id="TAH">')
    
    $('#PA').click(function(){ 
        $(".repinSendButtonWrapper").each(function( index ) {
            el = $( this ).children("button");
            el.trigger( "click" );
        });
    });    
    
    $('#TAH').click(function(){ 
        $(".likeEditButtonWrapper").each(function( index ) {
            el = $( this ).children("button");
            el.trigger( "click" );
        });
    });    
    
});    
