$(document).ready(function () {
  $(".thanks").hide();

  $(".numBtn").on("click", function () {
    $(".numBtn").removeClass("btnClicked")
    $(this).addClass("btnClicked")
    let $numButton = $(this).parents("button").find(".numBtn")
    let rating = $(this).attr("value");
    //console.log($(this).html())

  });



  $("#submitRating").on("click", function (event) {
    $(".rating").empty();
    $(".thanks").show();
    console.log($(".btnClicked").html())
  });
});

const createThanksElement = function (rating) {
  const $thanks = $(`<section class="thanks" id="thanks-container"></section>`);
  let $thanksContent = $(`
  <span>
      <h3>
        You selected #
        <!-- Add rating here -->
        out of 5
      </h3>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
  </span>`);
  return $thanks.html($thanksContent);
}

const renderThanks = function (ratings) {
  for (let rating of ratings) {
    let newRating = createThanksElement(rating);
    $("#thanks-container").append(thanks)
  }
}