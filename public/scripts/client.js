/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  //Function that prevents XSS attack
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const $container = $("article.container");

  function addTweet(item) {
    $container.prepend(`
        <div class="tweet-container">
          <section class="tweet-author">
            <div class="auth-info">
              <img src="${escape(item.user.avatars)}" width="50px">
              <span class="auth-name">${escape(item.user.name)}</span>
            </div>
            <div class="auth-username">
              <p>${escape(item.user.handle)}</p>
            </div>
          </section>
          <section class="article-tweet">
              <p>${escape(item.content.text)}</p>
          </section>
          <section class="tweet-info">
              <div>${escape(timeago.format(item.created_at))}</div>
            <aside>
              <a class="tweetlinks"><i class="fa-solid fa-flag"></i></a>
              <a class="tweetlinks"><i class="fa-solid fa-retweet"></i></a>
              <a class="tweetlinks"><i class="fa-solid fa-heart"></i></a>
            </aside>
          </section>
        </div>`);
  }

  // GET request
  $.ajax({
    type: "GET",
    url: "/tweets",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, item) {
        addTweet(item);
      });
    },
    error: function () {
      alert("Error: " + error);
    },
  });

  //POST request
  const update = $appendPost.val().serialize();

  $("#btn-tweet").on("click", function (event) {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: update,
      success: function () {
        $("#post-container").html("<div id='message'>sht</div>");
        $("#message")
          .html("<h2>Contact Form Submitted!</h2>")
          .append("<p>We will be in touch soon.</p>")
          .hide()
          .fadeIn(1500, function () {
            $("#message").append(
              "<img id='checkmark' src='images/check.png' />"
            );
          });
      },
      error: function () {
        alert("Error loading tweet");
      },
    });
  });
});
