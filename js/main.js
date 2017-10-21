$(document).ready(function() {
$.ajax({
url : "http://api.wunderground.com/api/1ce585453ff3a005/geolookup/conditions/q/NY/Ithaca.json",
dataType : "jsonp",
success : function(parsed_json) {
    var location = parsed_json['location']['city'];
    var precip = parseInt(parsed_json['current_observation']['precip_today_in']);
    document.getElementById("chance").innerHTML = precip;
    if (precip <= 4) {
      document.getElementById("message").innerHTML = "You can make it to class!";
    }
    else if (precip > 4 && precip <= 8) {
      document.getElementById("message").innerHTML = "LOL good luck!";
    }
    else {
      document.getElementById("message").innerHTML = "Pray for a Snow Day...";
    }
  }
});

$("#title").show("fade", 2000);
$('#header h3').show("fade", 2000);
$('#chance').delay(800).show("clip", 1000);
$('#message').delay(800).show("clip", 1000);
});
