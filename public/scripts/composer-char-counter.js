$(() => {
  $("#appendPost").on("keyup", function () {
    let charCount = $("#appendPost").val().length;
    let counter = $("#counter");
    counter.text(140 - charCount);

    if (charCount > 140) {
      counter.css("color", "#ff0000");
      return `Max character reached.`;
    }
    if (!(charCount > 140)) {
      return counter.css("color", "#545454");
    }
  });
});
