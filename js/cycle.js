var words = ["food", "beer", "race", "sexy time"];
    var i = 0;
    var text = "dating";
    function _getChangedText() {
      i = (i + 1) % words.length;
      return text.replace(/dating/, words[i]);
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
    setInterval("_changeText()", 3000);