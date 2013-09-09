/*====================================================
	GALLERY AND SLIDES
====================================================*/
// SLIDE ASIAN MODE
function galleryResponsive(){
	 $images = new Array();
    for(var img in imagens) {
        $images[img] = imagens[img].imagem;
    }
    //Preloader
    $($images).each(function(){
        $("<img/>")[0].src = this; 
    });
    // Index
    var index = 0;
    // Call backstretch to div
    $('.backstretch').backstretch($images[index], {
        speed: 500
    });
    // Set interval in fadeIn
    setInterval(function() {
        index = (index >= $images.length - 1) ? 0 : index + 1;
        $('.backstretch').backstretch($images[index]);
    }, 5000);
}
// CALL //
if(($('.backstretch').length!=0)){
    yepnope([{
        load: 'js/plugins/backstretch/jquery.backstretch.min.js',
        complete: function(){
           galleryResponsive();
        }
    }]);
}
//NIVO SLIDER
function nivo(){
	$('#slider').nivoSlider({
		effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
		animSpeed: 500, // Slide transition speed
		pauseTime: 3000, // How long each slide will show
		directionNav: false, // Next & Prev navigation
		controlNav: false, // 1,2,3... navigation
		controlNavThumbs: false, // Use thumbnails for Control Nav
		pauseOnHover: false, // Stop animation while hovering
	});
}
// CALL //
if(($('#slider').length!=0)){
	yepnope([{
		load: [
			URLpath+'js/plugins/nivo/jquery.nivo.slider.pack.js',
			URLpath+'css/plugins/nivo/nivo-slider.css'
		],
		complete: function () {
			nivo();
		}
	}]);
}

// ROYAL SLIDER
function royal(orientation){
	if(orientation=='horizontal'){
		$('#royal-horizontal').royalSlider({
			fullscreen: {
				enabled: true,
				nativeFS: true
			},
			controlNavigation: 'thumbnails',
			autoScaleSlider: true, 
			autoScaleSliderWidth: 960,     
			autoScaleSliderHeight: 850,
			loop: false,
			imageScaleMode: 'fit-if-smaller',
			navigateByClick: true,
			numImagesToPreload:5,
			arrowsNavAutoHide: true,
			arrowsNavHideOnTouch: true,
			keyboardNavEnabled: true,
			fadeinLoadedSlide: true,
			globalCaption: true,
			globalCaptionInside: false,
			thumbs: {
				appendSpan: true,
				firstMargin: true,
				paddingBottom: 4
			}
		});
	}
	if(orientation=='vertical'){
		$('#royal-vertical').royalSlider({
		    fullscreen: {
		        enabled: true,
		        nativeFS: true
		    },
		    controlNavigation: 'thumbnails',
		    thumbs: {
		        orientation: 'vertical',
		        paddingBottom: 4,
		        appendSpan: true
		    },
		    transitionType:'fade',
		    autoScaleSlider: true, 
		    autoScaleSliderWidth: 960,     
		    autoScaleSliderHeight: 600,
		    loop: true,
		    arrowsNav: false,
		    keyboardNavEnabled: true
		});
	}
	if(orientation='full'){
		$('#royal-full').royalSlider({
		    arrowsNav: true,
		    loop: true,
		    keyboardNavEnabled: true,
		    controlsInside: false,
		    imageScaleMode: 'fill',
		    arrowsNavAutoHide: false,
		    autoScaleSlider: true, 
		    autoScaleSliderWidth: 960,     
		    autoScaleSliderHeight: 350,
		    controlNavigation: 'bullets',
		    thumbsFitInViewport: false,
		    navigateByClick: true,
		    startSlideId: 0,
		    autoPlay: false,
		    transitionType:'fade',
		    globalCaption: true,
		    deeplinking: {
		      enabled: true,
		      change: false
		    },
		    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
		    imgWidth: 2050,
		    imgHeight: 496
		});
	}
}

// CALL FULL ORIENTATION //
if(($('#royal-full').length!=0)){
	yepnope([{
		load: [
			URLpath+'js/plugins/royalslider/jquery.royalslider.min.js',
			URLpath+'css/plugins/royalslider/royalslider.css',
			URLpath+'css/plugins/royalslider/skins/minimal-white/rs-minimal-white.css'
		],
		complete: function () {
			royal('full');
		}
	}]);
}

