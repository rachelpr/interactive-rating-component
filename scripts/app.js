$(document).ready(function () {
  //$(".thanks").hide();
  let clickedNum = " ";

  $(".numBtn").on("click", function () {
    $(".numBtn").removeClass("btnClicked");
    $(this).addClass("btnClicked");
    clickedNum = $(this).text();
  });

  $("#submitRating").on("click", function (event) {
    $(".rating").hide();
    $(".thanks").show();
    $("#selectedNum").html(clickedNum);
  });
});
