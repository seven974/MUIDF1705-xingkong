(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-sousuo" viewBox="0 0 1088 1024">'+""+'<path d="M1049.6 901.888a64 64 0 1 1-90.496 90.496l-181.056-180.992a62.464 62.464 0 0 1-15.168-26.944A434.432 434.432 0 1 1 833.6 704a62.4 62.4 0 0 1 34.752 16.704zM461.632 134.4a320 320 0 1 0 320 320 320 320 0 0 0-320-320z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-zuobian" viewBox="0 0 1024 1024">'+""+'<path d="M282.7 458L634.6 85.9c27.8-29.4 74.3-30.8 103.7-2.9 29.4 27.8 30.8 74.3 2.9 103.7L436.7 508.8l304.6 322.1c27.8 29.4 26.5 75.9-2.9 103.7-29.4 27.8-75.9 26.5-103.7-2.9l-352-372.1c-13.5-14.1-20.4-32.3-20.4-50.6 0-18.6 6.9-36.9 20.4-51z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-youbian" viewBox="0 0 1024 1024">'+""+'<path d="M683.968 150.891c7.959 8.525 12.846 20.009 12.846 32.634 0 13.709-5.763 26.074-14.999 34.801l-301.655 282.581 311.168 291.328c9.286 8.721 15.070 21.077 15.070 34.784 0 26.333-21.345 47.678-47.678 47.678-12.625 0-24.104-4.907-32.633-12.917l-348.136-326.057c-9.303-8.713-15.099-21.071-15.1-34.784s5.795-26.071 15.073-34.76l338.714-317.335c8.514-7.988 20.001-12.895 32.635-12.896 13.656 0 25.97 5.733 34.672 14.921z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-sousuo1" viewBox="0 0 1024 1024">'+""+'<path d="M667.485 624.923c42.706-52.42 68.32-119.342 68.32-192.26 0-168.148-136.159-304.427-304.129-304.427s-304.152 136.28-304.152 304.427c0 168.134 136.182 304.42 304.153 304.42 73.216 0 140.382-25.892 192.869-69.03l227.477 227.668 43.014-43.051-227.552-227.747z m-235.808 51.242c-134.412 0-243.317-109.009-243.317-243.502 0-134.499 108.905-243.515 243.317-243.515 134.369 0 243.297 109.016 243.297 243.515 0 134.486-108.929 243.502-243.297 243.502z" fill="#333333" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)