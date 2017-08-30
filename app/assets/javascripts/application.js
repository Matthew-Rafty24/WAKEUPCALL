// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

var maCarte;
function initMap() {
  maCarte = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.763281, lng: -1.237196},
    zoom: 15
  });
}
document.getElementById("marker").addEventListener("click", function(){
		var marker = new google.maps.Marker({
	    position: {lat: 52.763281, lng: -1.237196},
	    map: maCarte,
	    icon: "https://image.ibb.co/k2Jf6k/Find_my_Friends_Tooltip2.png",
	    animation: google.maps.Animation.BOUNCE,
	    title: 'Loughborough'
	  });
	})
document.getElementById("marker2").addEventListener("click", function(){
		var marker2 = new google.maps.Marker({
	    position: {lat: 52.765603, lng: -1.222783},
	    map: maCarte,
	    icon: "https://help.blackberry.com/en/blackberry-classic/10.3.1/help/mba1403630089474_hiresdevice_en-us.png",
	    animation: google.maps.Animation.DROP,
	    title: 'Loughborough'
	  });
	})
document.getElementById("center").addEventListener("click", function(){
		maCarte.panTo({lat: 52.765603, lng: -1.222783})
	})
