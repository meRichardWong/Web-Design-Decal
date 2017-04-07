$(document).ready(function() {

	$(".picture").click(function() {
		$("#overlay").show();
		$(this).addClass("pic-click");
	});
	
	$("#overlay").click(function() {
		$(this).hide();
		$(".picture").removeClass("pic-click");
	})

});