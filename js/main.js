


// creates the right hand menu for quick navigation and adds anchors to the heading
var headings = $(".article-content h3");
var menu = $("#menu");
$(function(){

console.log();
  // for each "h3" in the div
  $(headings).each(function(val){

    //Add anchor link before each heading
    $(this).before("<span id=\"" + removeSpaces($(this).text()) + "\"></span>")

    //append to the menu item
    menu.append("<a href=\"#" + removeSpaces($(this).text()) + "\"class=\"list-group-item list-group-item-action\">" + $(this).text() + "</a>");
  });
});


function removeSpaces(text) {
     return text.replace(/\s+/g, "-")
}


// remove menu when scrolling down the page
$(window).scroll(function() {

    if ($(this).scrollTop()>400)
     {
        $('#navigation-bar').fadeOut();
        $('#menu').addClass("sticksman");
     }
    else
     {
      $('#navigation-bar').fadeIn();
      $('#menu').removeClass("sticksman");
     }

 });


// initiate the Animate on Scroll library
AOS.init();
