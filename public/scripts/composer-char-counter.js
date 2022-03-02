$(() => {
  let textTweet = $(".textTweet");
  let maxlength = parseInt(textTweet.attr("maxlength"), 10);

  textTweet.on("keyup keypress change", function () {
    charCount = $(this).val().length;
    charRemain = maxlength - charCount;
    $(".counter").text(charRemain);
  });

  timeago.render(document.querySelectorAll(".need_to_be_rendered"));

  $("#toggle-tweet").click(function () {
    $("#toggle-content").toggle();
  });
});