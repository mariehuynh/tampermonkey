// ==UserScript==
// @name        Facebook Ads
// @description Hides Facebook in-stream ads
// @version     0.1
// @namespace   http://mariehuynh.com/
// @match       *www.facebook.com/
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$( window ).scroll(function() {
    $('.uiStreamSponsoredLink').closest("._4ikz").hide();
});
