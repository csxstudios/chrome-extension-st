$(function() {
  //document ready
});

$(window).on("load", function() {
  var tickers = ["TSLA", "FUV", "GLW", "PLTR", "MSFT", "CHEK"]
  var cycle = (function() {
    setInterval(function() {
      var i = getRandomInt(tickers.length);
      var target = "a[href='https://stocktwits.com/symbol/" + tickers[i] + "']";
      
      console.log("redirecting to " + target + "...");
      $(target)[0].click();
    }, 10000)
  })();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var node = document.getElementById("app");
  
  if(document.URL.indexOf("symbol") !== -1) {
    node.classList.add("symbol");
  } else {
    node.classList.add("homepage");
  }

  $('#app.symbol > div > div > div:nth-child(2)').click(function() {
    $('#app.symbol > div > div > div:nth-child(3) > div:first-child').toggleClass('d-block');
  });

	$("#app.homepage").bind("DOMSubtreeModified", function() {
		
        $('h5').parent().css({"overflow":"visible"});
        $('h5').parent().parent().css({"display":"block"});
        $("span").parent().css({"font-size":"1rem"});
      
        $('div[draggable="true"]').each( function() {
          var tileColor = $(this).find("span").parent().css("color");
          if (tileColor) {
            tileColor = tileColor.replace("rgb", "rgba");
            tileColor = tileColor.slice(0, tileColor.length-1) + ", 0.3" + tileColor.slice(tileColor.length-1, tileColor.length);
            $(this).css({"background-color":tileColor});
          } else {
            $(this).css({"background-color":"rgba(16, 24, 255, 0.3)"});
          }
        });
	});
});