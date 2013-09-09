$(document).ready(function(){
	if ( $.browser.msie ) {
		$('.validacao input, textarea').each(function(){
			$placeholder = $(this).attr('placeholder');
			$(this).val($placeholder);
		});
	}
	$('.validacao input, textarea').each(function(){
		$val = $(this).val();
		$(this).attr('data-title',$val);
	});
	$(".validacao input, textarea").focus(function(){
		if($(this).val() == $(this).attr('data-title')){
			$(this).val('');
		}
	}).blur(function(){
		if($(this).val() == '' || $(this).val() == '(__) ____-____'){
			$(this).val($(this).attr('data-title'));
		}
	});
});
function validacao(){
	$('[type="submit"]').click(function(){
		$parent = $(this);
		valida($parent);
		if(!$go) return false;
	});
	$('.alert .close').click(function(){
		$(this).parent('.alert').fadeOut(200);
	})
	$('form input[type="text"], textarea, select').bind('change, blur',function(){
		if(typeof $error != 'undefined' && $error ){
			valida($parent);
		}
	});
}
function valida($parent){
	$message = "";
	$go = true;
	$('.obrigatorio').removeClass('alerta');
	$('select.obrigatorio').parent('.selector').removeClass('alerta');
	$parent.parents('form').find('.obrigatorio').each(function(){
		if($(this).val() == $(this).attr('data-title') || $(this).val() == "" ){
			$(this).addClass('alerta');
			$(this).parent('.selector').addClass('alerta');
			$message =  $message+"<br>• "+$(this).attr('rel');
			$go = false;
		}
		if($(this).hasClass('email') == true){
			validaEmail($(this).val(), $(this));
		}
	});
	if(!$go){
		$error = true;
		$parent.parents('form').find(".alert .message").html($message);
		$parent.parents('form').find(".alert").fadeIn();
		return false;
	}else{
		$message = "";
		$parent.parents('form').find('.alert').fadeOut();
	}
}
function validaEmail($email, $emailAlert){
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if( !emailReg.test( $email )) {
		$emailAlert.addClass('alerta');
		$message = $message+"<br>• "+"E-mail incorreto";
		$go = false;
	}
}