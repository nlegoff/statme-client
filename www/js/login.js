function login() {
	if(checkLogin() == 0)
	{
		$("#contentloading").empty().html('<img src="images/ajax-loader.gif" />');
		$("input[type=text][name=login-email]").attr('disabled', 'disabled');
		$("input[type=password][name=login-password]").attr('disabled', 'disabled');
		$('.linkRegister').removeAttr("href").css("cursor","pointer");
		$('.submiter').attr("disabled", "disabled");
		loadContentMyfriends();
		setTimeout('$.mobile.changePage("#pageMyFriends","none")',5000);
		//$.mobile.changePage("#pageMyFriends","none");
		
		/*var form = $('#login');
		$.ajax({
			type:'POST',
			dataType:'JSON',
			url:'http://www.stat-me.fr/api/login',
			data:{
				email : $("input[type=text][name=login-email]").val(), 
				password : $("input[type=password][name=login-password]").val()
			},
			beforeSend:function(){

			},
			error:function(jqXHR, textStatus, errorThrown){
				alert('Bad login/password');
				$("input[type=text][name=login-email]").removeAttr("disabled");
				$("input[type=password][name=login-password]").removeAttr("disabled");
				$("input[type=text][name=login-email]").val("");
				$("input[type=password][name=login-password]").val("");
				$('.linkRegister').attr("href","#pageRegister");
				$('.submiter').removeAttr("disabled");
				$("#contentloading").empty();
			},
			success:function(data){
				idUser = data.id;
				loadContentMyfriends();
				$.mobile.changePage("#pageMyFriends","none");
			}
		});*/
	}
}

function checkLogin(){
	var nbError = 0;
	if($("input[type=text][name=login-email]").val() == "")
	{
		document.getElementById('error-login-mail').innerHTML = "Email / Login obligatoire";
		nbError++;
	}
	else document.getElementById('error-login-mail').innerHTML ="";
	if($("input[type=password][name=login-password]").val() == "")
	{
		document.getElementById('error-login-password').innerHTML = "Password obligatoire";
		nbError++;
	}
	else document.getElementById('error-login-password').innerHTML ="";
	
	return nbError;
}