// CALL VERTICAL ORIENTATION //
if(($('#royal-vertical').length!=0)){
	yepnope([{
		load: [
			URLpath+'js/plugins/royalslider/jquery.royalslider.min.js',
			URLpath+'css/plugins/royalslider/royalslider.css',
			URLpath+'css/plugins/royalslider/skins/universal/rs-universal.css'
		],
		complete: function () {
			royal('vertical');
		}
	}]);
}
// CALL HORIZONTAL ORIENTATION //
if(($('#royal-horizontal').length!=0)){
	yepnope([{
		load: [
			URLpath+'js/plugins/royalslider/jquery.royalslider.min.js',
			URLpath+'css/plugins/royalslider/royalslider.css',
			URLpath+'css/plugins/royalslider/skins/default/rs-default.css'
		],
		complete: function () {
			royal('horizontal')
		}
	}]);
}
// FANCY BOX GALLERY
function fancy(gallery){
	if(gallery=='fancybox-thumb'){
		$(".fancybox-thumb").fancybox({
			openEffect	: 'elastic',
			closeEffect	: 'elastic',
			prevEffect	: 'elastic',
			nextEffect	: 'elastic',        
			helpers	: {
				title	: {
					type: 'outside'
				},
				thumbs	: {
					width	: 50,
					height	: 50
				}
			},
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + ($.browser.msie ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Fechar" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="PrÃ³xima" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Anterior" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			}
		});
	}
	if(gallery=='various'){
		$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}
}
// CALL //
if(($('.fancybox-thumb').length!=0)){
    yepnope([{
        load: [
        URLpath+'css/plugins/fancybox/jquery.fancybox.css',
		URLpath+'css/plugins/fancybox/jquery.fancybox-buttons.css',
		URLpath+'css/plugins/fancybox/jquery.fancybox-thumbs.css',
		URLpath+'js/plugins/fancybox/jquery.fancybox.pack.js',
		URLpath+'js/plugins/fancybox/jquery.fancybox-buttons.js',
		URLpath+'js/plugins/fancybox/jquery.fancybox-media.js',
		URLpath+'js/plugins/fancybox/jquery.fancybox-thumbs.js',
		URLpath+'js/plugins/fancybox/jquery.mousewheel-3.0.6.pack.js'
        ],
        complete: function () {
            fancy('fancybox-thumb');
        }
    }]);
}

// FANCY BOX FRAME
if(($('.various').length!=0)){
	yepnope([{
		load: [
		URLpath+'css/plugins/fancybox/jquery.fancybox.css',
		URLpath+'css/plugins/fancybox/jquery.fancybox-buttons.css',
		URLpath+'css/plugins/fancybox/jquery.fancybox-thumbs.css',
		URLpath+'js/plugins/fancybox/jquery.fancybox.pack.js',
		URLpath+'js/plugins/fancybox/jquery.fancybox-buttons.js',
		URLpath+'js/plugins/fancybox/jquery.fancybox-media.js',
		URLpath+'js/plugins/fancybox/jquery.fancybox-thumbs.js',
		URLpath+'js/plugins/fancybox/jquery.mousewheel-3.0.6.pack.js'
		],
		complete: function () {
			fancy('various');
		}
	}]);
}

/*====================================================
    FUNÇÕES PADRAO FALE CONOSCO
====================================================*/
//MASKS
function mask(){
	$(".telefone").mask("(99) 9999-9999");
    $('.celular').mask("(99) 9999-9999?9").focus(function(event) {
        var target, phone, element;
        target = (event.currentTarget) ? event.currentTarget : event.srcElement;
        phone = target.value.replace(/\D/g, '');
        element = $(target);
        element.unmask();
        if(phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");  
        }
    });
    $('.celular').focusout(function(){
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if(phone.length > 10) {
            element.mask("(99) 99999-999?9");
        } else {
            element.mask("(99) 9999-9999?9");
        }
    }).trigger('focusout');
    $('.data').mask('99/99/99');
}
// CALL //
if(($('.data').length!=0)||($('.celular').length!=0)||($('.telefone').length!=0)){
    yepnope([{
        load: [
            URLpath+'js/libs/jquery.maskedinput.min.js'
        ],
        complete: function () {
        	mask();
        }
    }]);
}

//MAPS
function initialize($this, $i, $x, $y, $z, $title) {
    var myLatlng = new google.maps.LatLng($x, $y);
    var myOptions = {
        zoom: parseInt($z),
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    mapa = document.getElementsByClassName("map_canvas");
    map = new google.maps.Map(mapa[$i], myOptions);

    google.maps.event.addListener(map, 'zoom_changed', function() {
        setTimeout(moveToDarwin, 3000);
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: $title
    });
    google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(8);
    });
}
// CALL 
if(($('.map_canvas').length!=0)){
    yepnope([{
        yep:[
             'https://maps.google.com/maps/api/js?sensor=true'
        ],
        complete: function () {
            $('.map_canvas').each(function(i){
                x = $(this).attr('x');
                y = $(this).attr('y');
                z = $(this).attr('zoom');
                name = $(this).attr('alt');
                console.log(x);
                initialize($(this), i, x, y, z, name);
            });   
        }
    }]);
}
// CALL VALIDACAO
if(($('.validacao').length!=0)){
    yepnope([{
        load:[
            URLpath+'js/libs/validacao.js'
        ],
        complete: function () {
            validacao();
        }
    }]);
}

