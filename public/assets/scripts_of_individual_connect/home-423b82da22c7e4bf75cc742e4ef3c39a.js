var bigVideo={};!function(e){e(document).ready(function(){let i=null;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e(".home_index").find("section.hero").prepend('<div id="big-video-wrap" class="big-video-poster"></div>'):function o(){i=setTimeout(function(){if(document.getElementsByClassName("home-index").length>0){var t={container:e("#home_index").find("section.hero"),forceAutoplay:!0,useFlashForFirefox:!1,shrinkable:!1};(bigVideo=new e.BigVideo(t)).init(),bigVideo.show([{type:"video/mp4",src:"https://dadbxlstbmqt1.cloudfront.net/booyafitness_sizzle_promo_final.mp4"},{type:"video/webm",src:"http://d2xhaclmiois39.cloudfront.net/videos/booyafitness_sizzle_promo_final.webm"},{type:"video/ogg",src:"http://d2xhaclmiois39.cloudfront.net/videos/booyafitness_sizzle_promo_final.ogv"}],{ambient:!0}),e(t.container).find("video.vjs-tech").attr("poster","http://d2xhaclmiois39.cloudfront.net/images/booyafitness_sizzle_promo_final_snapshot.png"),clearTimeout(i)}else o()},500)}()})}(jQuery);