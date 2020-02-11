import React from "react"

const JavaScript = () => {
  return (<>
    {/* <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    {{ $script := resources.Get "js/main.js" | minify | fingerprint }} 
    <script src="{{ $script.Permalink }}" integrity="{{ $script.Data.Integrity }}"></script>
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d80de327adfdb0f"></script>
    <script>
    "use strict";
    !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
        t.factory = function(e) {
            return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
            };
        }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
        }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
        };
        }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('vmhd2ny9ihwb');
    </script> */}
    </>
  )
}

export default JavaScript;
