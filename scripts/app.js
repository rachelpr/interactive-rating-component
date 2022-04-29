$(document).ready(function () {
  //$(".thanks").hide();
  let clickedNum = " ";

  $(".numBtn").on("click", function () {
    $(".numBtn").removeClass("btnClicked");
    $(this).addClass("btnClicked");
    //let $numButton = $(this).parents("button").find(".numBtn");
    //let rating = $(this).attr("value");
    clickedNum = $(this).text(); 
    //console.log($(this).html());
  });

  $("#submitRating").on("click", function (event) {
    $(".rating").hide();
    $(".thanks").show();
    //let $numButton = $(this).parents("button").find(".numBtn");

    //$('.numbers').children.find('.numBtn')
    console.log($(".numBtn.btnClicked").text());

    //let rating = $(this).attr("value");
    $("#selectedNum").html(clickedNum); 
    //console.log($(".btnClicked").html());
  });
});
