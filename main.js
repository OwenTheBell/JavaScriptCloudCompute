//$(window).load(function() {
var onLoad = function(e) {
    /*
    var places = 1000;
    
    Big.DP = places;
    Big.RM = 1;

    var time = new Date().getTime();
    var pi = new Big(0);
    for (var i = 0; i < places; i++) {
        var sum = new Big(16).pow(-1 * i);
        var w = new Big(4/(8*i + 1));
        var x = new Big(2/(8*i + 4));
        var y = new Big(1/(8*i + 5));
        var z = new Big(1/(8*i + 6));
        pi = pi.plus(sum.times(w.minus(x).minus(y).minus(z)));
    }
    console.log(pi.toString());
    console.log("That took: " + ((new Date().getTime()) - time));
    */
    var worker = new Worker("pi_worker.js");
    
    worker.onmessage = function(e) {
        console.log(e.data);
        console.log("That took: " + ((new Date().getTime()) - time));
    }
    var time = new Date().getTime();
    worker.postMessage("");
//});
};