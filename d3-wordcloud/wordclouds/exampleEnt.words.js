
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/entertainment";
var words;
var myArr;
xmlhttp.onreadystatechange = function() {
  console.log(this.responseText);
    //words = JSON.parse(this.responseText).data;
    if (this.readyState == 4 && this.status == 200) {
        words = JSON.parse(this.responseText);
        words = words.data;
        d3.wordcloud()
          .size([1000, 600])
          //.fill(d3.scale.ordinal().range(["#ff998c", "#ffe48c", "#c9ff8c", "#8ccfff", "#e28cff"]))
          //.fill(d3.scale.ordinal().range(["#ff5b5b", "#ffb44c", "#ffff26", "#47ff69", "#3a9cff"]))
          .fill(d3.scale.ordinal().range(["#000000", "#3d3d3d", "#828282", "#bcbcbc", "#e0e0e0", "#ff998c", "#ffe48c", "#c9ff8c", "#8ccfff", "#e28cff"]))
          .words(words)
          .onwordclick(function(d, i) {
            if (d.href) { window.location = d.href[0]; }
          })
          .start();
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
xmlhttp.setRequestHeader('Content-Type', 'application/json');

// xmlhttp.withCredentials = true;
xmlhttp.send();
