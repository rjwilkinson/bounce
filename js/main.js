
// loads the top navigation menu
$('#navigation-bar').load('/menu.html');
$.get("/utility/footer.html", function(data){
    $("body").append(data);
});

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


// collapsible menu from a hint
var coll = document.getElementsByClassName("hint-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("hint-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
