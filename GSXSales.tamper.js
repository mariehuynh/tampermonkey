// ==UserScript==
// @name        GSX sales
// @description Hide nonsales on GSX
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       https://www.google.com/shopping/express/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==
$( document ).ready(function() {

    $('#body').prepend('<input type="button" value="Hide All Non-Sales" id="button1" style="top: 22px;z-index: 1000; position: absolute; left: 813px;">');

    $('#button1').click(function(){
        items = $(".contentArea li").hide();     // Hides all the items
      	$(".GNVEIADBEWF").closest("li").show();  // Shows the sale items; this class may well change in the future
    });
});
