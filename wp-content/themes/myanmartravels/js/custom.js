var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
    // Main Slider
    $('.carousel').carousel({
    	interval: 5000
    });

    // ====================== Responsive Menu ======================
    $('.btn_open').click(function(){
        $(this).find('i').toggleClass('fa-bars fa-close')
        $('nav').toggleClass('hide show')
        $('body').toggleClass('scroll-show scroll-hide')
    });

    // ====================== Package Tabs ======================
    $(function () {
        $('ul.list li a').hover(function () {

            $('ul.list li').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        })
    });

    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 500, 'swing');
            hashTagActive = this.hash;
        }
    });
}

/*
     FILE ARCHIVED ON 23:16:08 Aug 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:14:10 May 20, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.525
  exclusion.robots: 0.052
  exclusion.robots.policy: 0.042
  esindex: 0.009
  cdx.remote: 12.106
  LoadShardBlock: 162.052 (3)
  PetaboxLoader3.datanode: 105.323 (5)
  PetaboxLoader3.resolve: 237.489 (3)
  load_resource: 209.302 (2)
*/