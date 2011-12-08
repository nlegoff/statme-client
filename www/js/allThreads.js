function allThreads(i) {
	$.ajax({
		type:'GET',
		dataType:'JSON',
		url:'http://stat-me.fr/api/category/'+i+'/threads',
		beforeSend:function(){
			
		},
		error:function(jqXHR, textStatus, errorThrown){
			alert('All Threads not possible');
		},
		success:function(data){
			var dataString;
			var firstLetter;
			
			dataString = "<ul data-role='listview' data-filter='true'>";
			for(var i=0; i < data.length; i++){
				dataString += "<li id='listitem'><a href='#'>"+data[i].name+"</a></li>";
			}
			dataString += "</ul>";
			document.getElementById("contentAllThreads").innerHTML = dataString;
			$.mobile.changePage("#pageAllThreads");
		}
	});
}