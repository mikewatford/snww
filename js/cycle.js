var words = ["Food", "Race", "Sexy time"];
    var i = 0;
    var text = "Dating";
    function _getChangedText() {
      i = (i + 1) % words.length;
      return text.replace(/Dating/, words[i]);
    }
    function _changeText() {
      var txt = _getChangedText();
        var d = document.getElementById("changer")
        d.className = "fadeOut";
        setTimeout(function(){
         d.className = "";
        document.getElementById("changer").innerHTML = txt;
    }, 1000);
    }
    setInterval("_changeText()", 1800);

// var divs = $('div[id^="content-"]').hide(),
//     i = 0;

// (function cycle() { 

//     divs.eq(i).fadeIn(400)
//               .delay(1000)
//               .fadeOut(400, cycle);

//     i = ++i % divs.length;

// })();