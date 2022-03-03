$(() => {
  $("textarea").on("keyup", function () {
    let charCount = $("textarea").val().length;
    let counter = $(".counter");
    counter.text(140 - charCount);
    charCount > 140
      ? counter.css("color", "ff0000")
      : counter.css("color", "#545454");
  });

  $("#toggle-tweet").click(function () {
    $("#toggle-content").slideToggle(250);
    $("#appendPost").focus();
    $("textarea").val("");
    $(".counter").html("140");
  });

  timeago.format(1473245023718);
});
