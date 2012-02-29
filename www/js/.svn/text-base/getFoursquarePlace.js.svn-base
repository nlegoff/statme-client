function getFoursquarePlace(x, y, dateJour){
	$.ajax({
		type:'GET',
		dataType:'JSON',
		url:'https://api.foursquare.com/v2/venues/search?ll='+x+','+y+'&client_id=INOVT4ZDO5NM5WY3ON5RFBGK3GIFXMTEON5XECWU4Z0H0ABB&client_secret=2OBVMM1I2SK3DLMHYMKC42O3Q0WFYQRVFXY11S1Z25ADIGQ2&v='+dateJour,
		beforeSend:function(){
			
		},
		error:function(jqXHR, textStatus, errorThrown){
			alert('Link with Foursquare doesn\'t work');
		},
		success:function(data){
			var displayCityName;
			for(var i=0; i < data.response.venues.length && i < 10; i++){
				displayCityName = data.response.venues[i].name;
				if(data.response.venues[i].location.city != undefined)
					displayCityName += ", "+ data.response.venues[i].location.city;
				else if(data.response.venues[i].location.state != undefined)
					displayCityName += ", "+ data.response.venues[i].location.state;
				else if(data.response.venues[i].location.country != undefined)
					displayCityName += ", "+ data.response.venues[i].location.country;
				$('#select-choice-13').append(
					$('<option>').attr('value',data.response.venues[i].id).append(displayCityName)
				);
			}
		}
	});
}