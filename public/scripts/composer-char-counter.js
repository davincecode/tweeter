$(() => {
  $("textarea").on("keyup", function () {
    let charCount = $("textarea").val().length;
    let counter = $(".counter");
    counter.text(140 - charCount);
    charCount > 140
      ? counter.css("color", "ff0000")
      : counter.css("color", "#545454");
  });
});
