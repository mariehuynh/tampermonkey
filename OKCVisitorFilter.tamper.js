// ==UserScript==
// @name        OkCupid "Visitor" Filter
// @description Hides "visitors" of < 80% match to increase usefulness of the page
// @version     0.2
// @namespace   http://mariehuynh.com/
// @include     *.okcupid.com/visitors
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$( document ).ready(function() {
    $('body').prepend('<input type="button" value="Temp hide < 80% Locally" id="TH">')
    $('body').prepend('<input type="button" value="Hide < 80% on Server" id="SH">')

    // Temporarily hide all visitors under 80% match 
    // Reload the page to reset
    $('#TH').click(function(){
       $(".user_row_item").each(function( index ) {
            match = $( this ).find(".percentage")
                             .text();

            if(parseInt(match,10) < 80)
                $( this ).hide();
      });
    });

    // Click on "Hide"  
    $('#TH').click(function(){
       $(".user_row_item").each(function( index ) {
            match = $( this ).find(".percentage")
                             .text();

            if(parseInt(match,10) < 80) {
                $button = $( this ).find("a.hide_btn");
                $button.trigger( "click" );

            }
      });
    });


});