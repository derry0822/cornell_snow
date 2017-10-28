$(document).ready(function() {
$.ajax({
url : "https://api.wunderground.com/api/1ce585453ff3a005/geolookup/conditions/q/NY/Ithaca.json",
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

    // More
    var sky = parsed_json['current_observation']['weather'];
    var temp = parsed_json['current_observation']['temperature_string'];
    var wind = parsed_json['current_observation']['wind_mph'];
    var feels = parsed_json['current_observation']['feelslike_string'];
    $('#more h3').click(function() {
      console.log($('#weather').css('display'))
      $('#more h3').html('v More');
      $('#weather').html('<p> Sky: ' + sky + '</p>\
                          <p> Temperature: ' + temp + '</p>\
                          <p> Wind Speed: ' + wind + ' mph</p>\
                          <p> Feels Like: ' + feels + '</p>');
      if ($('#weather').css('display') == 'none') {
        console.log('run')
        $('#weather').slideDown(1200, 'linear');
      }
      else {
        $('#weather').slideUp(1200, 'linear');
        $('#more h3').html('< More');
      }
    });
  }
});

$("#title").show("fade", 2000);
$('#header h3').show("fade", 2000);
$('#chance').delay(800).show("clip", 1000);
$('#message').delay(800).show("clip", 1000);
});

