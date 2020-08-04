    $(document).ready(function () {
        //导航固定
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>30){
                    $("#header").addClass("fudong");
                    $("#header").fadeIn(300);
                    
                }
                else{ 
                    $("#header").removeClass("fudong");
                    $("#fudong").fadeOut(10);
                }
            });
        });


        //导航
         $('#hzMenu li').hover(function () {
             $('ul', this).slideDown(100);
             $(this).addClass("hov");
         }, function () {
             $('ul', this).slideUp(100);
             $(this).removeClass("hov");
         });
         

        //小屏
        $(".l-open").click(function () {
            $(".hzMenu").removeClass("sho");
            $(".window").removeClass("hide");
        });

        $(".window").click(function(){
            $(".hzMenu").addClass("sho");
            $(".hzMenu .subnav").addClass("sho");
            $(".window").addClass("hide");
        });

        $(".l-open").click(function () {
            $(".hzMenu").removeClass("sho");
            $(".window").removeClass("hide");
        });
       
        if ((
            screen.width> 1200)) {
            $(".window").addClass('hide');
        };

        $(".hzMenu li").click(function () {
            $(this).children('.subnav').removeClass('sho');
        });
  
        $(".fanhui").click(function (event) {
            $(this).parent('.subnav').addClass("sho");
            return false;//阻止冒泡
        });

        //banner
        var swiper = new Swiper('.banner', {
            pagination: '.swiper-pagination'
            , paginationClickable: true
            , spaceBetween: 0
            , centeredSlides: true
            , autoplay: 5000
            ,speed:1500 
            , autoplayDisableOnInteraction: false
            ,loop: true
            ,nextButton: '.swiper-button-next'
            ,prevButton: '.swiper-button-prev'
        });

        window.onload = function () {
            //领域
            var tabsSwiper = new Swiper('#tabs-container', {
                speed: 500
                , onSlideChangeStart: function () {
                    $(".tabs .active").removeClass('active')
                    $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')
                }
            })
            $(".tabs a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".tabs .active").removeClass('active')
                $(this).addClass('active')
                tabsSwiper.slideTo($(this).index())
            })
            $(".tabs a").click(function (e) {
                e.preventDefault()
            })
        

            //新闻左
            var tabsSwiper1 = new Swiper('#tabs-container1', {
                speed: 500
                , onSlideChangeStart: function () {
                    $(".tabs1 .active1").removeClass('active1')
                    $(".tabs1 a").eq(tabsSwiper1.activeIndex).addClass('active1')
                }
            })
            $(".tabs1 a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".tabs1 .active1").removeClass('active1')
                $(this).addClass('active1')
                tabsSwiper1.slideTo($(this).index())
            })
            $(".tabs1 a").click(function (e) {
                e.preventDefault()
            })

            //观点右
            var tabsSwiper2 = new Swiper('#tabs-container2', {
                speed: 500
                , onSlideChangeStart: function () {
                    $(".tabs2 .active2").removeClass('active2')
                    $(".tabs2 a").eq(tabsSwiper2.activeIndex).addClass('active2')
                }
            })
            $(".tabs2 a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".tabs2 .active2").removeClass('active2')
                $(this).addClass('active2')
                tabsSwiper2.slideTo($(this).index())
            })
            $(".tabs2 a").click(function (e) {
                e.preventDefault()
            })

            //项目详情
            var tabsSwiper3 = new Swiper('#tabs-container3', {
                speed: 500
                ,nextButton: '.swiper-button-next'
                ,prevButton: '.swiper-button-prev'
                , onSlideChangeStart: function () {
                    $(".tabs3 .active3").removeClass('active3')
                    $(".tabs3 a").eq(tabsSwiper3.activeIndex).addClass('active3')
                }
            })
            $(".tabs3 a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".tabs3 .active3").removeClass('active3')
                $(this).addClass('active3')
                tabsSwiper3.slideTo($(this).index())
            })
            $(".tabs3 a").click(function (e) {
                e.preventDefault()
            })

        }
     });
    /*window.onload = function () {
         //获取栏目
         var oPages = document.getElementById('pages-tt')
         var aAfd = oPages.getElementsByTagName('a');
         var num = null;
         for (var i = 0; i < aAfd.length; i++) {
             num += aAfd[i].offsetWidth;
         }
         oPages.style.width = num + 'px';

     }*/



     