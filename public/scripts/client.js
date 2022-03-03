/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  //POST
  // $.post("/tweets", function (event) {
  //   event.preventDefault();

  //   const elements = convertToHTML(tweets);
  //   $("#tweetLoad").html(elements);
  // });

  // $.ajax({
  //   type: "POST",
  //   url: "/",
  //   data: data,
  //   success: success,
  //   dataType: dataType,
  // });

  $("form").serialize();
  $("#tweetLoad").text(str);

  $("textarea").on("click", showValues);

  ////////////////////////////////////////////////////////////////

  // GET TWEETS
  // const renderTweets = function (tweets) {
  //   // loops through tweets
  //   // calls createTweetElement for each tweet
  //   // takes return value and appends it to the tweets container

  //   for (const tweet of tweets) {
  //     let $tweet = createTweetElement(tweet);
  //     $(`.tweet-post`).append($tweet);
  //   }
  // };

  // const createTweetElement = function (tweet) {
  //   let $tweet = $(`<div class="tweet-container">
  //       <section class="tweet-author">
  //         <div class="auth-info">
  //           <img src="${tweet.user.avatars}" width="50px">
  //           <span class="auth-name">${tweet.user.name}</span>
  //         </div>
  //         <div class="auth-username">
  //           <p>${tweet.user.handle}</p>
  //         </div>
  //       </section>
  //       <section class="article-tweet">
  //         <p>${tweet.content.text}</p>
  //       </section>
  //       <section class="tweet-info">
  //         <span class="need_to_be_rendered" datetime="${tweet.user.created_at}"></span>
  //         <aside>
  //           <a class="tweetlinks"><i class="fa-solid fa-flag"></i></a>
  //           <a class="tweetlinks"><i class="fa-solid fa-retweet"></i></a>
  //           <a class="tweetlinks"><i class="fa-solid fa-heart"></i></a>
  //         </aside>
  //       </section>
  //     </div>`);

  //   return $tweet;
  // };

  // renderTweets(data);

  //GET
  // const loadtweets = function () {
  //   const $button = $("#loader");
  //   $button.on("click", function () {
  //     console.log("Button clicked, performing ajax call...");
  //     $.ajax("/tweets", { method: "GET" }).then(function (tweet) {
  //       renderTweets(tweet);
  //       console.log("Success: ", tweet);
  //       $button.replaceWith(tweet);
  //     });
  //   });
  // };

  // loadtweets();
});
