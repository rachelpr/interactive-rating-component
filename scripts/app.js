$(document).ready(function () {
  $(".thanks").hide();

  $("button").click(function () {
    let $numBtn = $(this).parents(".numbers").find(".numBtn");

    $($numBtn).toggleClass("btnClicked");
  });

  $("#submitRating").on("click", function (event) {
    $(".thanks").show();
  });
});
