function login() {
	var form = $('#login');
	$.ajax({
		type:'POST',
		dataType:'JSON',
		url:'http://www.stat-me.fr/api/login',
		data:{
			email : $("input[type=text][name=email]").val(), 
			password : $("input[type=password][name=password]").val()
		},
		beforeSend:function(){
			
		},
		error:function(jqXHR, textStatus, errorThrown){
			alert('Bad login/password');
		},
		success:function(data){
			idUser = data.id;
			$.mobile.changePage("#pageMenu");
		}
	});
}