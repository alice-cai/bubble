function main(endpoint) {
    document.getElementById("wordcloud").innerHTML = "Loading, please wait...";
    const xmlhttp = new XMLHttpRequest();
    const url = `${window.location.origin}/${endpoint}`;
    xmlhttp.open("GET", url, true);

    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("wordcloud").innerHTML = "";
            const words = JSON.parse(this.responseText).data;
            d3.wordcloud()
                .size([1000, 600])
                .fill(d3.scale.ordinal().range(["#000000", "#3d3d3d", "#828282", "#bcbcbc", "#e0e0e0", "#ff998c", "#ffe48c", "#c9ff8c", "#8ccfff", "#e28cff"]))
                .words(words)
                .onwordclick(function(d, i) {
                    if (d.href) { window.location = d.href[0]; }
                })
                .start();
        }
    };
    xmlhttp.send();
}
