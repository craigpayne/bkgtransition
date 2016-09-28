
// main
(function main() {

	init();

	function init() {
		$(document).ready(function(){
			foundation();
			date();
			tabs();
			backgroundAnimation();
		});
	}

	// execute foundation 6
	function foundation() {
		$(document).foundation();
	}

	// date plugin
	function date() {
		$('#text-departure').fdatepicker({		
			format: 'mm-dd-yyyy',
			disableDblClickSelection: true
		});

		$('#text-return').fdatepicker({		
			format: 'mm-dd-yyyy',
			disableDblClickSelection: true
		});
	}

	function tabs() {
		var tabs = new Foundation.Tabs($("#booking-tabs"));
	}

	function backgroundAnimation() {
	    var bgimage = new Image();      
	    bgimage.src= "images/1.jpg";       

	    $(bgimage).load(function(){
	        $(".bg__img").addClass("bg__img--animate");
	    });
	}
    
  }
)();

