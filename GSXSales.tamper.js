// ==UserScript==
// @name        GSX sales
// @description Hide nonsales on GSX
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       https://www.google.com/shopping/express/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==
$( document ).ready(function() {

    $('#body').prepend('<input type="button" value="Hide All Non-Sales" id="button1" style="top: 123px; z-index: 10; position: absolute;">');

    $('#button1').click(function(){
        items = $(".contentArea li").hide();
      	$(".GNVEIADBJUF").closest("li").show();
        return false; 
    });
});    

