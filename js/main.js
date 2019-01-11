$(document).ready(function () {

    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#cartoonVideo").attr('src', '');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#myModal").on('shown.bs.modal', function () {
        $("#cartoonVideo").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function () {
        $("#cartoonVideo").attr('src', '');
    });

   
    $('#down3','#down4','#down','#bs','#down2','#downc').click(function () {
        move();
    });
   
    $('.button-down').click(function () {
        move();
    })


    $('.button-close').click(function() {
        $('#exampleModal').modal('toggle');
        vimeoWrap = $('#vimeoWrap');
        vimeoWrap.html( vimeoWrap.html() );
     });

     $('#exampleModal').click(function() {
        $('#exampleModal').modal('toggle');
        vimeoWrap = $('#vimeoWrap');
        vimeoWrap.html( vimeoWrap.html() );
     });

     
   

    

    var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    // Chrome
  } else {
     // Safari
    $("responsiveli2").css("margin-bottom","8px")
  }
}

  

    move();

    if($(window).width() <= 768){
        $.scrollify({
            section : ".section",
            easing: "easeOutExpo",
            scrollSpeed: 700,
            offset : 0,
            scrollbars: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true
          });
    }else{
        $.scrollify({
            section : "section",
            easing: "easeOutExpo",
            scrollSpeed: 700,
            offset : 0,
            scrollbars: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true
          });
    }

  

    function move() {
        var retrievedObject = localStorage.getItem('sections');
        if (retrievedObject != null) {
           /* $("html, body").animate({
                scrollTop: $('#' + retrievedObject).offset().top
            }, 1000);
            localStorage.clear();*/
            var section =('#' + retrievedObject);
            $.scrollify.instantMove(section);
        }
    }

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    var animationAboutUsActive = false;

    function animationAboutUs() {
        if ($(window).width() <= 1000 && !animationAboutUsActive) {
            animationAboutUsActive = true;
            $("#coolDiv").css("display", "flex");
            var left = $('#coolDiv').offset().left;
            $("#coolDiv").css('height', $(window).height());

            $("#coolDiv").css({
                left: left
            }).animate({
                "left": "0%",
                'width': '100%'
            }, {
                duration: 1000,
                complete: function () {
                    $('.text-aboutus').fadeIn(500).removeClass('hidden');
                    $('#titleAU').fadeIn(500).removeClass('hidden');
                }
            });
            $("#titleAU").css("visibility", "visible");
        }
        if (!animationAboutUsActive) {
            $("#coolDiv").css("display", "flex");
            animationAboutUsActive = true;
            var left = $('#coolDiv').offset().left;
            $("#about_usPri").fadeOut(2000);
            $("#coolDiv").css({
                left: left
            }).animate({
                "left": "50%",
                'width': '50%'
            }, {
                duration: 1000,
                complete: function () {
                    $('.text-aboutus').fadeIn(500).removeClass('hidden');
                    $('#titleAU2').fadeIn(500).removeClass('hidden');
                }
            });

            $("#coolDiv").css('height', $(window).height());
            //  $("#coolDiv").css('width','50%');
        }


    }

    //ANIMATION TASC//////////////////////////////
    var url = window.location.pathname;
    url = url.split("/");


    if (url[url.length - 1] == "tasc.html") {
        var animationTasc = false;
        $(".excuteSectionTasc").click(function () {
            animateTasc()
        });

        function animateTasc() {
            if (!animationTasc) {
                animationTasc = true;
                var attrheight = $(window).height() + "px solid white";
                var attrwidht = parseInt($(window).width() + parseInt(404)) + "px";
                $("#animateTasc").css("display", "flex");
                let left = $('#animateTasc').offset().left;
                $("#animateTasc").css('height', $(window).height());
                $("#animateTasc").css('border-left', '400px solid transparent');

                $("#animateTasc").css('border-bottom', attrheight)
                $("#animateTasc").css({
                    left: left
                }).animate({
                    "left": "-403px",
                    'width': attrwidht
                }, {
                    duration: 1000,
                    complete: function () {
                        $("#animateTasc").css("position", "relative");
                        $("#introductionTasc").css('display', 'none')
                        $(".changecolor").css("color", "black");
                        $('.logo').attr('src', 'img/logo-grupopsa.png');
                        $(".le-container").css("color", "black");
                        $(".le").css("color", "black");
                        $(".button-contact").css("color", "black");
                        $(".button-contact").css("border-color", "black");
                        $(".menu").attr('src', 'img/menu-black.svg');
                        $('#body-tasc').fadeIn(200).removeClass('hidden');

                    }
                });
            }

        }
        setTimeout(function(){ animateTasc(); }, 1000);
        
    }



    //ANIMATION HUACRHA//////////////////////////////

    var url = window.location.pathname;
    url = url.split("/");


    if (url[url.length - 1] == "huarcha.html") {
        var animationHuaracha = false;
        $(".excuteSectionHuaracha").click(function () {
            animateHuaracha()
        });

        function animateHuaracha() {
            if (!animationHuaracha) {
                animationHuaracha = true;
                var attrheight = $(window).height() + "px solid white";
                var attrwidht = parseInt($(window).width() + parseInt(404)) + "px";

                $("#animateHuaracha").css("display", "flex");
                $("#animateHuaracha").css("left", "137%");

                let left = $('#animateHuaracha').offset().left;
                $("#animateHuaracha").css('height', $(window).height());
                $(".figure2:after").css('border-width', $(window).height() / 2);

                $("#animateHuaracha").css({
                    left: left
                }).animate({
                    "left": "0%",
                }, {
                    duration: 1000,
                    complete: function () {
                        $("#animateHuaracha").css("position", "relative");
                        $("#introductionHuaracha").css('display', 'none')
                        $('.logo').attr('src', 'img/logo-grupopsa.png');
                        $(".le-container").css("color", "black");
                        $(".le").css("color", "black");
                        $(".button-contact").css("color", "black");
                        $(".button-contact").css("border-color", "black");
                        $(".menu").attr('src', 'img/menu-black.svg');
                        $(".changecolor").css("color", "black");
                        $('#body-huaracha').fadeIn(200).removeClass('hidden');

                        
                        var marginInical =$( "#img1tasc" ).height()/2;
                        marginInical = '-'+marginInical+'px';
                        $("#title1").css("margin-top",marginInical);

                    }
                });
            }

        }
        setTimeout(function(){ animateHuaracha(); }, 1000);


    }

    //ANIMATION naturagave//////////////////////////////


    var url = window.location.pathname;
    url = url.split("/");


    if (url[url.length - 1] == "naturagave.html") {
        var animationNaturagave = false;
        $(".excuteNaturagave").click(function () {
            animateNaturagave()

        });

        function animateNaturagave() {
            var radius = $(window).height() / 2 + "px 1px 1px " + $(window).height() / 2 + "px";
            $("#animateNaturagave").css('border-radius', radius);
            if (!animationNaturagave) {

                animationNaturagave = true;
                var attrheight = $(window).height() + "px solid white";
                var attrwidht = parseInt($(window).width() + parseInt(550)) + "px";

              
                $("#animateNaturagave").css("display", "flex");
                let left = $('#animateNaturagave').offset().left;
                $("#animateNaturagave").css('height', $(window).height());
                $("#body-naturagave").css("margin-left", "550px")




                $("#animateNaturagave").css({
                    left: left
                }).animate({
                    "left": "-550px",
                    'width': attrwidht
                }, {
                    duration: 1000,
                    complete: function () {
                        $("#animateNaturagave").css("position", "relative");
                         $("#introductionNaturagave").css('display','none')
                        $('.logo').attr('src', 'img/logo-grupopsa.png');
                        $(".changecolor").css("color", "black");
                        $(".le-container").css("color", "black");
                        $(".le").css("color", "black");
                        $(".button-contact").css("color", "black");
                        $(".button-contact").css("border-color", "black");
                        $(".menu").attr('src', 'img/menu-black.svg');
                        $('#body-naturagave').fadeIn(200).removeClass('hidden');

                        var marginInical =$( "#img2natu" ).height()/2;
                        marginInical = '-'+marginInical+'px';
                        $("#title3").css("margin-top",marginInical);

                        var marginInical2 =$( "#img3natuSize" ).height()/2;
                        marginInical2 = '-'+marginInical2+'px';
                        $("#title4").css("margin-top",marginInical2);

                        var marginInical3 =$( "#img4natuSize" ).height()/2;
                        marginInical3 = '-'+marginInical3+'px';
                        $("#title5").css("margin-top",marginInical3);

                    }
                });
            }

        }


        setTimeout(function(){ animateNaturagave(); }, 1000);
    }



    $(".nav").css('width', $(window).width());

    $(window).resize(function () {
        $("#coolDiv").css('height', $(window).height());
        $(".nav").css('width', $(window).width());

    });





    /* if (window.matchMedia("(orientation: landscape)").matches) {
        console.log("2")
        $(".introduction").css('height',"700px");
        $("#centerIntroduction").css("padding-top","95px");
     }

      window.addEventListener("orientationchange", function() {
        if (window.matchMedia("(orientation: portrait)").matches) {
            console.log("1")
         }
         
         if (window.matchMedia("(orientation: landscape)").matches) {
            console.log("2")
            $(".introduction").css('height',"650px");
         }
    }, false);*/


    function desactiveSection() {
        $('#bs-active').css("opacity", "0.4");
        $('#company-active').css("opacity", "0.4");
        $('#tasc-active').css("opacity", "0.4");
        $('#huarcha-active').css("opacity", "0.4");
        $('#naturagave-active').css("opacity", "0.4");
        $('#au-active').css("opacity", "0.4");
        $('#contact-active').css("opacity", "0.4");
        $('#company-active').html("COMPANY");
        $('#bs-active').html("BUSINESS UNITS");
        $('#au-active').html("ABOUT US");
        $('#contact-active').html("CONTACT");
        $('#tasc-active').html("THE AGAVE</br>SWEETENER COMPANY");
        $('#huarcha-active').css("opacity", "0.4");
        $('#huarcha-active').html("LA HUARACHA</br>CASA DESTILADORA");
        $('#naturagave-active').css("opacity", "0.4");
        $('#naturagave-active').html("NATURAGAVE");

    }
    var position1 = $(window).scrollTop();
    var position2 = $(window).scrollTop();
    var position3 = $(window).scrollTop();
    var position4 = $(window).scrollTop();
    var position5 = $(window).scrollTop();


    var marginTitle1 = '0'
    var marginTitle2 = '0';
    var marginTitle3 = '0';
    var marginTitle4 = '0';
    var marginTitle5 = '0';

    if($(window).width() <= 1000){
        var limitUp = 80;
        var limitDown = -'20';
    }
    else{
        var limitUp = 250;
        var limitDown = -'40';
    }

   

    var active1=true;
    var active2=true;
    var active3=true;
    var active4=true;
    $(window).on('resize scroll', function (event) {


        $('#body-tasc').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                $(".changecolor").css("color", "black");
            }
        });
        $('#tasc').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                
            }
        });
        $('#huaracha').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
              
            }
        });

        $('#naturagave').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
               
            }
        });


        $('#intro-tasc').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport() && animationTasc == false) {
                $(".changecolor").css("color", "white");
            }
        });


        $('#body-huaracha').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                $(".changecolor").css("color", "black");


                /*   let marginTop2;
                   if(scroll > position && marginTitle2 <=300) {
                       marginTitle2 = marginTitle2 + 3;
                       marginTop2 =marginTitle2+"px";
                   } else  {
                       if(marginTitle2 >= '0'){
                           marginTitle2 = marginTitle2 - 3;
                           marginTop2 =marginTitle2+"px";
                       }
                   }
                   $("#title2").css("margin-top",marginTop2);


                   position = scroll;*/

            }
        });
     
        let marginTop1;
       
        $('#img1tasc').each(function () {
            
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
               
                var scroll = $(window).scrollTop();
                if(active1){
                    marginTitle1 =  -$( "#img1tasc" ).height()/2;
                    active1 = false;
                }
                if (scroll > position1 && marginTitle1<= limitUp) {
                    marginTitle1 = parseInt(marginTitle1) + 5;
                    marginTop1 = marginTitle1 + "px";
                } else {
                    if(marginTitle1>=(-$( "#img1tasc" ).height()/2)){
                    marginTitle1 = parseInt(marginTitle1) - 5;
                    marginTop1 = marginTitle1 + "px";
                    }
                }
                if(marginTitle1 >= ($( "#img1tasc" ).height()/2)){
                    marginTitle1 = ($( "#img1tasc" ).height()/2);
                }
                $("#title1").css("margin-top", marginTop1);
                position1 = scroll;

            }
        });

        let marginTop2;
        $('#img2tasc').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                var scroll = $(window).scrollTop();


                if (scroll > position2 && marginTitle2 <= limitUp) {
                    marginTitle2 = parseInt(marginTitle2) + 3;
                    marginTop2 = marginTitle2 + "px";
                } else {
                    if(marginTitle2>=limitDown){
                    marginTitle2 = parseInt(marginTitle2) - 3;
                    marginTop2 = marginTitle2 + "px";
                    }
                }

                if(marginTitle2 >= limitUp){
                    marginTitle2 = limitUp;
                }
       
                $("#title2").css("margin-top", marginTop2);
                position2 = scroll;

            }
        });
        //-------------------------/////


        let marginTop3;
        $('#img2natu').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                var scroll = $(window).scrollTop();
                if(active2){
                    marginTitle3 =  -$( "#img2natu" ).height()/2;
                    active2 = false;
                }


                if (scroll > position3 && marginTitle3<= $( "#img2natu" ).height()/2) {
                    marginTitle3 = parseInt(marginTitle3) + 5;
                    marginTop3 = marginTitle3 + "px";
                } else {
                    if(marginTitle3>=(-$( "#img2natu" ).height()/2)){
                    marginTitle3 = parseInt(marginTitle3) - 5;
                    marginTop3 = marginTitle3 + "px";
                    }
                }
                if(marginTitle3 >= ($( "#img2natu" ).height()/2)){
                    marginTitle3 = ($( "#img2natu" ).height()/2);
                }
                $("#title3").css("margin-top", marginTop3);
                position3 = scroll;

            }
        });

        let marginTop4;
        $('#img3natu').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                var scroll = $(window).scrollTop();
                if(active3){
                    marginTitle4 =  -$( "#img3natuSize" ).height()/2;
                    active3 = false;
                }



                if (scroll > position4 && marginTitle4<= limitUp) {
                    marginTitle4 = parseInt(marginTitle4) + 5;
                    marginTop4 = marginTitle4 + "px";
                } else {
                    if(marginTitle4>=(-$( "#img3natuSize" ).height()/2)){
                    marginTitle4 = parseInt(marginTitle4) - 5;
                    marginTop4 = marginTitle4 + "px";
                    }
                }
                if(marginTitle4 >= $( "#img3natuSize" ).height()/2){
                    marginTitle4 = $( "#img3natuSize" ).height()/2;
                }
                $("#title4").css("margin-top", marginTop4);
                position4 = scroll;

            }
        });

        let marginTop5;
        $('#img4natu').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                var scroll = $(window).scrollTop();
                if(active4){
                    marginTitle5 =  -$( "#img4natuSize" ).height()/2;
                    active4 = false;
                }


                if (scroll > position5 && marginTitle5<= $( "#img4natuSize" ).height()/2 ) {
                    marginTitle5 = parseInt(marginTitle5) + 5;
                    marginTop5 = marginTitle5 + "px";
                } else {
                    if(marginTitle5>=-$( "#img4natuSize" ).height()/2){
                    marginTitle5 = parseInt(marginTitle5) - 5;
                    marginTop5 = marginTitle5 + "px";
                    }
                }
                if(marginTitle5 >= $( "#img4natuSize" ).height()/2){
                    marginTitle5 = $( "#img4natuSize" ).height()/2;
                }
                $("#title5").css("margin-top", marginTop5);
                position5 = scroll;

            }
        });



        $('#intro-huaracha').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport() && animationHuaracha == false) {
                $(".changecolor").css("color", "white");
            }
        });

        $('#body-naturagave').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                $(".changecolor").css("color", "black");
            }
        });
        $('#intro-naturagave').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport() && animationNaturagave == false) {
                $(".changecolor").css("color", "white");
            }
        });



    });

    $(window).on('resize scroll', function () {
        $('#introduction').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#company-active').css("opacity", "0.7");
                $('#company-active').html("COMPANY —");


            }
        });

        $('#carouselFade').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#company-active').css("opacity", "0.7");
                $('#company-active').html("COMPANY —");


            }
        });

        $('#business_unit').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#bs-active').css("opacity", "0.7");
                $('#bs-active').html("BUSINESS UNITS —");
            }
        });

        $('#about_us').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#au-active').css("opacity", "0.7");
                $('#au-active').html("ABOUT US —");
                animationAboutUs();
            }
        });

        $('#contact').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#contact-active').css("opacity", "0.7");
                $('#contact-active').html("CONTACT —");
            }
        });

        $('#tasc').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#tasc-active').css("opacity", "0.7");
                $('#tasc-active').html("THE AGAVE —</br>SWEETENER COMPANY");
            }
        });

        $('#huaracha').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#huarcha-active').css("opacity", "0.7");
                $('#huarcha-active').html("LA HUARACHA —</br>CASA DESTILADORA");
            }
        });


        $('#naturagave').each(function () {
            var id = $(this).attr('id');
            if ($(this).isInViewport()) {
                desactiveSection();
                $('#naturagave-active').css("opacity", "0.7");
                $('#naturagave-active').html("NATURAGAVE —");
            }
        });

       



    });

    /*  $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('.intro-tasc').each(function() {
         
            var topDistance = $(this).offset().top;
            if ( (topDistance) < scrollTop ) {
                console.log('black')
                $('.le-black').css('color',$(this).attr('data-color'));
                $('.le-container-black').css('color',$(this).attr('data-color'));
                $('.button-contact-black').css('color',$(this).attr('data-color'));
                $('.button-contact-black').css('border-color',$(this).attr('data-color'));
                
            }
        });
    });*/








});

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function setSection(section) {
    localStorage.setItem('sections', section);
}



