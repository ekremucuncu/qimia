


$("#cozumler").click(function () {
  $("#first").css("display", "");
  $("#second").css("display", "none");
  $("#bgi").attr("class", "background-image-1");
});

$("#hizmetler").click(function () {
  $("#first").css("display", "none");
  $("#second").css("display", "");
  $("#bgi").attr("class", "background-image-2");
});
