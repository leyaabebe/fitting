$(document).ready(function (){

	/*



		Shop Page Functions



	*/

	var count=4;
	if (location.hash.substring(1) == ""){
		count = 4;
	} else {
		count = location.hash.substring(1);
	}	
	$("#cartNo").text("("+count+")");
	localStorage.count = count;


	if (typeof(Storage) !== "undefined") {
		$("#add").on("click", function() {
			if (localStorage.count) {
			    localStorage.count = Number(localStorage.count) + 1;
			    count++;
			} else {
			    // localStorage.count = 1;
			}
			$("#cartNo").text("("+count+")");
			window.location.hash = localStorage.count;
			// $('a[href^="#"]') -- something to know for the future...
		});
	} else {
		$("#add").on("click", function() {
			count++;
			$("#cartNo").text("("+count+")");
		});	    // Sorry! No Web Storage support..
	}

	function tools() {
  		$('[data-toggle="tooltip"]').tooltip();
  		// console.log("this is working...");
	}
	tools();

});