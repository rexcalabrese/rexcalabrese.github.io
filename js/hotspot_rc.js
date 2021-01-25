/*

;(function () {
	
	'use strict';
    var a = 1;

    
	$('#row'+a).hover(
       function(){ $("#hs1").addClass('hotspot_active') },
       function(){ $("#hs1").removeClass('hotspot_active') }
)
    var a = 1;
    
 	$('#row2').hover(
       function(){ $("#hs2").addClass('hotspot_active') },
       function(){ $("#hs2").removeClass('hotspot_active') }
)   
    
 	$('#row3').hover(
       function(){ $("#hs3").addClass('hotspot_active') },
       function(){ $("#hs3").removeClass('hotspot_active') }
)      
    
 	$('#row4').hover(
       function(){ $("#hs4").addClass('hotspot_active') },
       function(){ $("#hs4").removeClass('hotspot_active') }
)      
    
 	$('#row5').hover(
       function(){ $("#hs5").addClass('hotspot_active') },
       function(){ $("#hs5").removeClass('hotspot_active') }
)
    
 	$('#row6').hover(
       function(){ $("#hs2").addClass('hotspot_active') },
       function(){ $("#hs2").removeClass('hotspot_active') }
)  
}());


*/


//https://stackoverflow.com/questions/20686915/reusable-function-inside-jquery-hover-function

$(document).ready(function() {
    addBorderOnHover("#row1", "#hs1");
    addBorderOnHover("#row2", "#hs2");
    addBorderOnHover("#row3", "#hs3");
    addBorderOnHover("#row4", "#hs4");
    addBorderOnHover("#row5", "#hs5");
    addBorderOnHover("#row6", "#hs6");
    addBorderOnHover("#row7", "#hs7");
    addBorderOnHover("#row8", "#hs8");
    addBorderOnHover("#row9", "#hs9");
    addBorderOnHover("#row10", "#hs10");
    addBorderOnHover("#row11", "#hs11");
    addBorderOnHover("#row12", "#hs12");
    addBorderOnHover("#row13", "#hs13");
    addBorderOnHover("#row14", "#hs14");
    addBorderOnHover("#row15", "#hs15");
    addBorderOnHover("#row16", "#hs16");
    addBorderOnHover("#row17", "#hs17");
    
    

    function addBorderOnHover(hoverSel, borderSel) {
        $(hoverSel).hover(function() {  $(borderSel).addClass('hotspot_active');
          }, function() {$(borderSel).removeClass('hotspot_active');
          }
        );
    }
});