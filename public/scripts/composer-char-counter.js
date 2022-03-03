$(() => {
  $("textarea").on("keyup", function (e) {
    var charCount = $("textarea").val().length;
    var counter = $(this).siblings(".counter");
    counter.text(140 - charCount);
    charCount > 140
      ? counter.css("color", "red")
      : counter.css("color", "#545454");
  });

  timeago.render(document.querySelectorAll(".need_to_be_rendered"));

  $("#toggle-tweet").click(function () {
    $("#toggle-content").toggle();
  });
});
