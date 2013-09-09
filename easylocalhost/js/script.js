$('.total').text($('nav a').length);

$(window).load(function(){
	$('#search').val('').focus();
})

$('.orderByName').on('click', function(){
	if( !$(this).hasClass('active') ){
		var mylist = $('nav');
		var listitems = mylist.children('a').get();
		listitems.sort(function(a, b) {
			return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
		})
		$.each(listitems, function(idx, itm) { mylist.append(itm); });
		// ADD CLASS ACTIVE
		$(this).addClass('active');
		$('.orderByDate').removeClass('active');
		$('nav a').css({'color':'#FFFFFF'});
		$('nav a span').css({'color':'#8A8A8A'});
	}
})

$('.orderByDate').on('click', function(){
	if(!$(this).hasClass('active') ){

		$total = $('nav a').length;
		for( $i = 0; $i <= $total; $i++ ){
			console.log('teste');
			$('nav a[rel='+$i+']').appendTo($('nav'));
		}

		$('.orderByName').removeClass('active');
		$(this).addClass('active');
		$('nav a').css({'color':'#8A8A8A'});
		$('nav a span').css({'color':'#FFFFFF'});
	}
});

$('[type="button"]').mouseenter(function(){
	$(this).animate({
		opacity: 0.8
	},300)
}).mouseleave(function(){
	$(this).animate({
		opacity: 1
	},300)
})

$(function() {
	$('#search').fastLiveFilter('nav', {
		timeout: 200,
		callback: function(total) { $('.total').html(total); }
	});
});

$(document).keydown(function(){
	$('#search').focus();
})
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		if($("#search:focus")) $('#search').focus().val('').keydown();
	}else if (e.keyCode == 13) {
		if ( $('nav a:visible').length == 1 ) {
			window.location = $('nav a:visible').attr('href');
		}
	}
});