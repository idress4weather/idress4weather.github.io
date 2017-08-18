var auto_refresh = setInterval(
$(function() {
  // code for loader
  $(document).ajaxStart(function() {
    //show loader animation and hide border
    $('.border').hide();
    $("#loader").show(); 
  });

  $(document).ajaxComplete(function() {
    setTimeout(function() {
      // hide loader animation and show border with fadeIn effect
      $("#loader").hide();
      $('.border').show().addClass('animated fadeIn');
    }, 400);
  });
  
  // send ajax request to fetch location data
  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCB7eXQgDDLJM1Ih386aUUlfMRt9n_oV0w",
    dataType: 'json',
    method: "POST",
    headers: {
      "cache-control": "no-cache",
      "postman-token": "1c393233-0c8c-8ef1-3efe-3173b8928077"
    },
	      template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>',
  after: function () {
    var images = $("#instafeed").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 75) + 'ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
		success: function(response) {
      var location = response.location;
			var latitude = location.lat;
			var longitude = location.lng;
			var weatherUrl = 'https://api.apixu.com/v1/forecast.json?key=c696097710604a5c8a4154155170607&q=' + latitude + ',' + longitude;
      getWeatherInfo(weatherUrl); //this function sends ajax request to weather API
			
			
		}
    }).fail(function() {
      $('.border').append('<p>Error: Could not load weather data!</p>');
    });
/*key  + $.getUrlVar("key") + "&ag_key=" + $.getUrlVar("ag_key");
       var timeoutID;
 
function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 3000);
}
delayedAlert();
function slowAlert() {
        $.ajax({
url: "index.php?key=" + $.getUrlVar("key") + "&ag_key=" + $.getUrlVar("ag_key"),
cache: false,
success: function(msg){
     delayedAlert();
   }
});
}
*/
	
  // code for ajax request to weather API
  function getWeatherInfo(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(response) {
        var location = response.location;
        var current = response.forecast;
        $('.location').text(location.name + ', ' + location.country);
        $('.temp_c').html(forecast.temp_c  + '<a class="cel"> ºC</a>');
        $('.temp_f').html(forecast.temp_f  + '<a class="fah"> ºF</a>');
	$('.feelslike_c').html(forecast.feelslike_c  + '<a class="cel"> ºC</a>');
        $('.feelslike_f').html(forecast.feelslike_f  + '<a class="fah"> ºF</a>');

	/*('.wind_dir' + '.wind_kph' + '.wind_mph').html(current.wind_dir + Math.round((current.wind_kph)* 0.27777777777778)  + '<a class="cel"> mitres/h</a>' + Math.round(current.wind_mph)  + '<a class="fah"> miles/h</a>');
        */$('.wind_dir').html(forecast.wind_dir);
	$('.wind_kph').html(Math.round(forecast.wind_kph* 0.27777777777778)  + '<a class="cel"> m/s</a>');
        $('.wind_mph').html(Math.round(forecast.wind_mph)  + '<a class="fah"> mph</a>');

        $('.text').text(forecast.condition.text);
        $('.icon').attr('src', forecast.condition.icon);
      
	      
// 	 function K2F(k){
//     return Math.round(k*(9/5)-459.67);
// }

// function K2C(k){
//     return Math.round(k - 273.15);
// }       
	      
var f = Math.round(forecast.feelslike_f);
var c = Math.round(forecast.feelslike_c); 	      
var nextButton = document.getElementById('next-button');    
          
var userFeed = new Instafeed({
  //https://api.instagram.com/v1/users/self/media/liked?access_token=ACCESS-TOKEN
get: 'user',
userId: '5679701317',
accessToken: '5679701317.8f4c5bf.69b3f2c784fe48df9aa9912635f1ffe0',
    //template: '<a href="{{link}}"><img src="{{image}}" /></a>',
     //limit: 60,
   template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
  limit: 1000,
// after: function () {
//     $(".instagram-image").each(function (i) {
//         if(i >= 60) {
//             $(this).remove();
//         },
   //template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a>',
//tags: c,            
    //template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>',
        
    //data: {access_token: tok, count: kolichestvo},//+++++++++++

                  // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                nextButton.setAttribute('disabled', 'disabled');
            }               
        },
          
          
          
          
          
          
        success: function() {
        foundImages = 0;
        maxImages = 60;
    },
          //window.setTimeout(function() {
    filter: function(image) {

      
      if(( f == '86') && (image.tags.indexOf('86') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
       
         else if(( f == '85') && (image.tags.indexOf('85') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '84') && (image.tags.indexOf('84') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '83') && (image.tags.indexOf('83') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '82') && (image.tags.indexOf('82') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '81') && (image.tags.indexOf('81') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((f == '80') && (image.tags.indexOf('80') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '79') && (image.tags.indexOf('79') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '78') && (image.tags.indexOf('78') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '77') && (image.tags.indexOf('77') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '6') && (image.tags.indexOf('76') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '75') && (image.tags.indexOf('75') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '74') && (image.tags.indexOf('74') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '73') && (image.tags.indexOf('73') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '72') && (image.tags.indexOf('72') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '71') && (image.tags.indexOf('71') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '70') && (image.tags.indexOf('70') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '69') && (image.tags.indexOf('69') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '68') && (image.tags.indexOf('68') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '67') && (image.tags.indexOf('67') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '66') && (image.tags.indexOf('66') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '65') && (image.tags.indexOf('65') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '64') && (image.tags.indexOf('64') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '63') && (image.tags.indexOf('63') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '62') && (image.tags.indexOf('62') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '61') && (image.tags.indexOf('61') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '60') && (image.tags.indexOf('60') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '59') && (image.tags.indexOf('59') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '58') && (image.tags.indexOf('58') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '57') && (image.tags.indexOf('57') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '56') && (image.tags.indexOf('56') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '55') && (image.tags.indexOf('55') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '54') && (image.tags.indexOf('54') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '53') && (image.tags.indexOf('53') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '52') && (image.tags.indexOf('52') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '51') && (image.tags.indexOf('51') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '50') && (image.tags.indexOf('50') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if(( f == '49') && (image.tags.indexOf('49') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '48') && (image.tags.indexOf('48') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((f == '47') && (image.tags.indexOf('47') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '46') && (image.tags.indexOf('46') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '45') && (image.tags.indexOf('45') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '44') && (image.tags.indexOf('44') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '43') && (image.tags.indexOf('43') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if(( f == '42') && (image.tags.indexOf('42') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if(( f == '41') && (image.tags.indexOf('41') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '40'|| f == '40') && (image.tags.indexOf('40') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '39'|| f == '39') && (image.tags.indexOf('39') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '38'|| f == '38') && (image.tags.indexOf('38') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '37'|| f == '27') && (image.tags.indexOf('37') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '36'|| f == '36') && (image.tags.indexOf('36') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '35'|| f == '35') && (image.tags.indexOf('35') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '34'|| f == '34') && (image.tags.indexOf('34') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '33'|| f == '33') && (image.tags.indexOf('33') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '32'|| f == '32') && (image.tags.indexOf('32') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
          else if((c == '31'|| f == '31') && (image.tags.indexOf('31') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if ((c == '30'|| f == '30') && (image.tags.indexOf('30') >= 0 && foundImages < maxImages)) {//++++
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '29'|| f == '29') && (image.tags.indexOf('29') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '28'|| f == '28') && (image.tags.indexOf('28') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '27'|| f == '27') && (image.tags.indexOf('27') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '26'|| f == '26') && (image.tags.indexOf('26') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '25'|| f == '25') && (image.tags.indexOf('25') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '24'|| f == '24') && (image.tags.indexOf('24') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '23'|| f == '23') && (image.tags.indexOf('23') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '22'|| f == '22') && (image.tags.indexOf('22') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '21'|| f == '21') && (image.tags.indexOf('21') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '20'|| f == '20') && (image.tags.indexOf('20') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '19'|| f == '19') && (image.tags.indexOf('19') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '18'|| f == '18') && (image.tags.indexOf('18') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '17'|| f == '17') && (image.tags.indexOf('17') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '16'|| f == '16') && (image.tags.indexOf('16') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '15'|| f == '15') && (image.tags.indexOf('15') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '14'|| f == '14') && (image.tags.indexOf('14') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '13'|| f == '13') && (image.tags.indexOf('13') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '12'|| f == '12') && (image.tags.indexOf('12') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '11'|| f == '11') && (image.tags.indexOf('11') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '10'|| f == '10') && (image.tags.indexOf('10') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
      else if((c == '9'|| f == '9') && (image.tags.indexOf('9') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '8'|| f == '8') && (image.tags.indexOf('8') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
               else if((c == '7'|| f == '7') && (image.tags.indexOf('7') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '6'|| f == '6') && (image.tags.indexOf('6') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '5'|| f == '5') && (image.tags.indexOf('5') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '4'|| f == '4') && (image.tags.indexOf('4') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '3'|| f == '3') && (image.tags.indexOf('3') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '2'|| f == '2') && (image.tags.indexOf('2') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         } 
               else if((c == '1'|| f == '1') && (image.tags.indexOf('1') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
         else if((c == '0'|| f == '0') && (image.tags.indexOf('0') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-1'|| f == '-1') && (image.tags.indexOf('-1') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-2'|| f == '-2') && (image.tags.indexOf('-2') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-3'|| f == '-3') && (image.tags.indexOf('-3') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-4'|| f == '-4') && (image.tags.indexOf('-4') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-5'|| f == '-5') && (image.tags.indexOf('-5') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-6'|| f == '-6') && (image.tags.indexOf('-6') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-7'|| f == '-7') && (image.tags.indexOf('-7') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-8'|| f == '-8') && (image.tags.indexOf('-8') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-9'|| f == '-9') && (image.tags.indexOf('-9') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-10'|| f == '-10') && (image.tags.indexOf('-10') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-11'|| f == '-11') && (image.tags.indexOf('-11') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-12'|| f == '-12') && (image.tags.indexOf('-12') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-13'|| f == '-13') && (image.tags.indexOf('-13') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-14'|| f == '-14') && (image.tags.indexOf('-14') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-15'|| f == '-15') && (image.tags.indexOf('-15') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-16'|| f == '-16') && (image.tags.indexOf('-16') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-17'|| f == '-17') && (image.tags.indexOf('-17') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-18'|| f == '-18') && (image.tags.indexOf('-18') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-19'|| f == '-19') && (image.tags.indexOf('-19') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-20'|| f == '-20') && (image.tags.indexOf('-20') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-21'|| f == '-21') && (image.tags.indexOf('-21') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-22'|| f == '-22') && (image.tags.indexOf('-22') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-23'|| f == '-23') && (image.tags.indexOf('-23') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-24'|| f == '-24') && (image.tags.indexOf('-24') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-25'|| f == '-25') && (image.tags.indexOf('-25') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-26'|| f == '-26') && (image.tags.indexOf('-26') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-27'|| f == '-27') && (image.tags.indexOf('-27') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-28'|| f == '-28') && (image.tags.indexOf('-28') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-29'|| f == '-29') && (image.tags.indexOf('-29') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      
        return false;
     
 }  //filter
                                  //   }, 10000);

}); 
            // bind the load more button
        nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        feed.next();
        });
userFeed.run();           
          
	      
	      
      }
    }).fail(function() {
      $('.border').append('<p>Error: Could not load weather data!</p>');
    });
  }
  
  // Initially, temp. is shown in celsius
 $('.temp_f').hide();
  $('.feelslike_f').hide();
  $('.wind_mph').hide();
  
  // code for toggling temp. (celsius/fahrenheit)
  $('.temp_c, .temp_f').on('click', 'a', function(event) {
    event.preventDefault();
    if(event.target.className === 'cel') {
      $('.temp_c').hide();
      $('.temp_f').show();
    } else {
      $('.temp_f').hide();
      $('.temp_c').show();
    }
  });
	$('.feelslike_c, .feelslike_f').on('click', 'a', function(event) {
    event.preventDefault();
    if(event.target.className === 'cel') {
      $('.feelslike_c').hide();
      $('.feelslike_f').show();
    } else {
      $('.feelslike_f').hide();
      $('.feelslike_c').show();
    }
  });
	
	$('.wind_kph, .wind_mph').on('click', 'a', function(event) {
    event.preventDefault();
    if(event.target.className === 'cel') {
      $('.wind_kph').hide();
      $('.wind_mph').show();
    } else {
      $('.wind_mph').hide();
      $('.wind_kph').show();
    }
  });	
});
