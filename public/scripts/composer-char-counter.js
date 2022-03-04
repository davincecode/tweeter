$(() => {
  $("#appendPost").on("keyup", function () {
    let charCount = $("#appendPost").val().length;
    let counter = $(".counter");
    counter.text(140 - charCount);

    if (charCount > 140) {
      counter.css("color", "#ff0000");
      $("#tweet-it").prop("disabled", true);
      return $("#error-box").prepend("<small>Max character reached!</small>");
    }
    if (!(charCount > 140)) {
      return counter.css("color", "#545454");
    }
  });
});
