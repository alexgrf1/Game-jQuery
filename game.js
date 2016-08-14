/**
 * 
 */

$(function() {
	
	var elements = 0;
	var result = 3;

	$(document).on( "keydown", function(event) {
	      if(event.which == 38) {
	    	  $("#player").animate({marginBottom: "+=200px"});
	    	  setTimeout(function () {
		    	  $("#player").animate({marginBottom: "-=200px"});
		      }, 400);
	      }
	});
	
	$(document).on( "keydown", function(event) {
	      if(event.which == 40) {
	    	  $("#player").animate({height: "50px"});
	    	  setTimeout(function () {
		    	  $("#player").animate({height: "150px"});
		      }, 400);
	      }
	})
	
	$(document).on( "keydown", function(event) {
	      if(event.which == 40) {
	    	  $("#player").animate({height: "50px"});
	      }
	});
	
	$("#btn1").on("click", function repeat() {
		
		$("#btn1").remove();
		
		var myVar = setInterval(function () {
			elements++;
			
			$(document.body).append($('<div class="demo" id="target"></div>'));
			
			var height = Math.floor(Math.random() * 500 + 1) + 300;
			
			$(".demo").css('height', '100');
			$(".demo").css('width', '100');
			$(".demo").css('background-color', 'yellow');
			
			$(".demo").css('top', height); 
			
			var elem = document.getElementById("target");
			
			var pos = 0;
			
			var id = setInterval(frame, 20);
			function frame() {
				
				var left = document.getElementById("target").offsetLeft;
			    var up = document.getElementById('target').offsetTop;
			    var leftOff = document.getElementById("player").offsetLeft;
			    var upOff = document.getElementById('player').offsetTop;  
			    
				if (pos >= 860 && pos <= 1010 && up + 100 > upOff && up - 150 < upOff) {
					result--;
					$("#life").html(result);
					clearInterval(id);
					$(".demo").remove();
					if (result == 0) {
						alert("You lost!");
						clearInterval(myVar);
					}
				}
				if (pos == 1820) {
					clearInterval(id);
					$(".demo").remove();
			    } else {
			    	pos += 20;
			    	elem.style.left = pos + 'px';
			    }
			}
			
			if (elements > 20 && result > 0) {
				clearInterval(myVar);
				alert("You won!");
			}
			
		}, 2500);
		
	});

});


