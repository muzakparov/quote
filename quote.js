var randomQuote = '',
randomAuthor = '';

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function newQuote() {
$.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
  type: 'GET',
  data: {},
  dataType: 'json',
  success: function(data) {
    randomQuote = data.quote;
    randomAuthor = data.author;

    $(".q").html(" " + randomQuote);
    $(".author").html("-" + randomAuthor);

    var color = Math.floor(Math.random() * colors.length);
    $("html body").animate({
      backgroundColor: colors[color],
      color: colors[color]
    }, 1000);
    $(".back-color").animate({
      backgroundColor: colors[color]
    }, 1000);
  },
  error: function(err) {
    alert(err);
  },
  beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "fAA72RUNvVmshnN6hM0NWsDTKx7Qp1T31Zxjsn5lZ5sK96rOzy");
  }
});
}

function tweetQuote() {
window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + randomQuote + '" ' + randomAuthor));
}

function tumblrQuote() {
window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent('"' + randomQuote + '" ' + randomAuthor));
}

$(document).ready(function() {
newQuote();

$("#new-quote").on("click", newQuote);
$(".twitter-button").on("click", tweetQuote);
$(".tumblr-button").on("click", tumblrQuote);
});