$(() => {
  let textTweet = $(".textTweet");
  let maxlength = parseInt(textTweet.attr("maxlength"), 10);

  textTweet.on("keyup keypress change", function () {
    charCount = $(this).val().length;
    charRemain = maxlength - charCount;
    $(".char-remain").text(charRemain);
  });
});
