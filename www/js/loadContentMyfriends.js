function loadContentMyfriends(){
	var dataString = "<ul data-role='listview' id='ulContentMyfriends'>";
	
	dataString += "<li style='padding:0px;margin:0px;' id='myfriends_thread_1'>";
	dataString += "<a href='#' class='myfriends_thread'>";
	dataString += '<table>';
	dataString += '<tr><td rowspan="3"><img src="' + get_gravatar("erik.saunier@gmail.com", 35) + '" /></td><td>Erik S. @ Take the Train</td></tr>';
	dataString += '<tr><td>Gare de Lyon, Paris</td><td><a href="#" class="myfriends_subscribe" id="myfriends_subscribe_1"></a></td></tr>';
	dataString += '<tr><td>30 minutes ago,  1 comment</td></tr>';
	dataString += '</table>';
	dataString += "</a>";
	dataString += "</li>";
	dataString += "<li style='padding:0px;margin:0px;' id='myfriends_thread_2'>";
	dataString += "<a href='#' class='myfriends_thread'>";
	dataString += '<table>';
	dataString += '<tr><td rowspan="3"><img src="' + get_gravatar("legoff.n@gmail.com", 35) + '" /></td><td>Erik S. @ Take the Train</td></tr>';
	dataString += '<tr><td>Gare de Lyon, Paris</td><td><a href="#" class="myfriends_subscribe" id="myfriends_subscribe_2"></a></td></tr>';
	dataString += '<tr><td>30 minutes ago,  1 comment</td></tr>';
	dataString += '</table>';
	dataString += "</a>";
	dataString += "</li>";
	dataString += "<li style='padding:0px;margin:0px;' id='myfriends_thread_3'> ";
	dataString += "<a href='#' class='myfriends_thread'>";
	dataString += '<table>';
	dataString += '<tr><td rowspan="3"><img src="' + get_gravatar("breant.damien@gmail.com", 35) + '" /></td><td>Erik S. @ Take the Train</td></tr>';
	dataString += '<tr><td>Gare de Lyon, Paris</td><td><a href="#" class="myfriends_subscribe" id="myfriends_subscribe_3"></a></td></tr>';
	dataString += '<tr><td>30 minutes ago,  1 comment</td></tr>';
	dataString += '</table>';
	dataString += "</a>";
	dataString += "</li>";
	dataString += "</ul>";
	
	document.getElementById("contentMyFriends").innerHTML = dataString;
	
	$('#ulContentMyfriends li').bind('swipeleft swiperight',function(event){
        if (event.type == "swiperight") {
        	var id = $(this).attr('id').split('_');
        	document.getElementById("myfriends_subscribe_"+id[2]).innerHTML = "";
        }
        else if (event.type == "swipeleft") {
        	var id = $(this).attr('id').split('_');
        	document.getElementById("myfriends_subscribe_"+id[2]).innerHTML = "Subscribe";
        }
    });
	$('#ulContentMyfriends li').bind('click',function(event){
		var myfriends_thread_id = $(this).attr('id').split('_');
		var id = myfriends_thread_id[2];
		if(!(document.getElementById("myfriends_subscribe_"+id).innerHTML == "Subscribe"))
			allComments(id);
    });
	
	$(document).delegate('.myfriends_subscribe', 'click', function() {
		  $(this).simpledialog({
		    'mode' : 'bool',
		    'prompt' : 'Subscribe to this thread?',
		    'useModal': true,
		    'buttons' : {
		      'OK': {
		        click: function () {
		        	document.getElementById("myfriends_subscribe_1").innerHTML = "";
		        }
		      },
		      'Cancel': {
		        click: function () {
		        	document.getElementById("myfriends_subscribe_1").innerHTML = "";
		        },
		        icon: "delete",
		        theme: "b"
		      }
		    }
		  })
		})
	
	/*$.ajax({
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
				dataString += "<li><a href='#' class='thread' id='friends_"+data[i].id+"'>"+data[i].name+"<span class='ui-li-count'>"+data[i].id+"</span></a></li>";
			}
			dataString += "</ul>";
			document.getElementById("contentMyfriends").innerHTML = dataString;
			$('.thread').click(function(){
				var category_id = $(this).attr('id').split('_');
				var id = category_id[1];
				allThreads(id);
			});
		}
	});*/
}