/*var modal = document.getElementById('myModal');
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("cerrar")[0];
span.onclick = function () {
    modal.style.display = "none";
}

var modal2 = document.getElementById('myModal2');
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}
var span2 = document.getElementsByClassName("cerrar2")[0];
span2.onclick = function () {
    modal2.style.display = "none";
}

var modal3 = document.getElementById('myModal3');
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}
var span3 = document.getElementsByClassName("cerrar3")[0];
span3.onclick = function () {
    modal3.style.display = "none";
}

var modal4 = document.getElementById('myModal4');
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function () {
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}
var span4 = document.getElementsByClassName("cerrar4")[0];
span4.onclick = function () {
    modal4.style.display = "none";
}

var modal5 = document.getElementById('myModal5');
var img5 = document.getElementById('myImg5');
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function () {
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
}
var span5 = document.getElementsByClassName("cerrar5")[0];
span5.onclick = function () {
    modal5.style.display = "none";
}

var modal6 = document.getElementById('myModal6');
var img6 = document.getElementById('myImg6');
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function () {
    modal6.style.display = "block";
    modalImg6.src = this.src;
    captionText6.innerHTML = this.alt;
}
var span6 = document.getElementsByClassName("cerrar6")[0];
span6.onclick = function () {
    modal6.style.display = "none";
}

var modal7 = document.getElementById('myModal7');
var img7 = document.getElementById('myImg7');
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption7");
img7.onclick = function () {
    modal7.style.display = "block";
    modalImg7.src = this.src;
    captionText7.innerHTML = this.alt;
}
var span7 = document.getElementsByClassName("cerrar7")[0];
span7.onclick = function () {
    modal7.style.display = "none";
}

var modal8 = document.getElementById('myModal8');
var img8 = document.getElementById('myImg8');
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption8");
img8.onclick = function () {
    modal8.style.display = "block";
    modalImg8.src = this.src;
    captionText8.innerHTML = this.alt;
}
var span8 = document.getElementsByClassName("cerrar8")[0];
span8.onclick = function () {
    modal8.style.display = "none";
}*/
