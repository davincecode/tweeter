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
  const loadTweets = function () {
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
  };

  //POST request
  $("#tweet-it").on("click", function (event) {
    event.preventDefault();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $("#appendPost").serialize(),
    })
      .then(loadTweets)
      .catch((error) =>
        $("#error-box").append(
          "<p>Sorry! You cannot post empty tweets!</p>",
          error
        )
      );
    setTimeout(function () {
      $("#error-box").remove();
    }, 3000);
  });

  loadTweets();

  // Toggle write a new tweet button
  $("#toggle-tweet").click(function () {
    $("#toggle-content").slideToggle(250);
    $("#appendPost").focus();
    $("textarea").val("");
    $(".counter").html("140");
  });

  //Time posted
  timeago.format(1473245023718);

  // Clear textarea after post
  $("#tweet-it").click(function () {
    setTimeout(function () {
      $("#appendPost").val("");
      $(".counter").text("140");
    }, 500);
  });

  //Scroll Up button
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
