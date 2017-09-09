// ==UserScript==
// @name        Airbnb Filter
// @description Hides listings with pets and smoking
// @version     0.2
// @namespace   http://mariehuynh.com/
// @include     *airbnb.com/s/*
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    $('body').prepend('<input type="button" value="Hide smoke and pet listings" id="TH" style= "z-index: 20; display: block; left: 620px; top: 84px; position: fixed;">');

    console.log("Beginning Airbnb Filter");

    // Click on "Hide"  ### No longer works; button was removed
    $('#TH').click(function(){

        $('.cardContainer_gig1e7').each(function(index) {
            url = $(this).find("a").attr('href');
            console.log(url);

            // Punching a hole in scope wall
            var that = this;

            // Fetch listings and search
            $.get(url).done(function(data) {
                console.log("data returned");

                // Smoking allowed?
                smoke = data.search('allows_smoking":t');
                //console.log("smoke: " + smoke);

                // Has pets?
                pets = data.search('_pets":t');
                //console.log("pets: " + pets);

                // pets and smoke are -1 if not found; probably big number if found
                allergens = pets + smoke;

                // Hide container
                if(allergens > 0) {
                    //console.log('hide it');
                    $(that).hide();
                }
            });

            // Fix layout; fill in gaps left by hidden listings
            $("div.cardGrid_o1rkka>div").css("float","left");
        });

    });

});
