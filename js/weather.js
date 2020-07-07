$(document).ready(function() {
  /*getJSON for location only*/
  $.getJSON("https://ipinfo.io/json", function(data) {
    var city = data.city;
    /*var country = data.country;*/
    $("#location").html(city /*+ ", " + country*/);
  });
  /*https://api.darksky.net/forecast/[key]/[latitude],[longitude]*/
  navigator.geolocation.getCurrentPosition(function(position) {
    var api = "https://api.darksky.net/forecast/";
    var key = "5bbe61fe6db548e66b39e5a49663eba2/";
    var lat = position.coords.latitude + ", ";
    var lon = position.coords.longitude;
    var callback = "?callback=?";
    $.getJSON(api + key + lat + lon + callback, function(json) {
      console.log(json);
      /*json.currently.icon*/
      var skycons = new Skycons({ color: "cyan" });

      skycons.add($("#icon")[0], json.currently.icon);
      skycons.play();
      var tempF = json.currently.temperature;
      var tempC = (json.currently.temperature - 32) * 5 / 9;
      var status_tempF = json.currently.summary +" - "+ tempF.toFixed()+'˚F';
      var status_tempC = json.currently.summary +" - "+ tempC.toFixed()+ '˚C';

      /**/
      $("#temp").html(status_tempF);
      $("#temp").on("click", function() {
        if ($("#temp").html() == status_tempF)
          $("#temp").html(status_tempC);
         else $("#temp").html(status_tempF);
      });
      var precipitation = 'Precipitation: '+json.currently.precipIntensity.toFixed()+'%';
      var humidity = 'Humidity: '+json.currently.humidity+'%';
      var wind = 'Wind: '+json.currently.windSpeed.toFixed()+' mph';
      
      $("#status").html("<div class='status'>"+precipitation+' | '+humidity+' | '+wind+"</div>");
    });
  });
});
