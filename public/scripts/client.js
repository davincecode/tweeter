/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//$(() => {});

$(() => {
  // GET request
  const $container = $("div.container");
  const $textTweet = $(".tweetPost");

  $.ajax({
    type: "GET",
    url: "/tweets",
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, item) {
        $container.prepend(`
        <div class="tweet-container">
          <section class="tweet-author">
          <div class="auth-info">
            <img src="${item.user.avatars}" width="50px">
            <span class="auth-name">${item.user.name}</span>
          </div>
          <div class="auth-username">
            <p>${item.user.handle}</p>
          </div>
        </section>
        <section class="article-tweet">
          <p>${item.content.text}</p>
        </section>
        <section class="tweet-info">
          <span class="need_to_be_rendered" datetime="${item.user.created_at}"></span>
          <aside>
            <a class="tweetlinks"><i class="fa-solid fa-flag"></i></a>
            <a class="tweetlinks"><i class="fa-solid fa-retweet"></i></a>
            <a class="tweetlinks"><i class="fa-solid fa-heart"></i></a>
          </aside>
        </section>
        </div>
        `);
      });
    },
    error: function () {
      alert("Error: " + error);
    },
  });

  //POST request
  $("#tweet-btn").on("click", function () {
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $textTweet.val(),
      success: function (newData) {
        $container.prepend(`
        <div class="tweet-container">
          <section class="tweet-author">
          <div class="auth-info">
            <img src="${newData.user.avatars}" width="50px">
            <span class="auth-name">${newData.user.name}</span>
          </div>
          <div class="auth-username">
            <p>${newData.user.handle}</p>
          </div>
        </section>
        <section class="article-tweet">
          <p>${newData.content.text}</p>
        </section>
        <section class="tweet-info">
          <span class="need_to_be_rendered" datetime="${newData.user.created_at}"></span>
          <aside>
            <a class="tweetlinks"><i class="fa-solid fa-flag"></i></a>
            <a class="tweetlinks"><i class="fa-solid fa-retweet"></i></a>
            <a class="tweetlinks"><i class="fa-solid fa-heart"></i></a>
          </aside>
        </section>
        </div>
        `);
      },
    });
  });
});
