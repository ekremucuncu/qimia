
// scroll from landing-section to we-section
$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#we-section").offset().top
    }, 0);
});


// js effects for two-page
$("#cozumler").click(function () {
  $("#first").css("display", "");
  $("#second").css("display", "none");
  $("#bgi").attr("class", "background-image-1");
  $("#cozumler").attr("class", "float-end cursor underline-responsive");
  $("#hizmetler").attr("class", "float-start cursor");
});

// js effects for two-page
$("#hizmetler").click(function () {
  $("#first").css("display", "none");
  $("#second").css("display", "");
  $("#bgi").attr("class", "background-image-2");
  $("#hizmetler").attr("class", "float-start cursor underline-responsive");
  $("#cozumler").attr("class", "float-end cursor");
});

$( document ).ready(function() {
    var height =$('#long-text').css('height');
    $('.cart-text').css("height",height);
});

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 0) {
        $("#go-top").fadeOut();
    } else {
        $("#go-top").fadeIn();
    }
});

$("#search").click(function () {
  if (this.className=='nav-link navbar-text-right plus'){
    $("#anti-search").attr("class", "navbar navbar-expand-lg navbar-collapse navbar-light bg-light navbar-background-border d-none");
    $("#searching").css("display", "");
    $("#search").attr("class", "nav-link navbar-text-right minus");
    $("#search-image").attr("src","images/Group10.svg");
    $("#search-item").css("background-color","#0068fa");
  }
  else{
    $("#anti-search").attr("class", "navbar navbar-expand-lg navbar-collapse navbar-light bg-light navbar-background-border d-none d-lg-block");
    $("#searching").css("display", "none");
    $("#search").attr("class", "nav-link navbar-text-right plus");
    $("#search-image").attr("src","images/Group 8.svg");
    $("#search-item").css("background-color","#091538");
  }

});
