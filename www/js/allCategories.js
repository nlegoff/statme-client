function allCategories(){
	$.ajax({
		type:'GET',
		dataType:'JSON',
		url:'http://www.stat-me.fr/api/category',
		beforeSend:function(){
			
		},
		error:function(jqXHR, textStatus, errorThrown){
			alert('All Categories not possible');
		},
		success:function(data){
			var dataString;
			var firstLetter;
			
			dataString = "<ul data-role='listview' data-inset='true' data-filter='true'>";
			for(var i=0; i < data.length; i++){
				if(i==0){
					firstLetter = data[i].name.toUpperCase().charAt(0);
					dataString += "<li data-role='list-divider'>"+firstLetter+"</li>";
				}
				else if(firstLetter != data[i].name.toUpperCase().charAt(0)){
					firstLetter = data[i].name.toUpperCase().charAt(0);
					dataString += "<li data-role='list-divider'>"+firstLetter+"</li>";
				}
				dataString += "<li><a href='#' class='thread' id='category_"+data[i].id+"'>"+data[i].name+"<span class='ui-li-count'>"+data[i].id+"</span></a></li>";
			}
			dataString += "</ul>";
			document.getElementById("contentAllCategories").innerHTML = dataString;
			$('.thread').click(function(){
				var category_id = $(this).attr('id').split('_');
				var id = category_id[1];
				allThreads(id);
			});
		}
	});
}