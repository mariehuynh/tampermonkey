// ==UserScript==
// @name        Amazon History
// @description Opens price history for Amazon products in new window
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       www.amazon.com/*/dp/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$('body').prepend('<input type="button" value="Check CamelCamelCamel" id="button1">')

$('#button1').click(function(){
    var pathname = window.location.pathname;
    var tokens = pathname.split("/");
    window.open("http://www.camelcamelcamel.com/" + tokens[1] + "/product/" + tokens[3]);
    return false;
});