/*====================================================
    FUNÇÕES PADRAO PAGINA DE NOTICIAS
====================================================*/
//liveComment
function liveComment(){

    var user_gravatar = 'http://www.gravatar.com/avatar/a5c7b73d91365737afe89e88101bd87c';
    var gravatar = 'http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?';
                
    $('.comentarios').each(function(){
        $x = $(this).find('.email').val();
        if ($x != '') {
            gravatar = 'http://www.gravatar.com/avatar/' + MD5($x) + '?d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536&amp;';
        }
        else if (user_gravatar != '') {
            gravatar = user_gravatar + '?d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536&amp;';
        }
        $(this).find("img").attr("src",gravatar);
    });
             

    $('#comment input, #comment textarea').click(function(){
        $('#preview').fadeIn(500);
        $('#comment #name').keyup(function(){
            $('#preview .name').html($(this).val());
        });
        $('#comment #comment').keyup(function(){
            $('#preview .comment').html($(this).val());
        });
        $('#comment #email').blur(function(){
            if ($(this).val() != '') {
                gravatar = 'http://www.gravatar.com/avatar/' + MD5($(this).val()) + '?d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536&amp;';
            }
            else if (user_gravatar != '') {
                gravatar = user_gravatar + '?d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536&amp;';
            }
            $("#preview").find("img").attr("src",gravatar);
        });
    });
}
//PAGINATE
function paginate(){
    $('#fotos').easyPaginate({
        nextprev: false,
        step:6,
    });

    $('#videos').easyPaginate({
        nextprev: false,
        step:1,
        controls: 'videosp'
    });

    $qnt = $('ul#fotos li').size();
    $('.fotos-total').prepend($qnt);

    $qntv = $('ul#videos li').size();
    $('.videos-total').prepend($qntv);
}
// CALL //
if(($('#videos').length!=0)){
	yepnope([{
		load: [
			URLpath+'js/plugins/fitvids/jquery.fitvids.js'
		],
		complete: function () {
			$('#videos').fitVids();
		}
	}]);
}
// CALL //
if(($('.box-comments').length!=0)){
	yepnope([{
		load: [
			URLpath+'js/libs/jquery.md5.js'
		],
		complete: function () {
			liveComment();
		}
	}]);
}
// CALL //
if(($('.sidebar').length!=0)){
	yepnope([{
		load: [
			URLpath+'css/plugins/easypaginate/easypaginate.css',
			URLpath+'js/plugins/easypaginate/easypaginate.js'
		],
		complete: function () {
			paginate();
		}
	}]);
}
/*====================================================
	SOCIAL BUTTONS
====================================================*/
//FACEBOOK
function facebookButton(){
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=448227605194559";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}
// TWITTER
function twitterButton(){
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src="//platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}}(document,"script","twitter-wjs");
}
//GOOGLE
function plusButton(){
	window.___gcfg = {lang: 'pt-BR'};

	(function() {
		var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	})();
}
// CALL SOCIAL //
if($('.facebookButton').length!=0) facebookButton();
if($('.twitterButton').length!=0) twitterButton();
if($('.plusButton').length!=0) plusButton();

/*====================================================
    SOCIAL SHARE
====================================================*/
function share(){
     $('.share-widget').click(function(){
        $(this).parent().parent().find('.social-share').fadeIn(300);
    });
    $('.closest').live('click',function(){
        $(this).parent().fadeOut(300);
    });
    // SHARE
    $('.social-icon').live('click',function(){
        window.open($(this).attr('href'),null,
        "height=300,width=400,status=yes,toolbar=no,menubar=no,location=no");
        return false;
    });
}
if(($('.share-widget').length!=0)){
	share();
}
/*====================================================
    UTILITIES
====================================================*/
//PRELOADER PAGE
$(window).load(function(){
	$('body').fadeIn(500);
});
setTimeout(function(){
	$('body').fadeIn(500);
},3000);

//CENTRALIZA
function centraliza(){
    $(window).load(function(){
		$('#nome-da-div-pai .image img').each(function(){
			$(this).css({'margin-top':($(this).parent().height()-$(this).height())/2});
		});
	});
    $(window).resize(function(){
        $('#nome-da-div-pai .image img').each(function(){
			$(this).css({'margin-top':($(this).parent().height()-$(this).height())/2});
		});
    });
}
// CALL //
if(($('#nome-da-div-pai').length!=0)){
   centraliza();
}

//MENU
function menu($x){
	$('header.main .menu a:eq('+$x+')').addClass('active');
}

// VOLTAR
if($('.back').length!=0){
	$('.back').bind('click touch',function(){
	    window.history.back();
	});
}
// GO TO TOP
if($('.go-to-top').length!=0){
	$('.go-to-top').click(function(){
		$('body,html').animate({scrollTop: 0},800);
	});
}

/*====================================================
	RESPONSIVE UTILITIES
====================================================*/
// RESPONSIVE MENU
function responsiveMenu(){
	var con1, con2;
	con1 = Harvey.attach('screen and (min-width:770px)', {
		on: function() {
			$('.nome-da-div').show();
		}
	});
	con2 = Harvey.attach('screen and (max-width:767px)', {
		on: function() {
			$('.nome-da-div').hide();
		}
	});
}
//DIV SQUARE
function boxResize(){
    $(document).ready(function () {
        $('#image-centered >div').css('height',$('#image-centered >div').css('width'));
    });
    $(window).resize(function(){
        $('#image-centered >div').css('height',$('#image-centered >div').css('width'));
    });
}
// CALL //
if(($('#image-centered').length!=0)){
   boxResize();
}