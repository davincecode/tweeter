$(() => {
  $("textarea").on("keyup", function (e) {
    let charCount = $("textarea").val().length;
    let counter = $(".counter");
    counter.text(140 - charCount);
    charCount > 140
      ? counter.css("color", "red")
      : counter.css("color", "#545454");
  });
});

$(() => {
  $("#toggle-tweet").click(function () {
    $("#toggle-content").toggle();
  });
});

$(() => {
  timeago.format(1473245023718);
});
