$(document).ready(function() {
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
/*



		Checkout Page Functions



	*/

	var count = 4;
	$("#cartNo").text("("+count+")");
	$("#shopMore").hide();
	$("#card").hide();
	$("#finished").hide();

	var p1 = 20;
	var p2 = 20;
	var p3 = 20;
	var p4 = 20;

	var qty = $("#qty").text();
	qty = parseInt(qty);

	var sum = p1 + p2 + p3 + p4;
	var disc = sum/4;
	var sub = sum - disc;
	var ship = 7;
	var total = sub + ship;


	$("#merch").text("$"+sum);
	$("#disc").text("$"+disc);
	$("#sub").text("$"+sub);
	$("#ship").text("$"+ship);
	$("#total").html("<strong>$"+total+"</strong>");


	$("#r1").on("click", function() {
		count--;
		$("#cartNo").text("("+count+")");
		$("#item1").hide();
		qty--;
		$("#qty").text(qty);
		sum = sum - p1;
		update(sum);
		console.log("r1 clicked");
	});
	$("#r2").on("click", function() {
		count--;
		$("#cartNo").text("("+count+")");
		$("#item2").hide();
		qty--;
		$("#qty").text(qty);
		sum = sum - p2;
		update(sum);
		console.log("r2 clicked");
	});
	$("#r3").on("click", function() {
		count--;
		$("#cartNo").text("("+count+")");
		$("#item3").hide();
		qty--;
		$("#qty").text(qty);
		sum = sum - p3;
		update(sum);
		console.log("r3 clicked");
	});
	$("#r4").on("click", function() {
		count--;
		$("#cartNo").text("("+count+")");
		$("#item4").hide();
		qty--;
		$("#qty").text(qty);
		sum = sum - p4;
		update(sum);
		console.log("r4 clicked");
	});
	$("#payment").on("click", function() {
		$("#start").removeClass("active");
		$("#payInfo").addClass("active");
		$("#item1").hide();
		$("#item2").hide();
		$("#item3").hide();
		$("#item4").hide();
		$("#shopMore").hide();
		$("#card").show();
		// $("#details").hide();
		// $("#numbers").hide();
		$("#weird").hide();
		$("#payment").hide();
		$("#finePrint").hide();
		// $("#billing").hide();
	});	

	function update(sum){
		if (sum == 0) {
			$("#status").text("it would add up here.");
			$("#numbers").hide();
			$("#payment").hide();
			$("#shopMore").show();
		}
		else {
			disc = sum/4;
			sub = sum - disc;
			ship = 7;
			total = sub + ship;
			$("#merch").text("$"+sum);
			$("#disc").text("$"+disc);
			$("#sub").text("$"+sub);
			$("#ship").text("$"+ship);
			$("#total").html("<strong>$"+total+"</strong>");
		}
	}


	$("#box").on("click", function() {
		$("#billing").toggle();
	});

	if ($("#terms:checked")) {
		$("#review").on("click", function() {
			$("#payInfo").removeClass("active");
			$("#done").addClass("active");
			$("#card").hide();
			$("#finished").show();
		});
	};




})