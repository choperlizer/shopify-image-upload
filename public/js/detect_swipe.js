!function(e){function t(){this.removeEventListener("touchmove",n),this.removeEventListener("touchend",t),c=!1}function n(n){if(e.detectSwipe.preventDefault&&n.preventDefault(),c){var i,s=n.touches[0].pageX,u=n.touches[0].pageY,r=o-s,a=h-u;Math.abs(r)>=e.detectSwipe.threshold?i=r>0?"left":"right":Math.abs(a)>=e.detectSwipe.threshold&&(i=a>0?"down":"up"),i&&(t.call(this),e(this).trigger("swipe",i).trigger("swipe"+i))}}function i(e){1==e.touches.length&&(o=e.touches[0].pageX,h=e.touches[0].pageY,c=!0,this.addEventListener("touchmove",n,!1),this.addEventListener("touchend",t,!1))}function s(){this.addEventListener("touchstart",i,!1)}e.detectSwipe={version:"2.1.1",enabled:"ontouchstart"in document.documentElement,preventDefault:!0,threshold:20};var o,h,c=!1;e.event.special.swipe={setup:s},e.each(["left","up","down","right"],function(){e.event.special["swipe"+this]={setup:function(){e(this).on("swipe",e.noop)}}})}(jQuery);