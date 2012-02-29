function initMyFriendsComment(){
	$('#inputMyFriendsComment').focus(function() {
		$("#tdMyFriendsComment").removeClass("tdFooterMyFriendsCommentDisplayFalse").addClass("tdFooterMyFriendsCommentDisplayTrue");
	  	if($('#inputMyFriendsComment').val() == "Rédiger un commentaire...")
	  		$('#inputMyFriendsComment').val("");
	});
	$("#buttonMyFriendsComment").click(function(){
		if($("#tdMyFriendsComment img").attr("src") == "images/sendComment.png")
		{
			$("#ulMyFriendsComments ul").append( 
			$('<li>').append(
				$('<h3>').append("Damien Breant"),
				$('<p>').append($('#inputMyFriendsComment').val()).css('max-width','95%').css('word-wrap','break-word').css('text-overflow','visible'),
				$('<p>').attr('class', 'ui-li-aside').append("<strong>6:24</strong>")
			)).listview('refresh');
			$("#tdMyFriendsComment img").attr("src", "images/sendCommentDisabled.png");
			$("#tdMyFriendsComment").removeClass("tdFooterMyFriendsCommentDisplayTrue").addClass("tdFooterMyFriendsCommentDisplayFalse");
			$('#inputMyFriendsComment').val("Rédiger un commentaire...");
		}
	});
	$('#inputMyFriendsComment').keydown(function(){
		if($(this).val().length > 1 && $(this).val() != "")
			$("#tdMyFriendsComment img").attr("src", "images/sendComment.png");
		else
			$("#tdMyFriendsComment img").attr("src", "images/sendCommentDisabled.png");
			
	});
	$('#inputMyFriendsComment').bind('blur',function(event) {
		if($('#inputMyFriendsComment').val() == "Rédiger un commentaire..." || $('#inputMyFriendsComment').val() == "" || $(this).val().length < 2)
		{
			$("#tdMyFriendsComment").removeClass("tdFooterMyFriendsCommentDisplayTrue").addClass("tdFooterMyFriendsCommentDisplayFalse");
			$('#inputMyFriendsComment').val("Rédiger un commentaire...");
		}
	});
}

function allComments(){
	$('#inputMyFriendsComment').val("R\351diger un commentaire...");
	$.mobile.changePage("#pageMyFriendsComments","slide");
}