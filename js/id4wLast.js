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
        after: function() {
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
        success: function(response) {//instead responseObj location??? and others
            var location = response.location;
            var latitude = location.lat;
            var longitude = location.lng;
            var currentApixu = 'https://api.apixu.com/v1/current.json?key=c696097710604a5c8a4154155170607&q=';
            var forecastApixu = 'https://api.apixu.com/v1/forecast.json?key=c696097710604a5c8a4154155170607&q=';
            var days = '&days=1';
            var hours = '&hours=24';
            //var weatherUrl = '';
            //var locationUrl = 'location';//if will become more location variants as = '';
            var weatherUrl_current = currentApixu + latitude + ',' + longitude;            
            var weatherUrl_ForecastDays = forecastApixu + latitude + ',' + longitude + days;
            var weatherUrl_ForecastHours = forecastApixu + latitude + ',' + longitude + hours;


            getWeatherInfo(weatherUrl_current); 
            //code
            getWeatherInfo(weatherUrl_ForecastDays);
            //code
            getWeatherInfo(weatherUrl_ForecastHours);
            //code
             //this function sends ajax request to weather API
            /*getForecastrInfo(latitude,longitude);*/
   
           //  function createNeweather(weatherUrl){//0000//???if this response contain *3 in this place of code list
           //          var weatherObj = {};
           //          //00
           //          weatherObj.weatherUrl = weatherUrl;//0000
           //          weatherObj.getWeatherInfo = function(){
           //          return this.weatherUrl;
           //          }
           //          return weatherObj;
           //      }
           //      //constr
           //  function Weather(weatherUrl){
           //      this.weatherUrl = weatherUrl;
           //      this.getWeatherInfo = function(){
           //          return this.weatherUrl;
           //      }
           //  }//oblastvidimosti obj???????????????????????????????????????????????????????????????????????????????????????
            
           //      //call constr
           //      var weatherUrl_current_obj1 = new Weather(weatherUrl_current);//{return this.responseBasik = weatherUrl_current});
           //      var weatherUrl_forecastDays_obj2 = new Weather(weatherUrl_forecastDays);//{return this.responseBasik = weatherUrl_forecastDays});
           //      var weatherUrl_forecastHours_obj3 = new Weather(weatherUrl_forecastHours);//{return this.responseBasik = weatherUrl_forecastHours});

           //              //weatherUrl_current_obj1.getWeatherInfo(weatherUrl_current_obj1.weatherUrl);
           //  getWeatherInfo(weatherUrl_current_obj1.weatherUrl);
           //  getWeatherInfo(weatherUrl_forecastDays_obj2.weatherUrl);
           //  getWeatherInfo(weatherUrl_forecastHours_obj3.weatherUrl);
           // /**
           // * @param weatherUrl_current_obj1
           // * @param weatherUrl_forecastDays_obj2
           // * @param weatherUrl_forecastHours_obj3
           // * @returns weatherUrl_obj
           // */
           // function merge_options(weatherUrl_current_obj1, weatherUrl_forecastDays_obj2, weatherUrl_forecastHours_obj3){
           //      var weatherUrl_obj = {};
           //      for (var weatherUrl in weatherUrl_current_obj1) {weatherUrl_obj[weatherUrl] = weatherUrl_current_obj1[weatherUrl];}
           //      for (var weatherUrl in weatherUrl_forecastDays_obj2) {weatherUrl_obj[weatherUrl] = weatherUrl_forecastDays_obj2[weatherUrl];}
           //      for (var weatherUrl in weatherUrl_forecastHours_obj3) {weatherUrl_obj[weatherUrl] = weatherUrl_forecastHours_obj3[weatherUrl];}
           //          return weatherUrl_obj;
           // } 
           //  getWeatherInfo(weatherUrl_obj);    

        }
    }).fail(function() {
        $('.border').append('<p>Error: Could not load weather data!</p>');
    });

    // code for ajax request to weather API
    function getWeatherInfo(url) {

        $.ajax({
            url: url,
            dataType: 'json',
            success: function(response) {//0000//instead responseObj location //or mergered response?
               // var location = response.location;
                ///////////////var responseBasik = '';              
               //  var current_response = 'currentApixu';
               //  var forecastDay_response = 'forecastday.day';
               //  var forecastHour_response = 'forecastday.hour';
               // ///////////// var response =  response. + responseBasik;
               //  //detect response//if response became as property ofmy obj? 
               //  function createNewResponse(response){//0000
               //      var responseObj = {};
               //      //00
               //      responseObj.response = response;//0000
               //      return responseObj;
               //  }
               //  function Response(response){//00
               //  return this.response = response;//0000
                
               //  }

               //  var responseCurrent_obj = new Response(function(response){return this.response = response. + current_response});
               //  var responseForecastDay_obj = new Response(function(response){return this.response = response. + forecastDay_response});
               //  var responseForecastHour_obj = new Response(function(response){return this.response = response. + forecastHour_response});

                //  $('.location').text(location.name + ', ' + location.country);
                // //newFeed() toggle with current   
                // $('.avgtemp_c').html(Math.round(responseForecastDay.avgtemp_c)  + '<a class="fan"> ºC</a>');
                // $('.temp_c').html(Math.round(responseCurrent.temp_c) + '<a class="cel"> ºC</a>');
                // //$('.temp_f').html(Math.round(responseCurrent.temp_f) + '<a class="fah"> ºF</a>');
                // $('.feelslike_c').html(Math.round(responseCurrent.feelslike_c) + '<a class="cel"> ºC</a>');
                // $('.feelslike_f').html(Math.round(responseCurrent.feelslike_f) + '<a class="fah"> ºF</a>');

                // /*('.wind_dir' + '.wind_kph' + '.wind_mph').html(current.wind_dir + Math.round((current.wind_kph)* 0.27777777777778)  + '<a class="cel"> mitres/h</a>' + Math.round(current.wind_mph)  + '<a class="fah"> miles/h</a>');
                //  */
                // $('.wind_dir').html(responseCurrent.wind_dir);//-
                // //toggle
                // $('.avgvis_km').html(Math.round(responseForecastDay.avgvis_km * 0.27777777777778) + '<a class="fan"> m/s</a>');
                // $('.wind_kph').html(Math.round(responseCurrent.wind_kph * 0.27777777777778) + '<a class="cel"> m/s</a>');
                // //$('.wind_mph').html(Math.round(responseCurrent.wind_mph) + '<a class="fah"> mph</a>');

                // $('.text').text(responseCurrent.condition.text);


                // $('.day_icon').attr('src', responseForecastDay.condition.icon  + '<a class="fan"> m/s</a>');
                // $('.icon').attr('src', responseCurrent.condition.icon  + '<a class="cel"> m/s</a>');

                // //newFeed() toggle with current   
                //         // $('.avgtemp_c').html(Math.round(responseForecastDay.avgtemp_c)  + '<a class="cel"> ºC</a>');
                //         // $('.avgtemp_f').html(Math.round(responseForecastDay.avgtemp_f)  + '<a class="fah"> ºF</a>');

                //        //for 24 hour ?
                //         $('.hour_temp_c').html(Math.round(responseForecastHour.temp_c)  + '<a class="cel"> ºC</a>');
                //         $('.hour_temp_f').html(Math.round(responseForecastHour.temp_f)  + '<a class="fah"> ºF</a>');


                //         $('.hour_will_it_snow').html(responseForecastHour.will_it_snow  + '<a class=""> </a>');
                //         $('.hour_will_it_rain').html(responseForecastHour.will_it_rain  + '<a class=""> </a>'); 

                var location = response.location;
                var current = response.currentApixu;
                var forecastDay = response.forecastday.day;
                var forecastHour = response.forecastday.hour; 

                $('.location').text(location.name + ', ' + location.country);
                //newFeed() toggle with current   
                $('.temp_c').html(Math.round(current.temp_c) + '<a class="cel"> ºC</a>');
                $('.temp_f').html(Math.round(current.temp_f) + '<a class="fah"> ºF</a>');
                $('.feelslike_c').html(Math.round(current.feelslike_c) + '<a class="cel"> ºC</a>');
                //$('.feelslike_f').html(Math.round(current.feelslike_f) + '<a class="fah"> ºF</a>');
                $('.avgtemp_c').html(Math.round(forecastDay.avgtemp_c)  + '<a class="fan"> ºC</a>');

                /*('.wind_dir' + '.wind_kph' + '.wind_mph').html(current.wind_dir + Math.round((current.wind_kph)* 0.27777777777778)  + '<a class="cel"> mitres/h</a>' + Math.round(current.wind_mph)  + '<a class="fah"> miles/h</a>');
                 */
                $('.wind_dir').html(current.wind_dir);//-
                //toggle
                $('.avgvis_km').html(Math.round(forecastDay.avgvis_km * 0.27777777777778) + '<a class="fan"> m/s</a>');
                $('.wind_kph').html(Math.round(current.wind_kph * 0.27777777777778) + '<a class="cel"> m/s</a>');
                //$('.wind_mph').html(Math.round(current.wind_mph) + '<a class="fah"> mph</a>');

                $('.text').text(current.condition.text);


                $('.day_icon').attr('src', forecastDay.condition.icon  + '<a class="fan"> m/s</a>');
                $('.icon').attr('src', current.condition.icon  + '<a class="cel"> m/s</a>');

                //newFeed() toggle with current   
                        // $('.avgtemp_c').html(Math.round(forecastDay.avgtemp_c)  + '<a class="cel"> ºC</a>');
                        // $('.avgtemp_f').html(Math.round(forecastDay.avgtemp_f)  + '<a class="fah"> ºF</a>');

                       //for 24 hour ?
                        $('.hour_temp_c').html(Math.round(forecastHour.temp_c)  + '<a class="cel"> ºC</a>');
                        $('.hour_temp_f').html(Math.round(forecastHour.temp_f)  + '<a class="fah"> ºF</a>');


                        $('.hour_will_it_snow').html(forecastHour.will_it_snow  + '<a class=""> </a>');
                        $('.hour_will_it_rain').html(forecastHour.will_it_rain  + '<a class=""> </a>'); 


                //   function K2F(k){
                //     return Math.round(k*(9/5)-459.67);
                // }

                // function K2C(k){
                //     return Math.round(k - 273.15);
                // }   
                var theConservationTime = new Date();  
                theConservationTime.setUTCMonth(7) + ':' + setUTCDate(15);//???????????????????????????????
                var today = new Date();
                var tomorrowConservation = today.getUTCMonth() + ':' + today.getUTCDate() + 1;//if tommorrow is 15 august

                var theSalaryDayTomorrow = new Date();
                theSalaryDayTomorrow.setUTCDate(15);
                var today = new Date();
                var tomorrow = today.getUTCDate() + 1;//if tommorrow is 15
    
                var theSalaryDay = new Date();
                theSalaryDay.setUTCDate(15);
                var today = new Date();
                var day = today.getUTCDate(); //if 15

                var isSnow = forecastHour.will_it_snow; //no indexOf #id4wRain         
                var isRain = forecastHour.will_it_rain; 

                var f = Math.round(current.temp_f);
                var c = Math.round(current.feelslike_c);
                //var cc = Math.round(forecastDay.avgtemp_c);//toggle????
                var nextButton = document.getElementById('next-button');

                var userFeed = new Instafeed({ // http://instagram.pixelunion.net/  ORhttps://api.instagram.com/v1/users/self/media/liked?access_token=ACCESS-TOKEN  
                    get: 'user',
                    userId: '6909994807',
                    accessToken: '6909994807.1677ed0.128066a7b9984d5392b0143cbde87360',
                    //resolution:"low_resolution",  
                    template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
                    limit: 60,
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


                        if ((f == '86') && (image.tags.indexOf('86') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((today == theSalaryDay) && (image.tags.indexOf('id4wReNew') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((today == theConservationTime) && (image.tags.indexOf('id4wConsCucu') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if(( isSnow == '1') && (image.tags.indexOf('id4wSnow') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if(( isRain == '1') && (image.tags.indexOf('id4wRain') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if(( tomorrow == theSalaryDayTomorrow ) && (image.tags.indexOf('id4wReNew') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '85') && (image.tags.indexOf('85') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '84') && (image.tags.indexOf('84') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '83') && (image.tags.indexOf('83') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '82') && (image.tags.indexOf('82') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '81') && (image.tags.indexOf('81') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '80') && (image.tags.indexOf('80') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '79') && (image.tags.indexOf('79') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '78') && (image.tags.indexOf('78') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '77') && (image.tags.indexOf('77') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '6') && (image.tags.indexOf('76') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '75') && (image.tags.indexOf('75') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '74') && (image.tags.indexOf('74') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '73') && (image.tags.indexOf('73') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '72') && (image.tags.indexOf('72') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '71') && (image.tags.indexOf('71') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '70') && (image.tags.indexOf('70') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '69') && (image.tags.indexOf('69') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '68') && (image.tags.indexOf('68') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '67') && (image.tags.indexOf('67') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '66') && (image.tags.indexOf('66') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '65') && (image.tags.indexOf('65') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '64') && (image.tags.indexOf('64') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '63') && (image.tags.indexOf('63') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '62') && (image.tags.indexOf('62') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '61') && (image.tags.indexOf('61') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '60') && (image.tags.indexOf('60') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '59') && (image.tags.indexOf('59') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '58') && (image.tags.indexOf('58') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '57') && (image.tags.indexOf('57') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '56') && (image.tags.indexOf('56') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '55') && (image.tags.indexOf('55') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '54') && (image.tags.indexOf('54') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '53') && (image.tags.indexOf('53') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '52') && (image.tags.indexOf('52') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '51') && (image.tags.indexOf('51') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '50') && (image.tags.indexOf('50') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '49') && (image.tags.indexOf('49') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '48') && (image.tags.indexOf('48') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '47') && (image.tags.indexOf('47') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '46') && (image.tags.indexOf('46') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '45') && (image.tags.indexOf('45') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '44') && (image.tags.indexOf('44') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '43') && (image.tags.indexOf('43') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '42') && (image.tags.indexOf('42') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((f == '41') && (image.tags.indexOf('41') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '40' || cc == '40' || f == '40') && (image.tags.indexOf('40') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '39' || cc == '39' || f == '39') && (image.tags.indexOf('39') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '38' || cc == '38' || f == '38') && (image.tags.indexOf('38') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '37' || cc == '37' || f == '27') && (image.tags.indexOf('37') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '36' || cc == '36' || f == '36') && (image.tags.indexOf('36') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '35' || cc == '35' || f == '35') && (image.tags.indexOf('35') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '34' || cc == '34' || f == '34') && (image.tags.indexOf('34') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '33' || cc == '33' || f == '33') && (image.tags.indexOf('33') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '32' || cc == '32' || f == '32') && (image.tags.indexOf('32') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '31' || cc == '31' || f == '31') && (image.tags.indexOf('31') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '30' || cc == '30' || f == '30') && (image.tags.indexOf('30') >= 0 && foundImages < maxImages)) { //++++
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '29' || cc == '29' || f == '29') && (image.tags.indexOf('29') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '28' || cc == '28' || f == '28') && (image.tags.indexOf('28') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '27' || cc == '27' || f == '27') && (image.tags.indexOf('27') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '26' || cc == '26' || f == '26') && (image.tags.indexOf('26') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '25' || cc == '25' || f == '25') && (image.tags.indexOf('25') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '24' || cc == '24' || f == '24') && (image.tags.indexOf('24') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '23' || cc == '23' || f == '23') && (image.tags.indexOf('23') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '22' || cc == '22' || f == '22') && (image.tags.indexOf('22') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '21' || cc == '21' || f == '21') && (image.tags.indexOf('21') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '20' || cc == '20' || f == '20') && (image.tags.indexOf('20') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '19' || cc == '19' || f == '19') && (image.tags.indexOf('19') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '18' || cc == '18' || f == '18') && (image.tags.indexOf('18') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '17' || cc == '17' || f == '17') && (image.tags.indexOf('17') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '16' || cc == '16' || f == '16') && (image.tags.indexOf('16') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '15' || cc == '15' || f == '15') && (image.tags.indexOf('15') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '14' || cc == '14' || f == '14') && (image.tags.indexOf('14') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '13' || cc == '13' || f == '13') && (image.tags.indexOf('13') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '12' || cc == '12' || f == '12') && (image.tags.indexOf('12') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '11' || cc == '11' || f == '11') && (image.tags.indexOf('11') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '10' || cc == '10' || f == '10') && (image.tags.indexOf('10') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '9' || cc == '9' || f == '9') && (image.tags.indexOf('9') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '8' || cc == '8' || f == '8') && (image.tags.indexOf('8') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '7' || cc == '7' || f == '7') && (image.tags.indexOf('7') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '6' || cc == '6' || f == '6') && (image.tags.indexOf('6') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '5' || cc == '5' || f == '5') && (image.tags.indexOf('5') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '4' || cc == '4' || f == '4') && (image.tags.indexOf('4') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '3' || cc == '3' || f == '3') && (image.tags.indexOf('3') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '2' || cc == '2' || f == '2') && (image.tags.indexOf('2') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '1' || cc == '1' || f == '1') && (image.tags.indexOf('1') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '0' || cc == '0' || f == '0') && (image.tags.indexOf('0') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-1' ||cc == '-1' ||  f == '-1') && (image.tags.indexOf('01') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-2' ||cc == '-2' ||  f == '-2') && (image.tags.indexOf('02') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-3' || cc == '-3' || f == '-3') && (image.tags.indexOf('03') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-4' || cc == '-4' || f == '-4') && (image.tags.indexOf('04') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-5' || cc == '-5' || f == '-5') && (image.tags.indexOf('05') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-6' || cc == '-6' || f == '-6') && (image.tags.indexOf('06') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-7' || cc == '-7' || f == '-7') && (image.tags.indexOf('07') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-8' || cc == '-8' || f == '-8') && (image.tags.indexOf('08') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-9' || cc == '-9' || f == '-9') && (image.tags.indexOf('09') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-10' ||cc == '-10' ||  f == '-10') && (image.tags.indexOf('010') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-11' ||cc == '-11' ||  f == '-11') && (image.tags.indexOf('011') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-12' ||cc == '-12' ||  f == '-12') && (image.tags.indexOf('012') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-13' ||cc == '-13' ||  f == '-13') && (image.tags.indexOf('013') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-14' ||cc == '-14' ||  f == '-14') && (image.tags.indexOf('014') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-15' || cc == '-15' || f == '-15') && (image.tags.indexOf('015') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-16' || cc == '-16' || f == '-16') && (image.tags.indexOf('016') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-17' || cc == '-17' || f == '-17') && (image.tags.indexOf('017') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-18' || cc == '-18' || f == '-18') && (image.tags.indexOf('018') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-19' || cc == '-19' || f == '-19') && (image.tags.indexOf('019') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-20' || cc == '-20' || f == '-20') && (image.tags.indexOf('020') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-21' || cc == '-21' || f == '-21') && (image.tags.indexOf('021') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-22' || cc == '-22' || f == '-22') && (image.tags.indexOf('022') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-23' || cc == '-23' || f == '-23') && (image.tags.indexOf('023') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-24' || cc == '-24' || f == '-24') && (image.tags.indexOf('024') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-25' || cc == '-25' || f == '-25') && (image.tags.indexOf('025') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-26' || cc == '-26' || f == '-26') && (image.tags.indexOf('026') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-27' || cc == '-27' || f == '-27') && (image.tags.indexOf('027') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-28' || cc == '-28' || f == '-28') && (image.tags.indexOf('028') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                        } else if ((c == '-29' || cc == '-29' || f == '-29') && (image.tags.indexOf('029') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
                         }

                        return false;

                    } //filter
                    //cc == '40' ||    }, 10000);

                });

                // code for ajax request to weather API
  function getWeatherInfo(url) {

    $.ajax({
      url: url,
      dataType: 'json',
      success: function(response) {
        var location = response.location;
    var forecastDay = response.forecastday.day;
    var forecastHour = response.forecastday.hour; 
        $('.location').text(location.name + ', ' + location.country);
          
            //newFeed() toggle with current   
        $('.avgtemp_c').html(Math.round(forecastDay.avgtemp_c)  + '<a class="cel"> ºC</a>');
         $('.avgtemp_f').html(Math.round(forecastDay.avgtemp_f)  + '<a class="fah"> ºF</a>');
          
         $('.day_icon').attr('src', forecastDay.condition.icon);
//        //for 24 hour ?
//         $('.hour_temp_c').html(Math.round(forecastHour.temp_c)  + '<a class="cel"> ºC</a>');
//         $('.hour_temp_f').html(Math.round(forecastHour.temp_f)  + '<a class="fah"> ºF</a>');
          
    
//         $('.hour_will_it_snow').html(forecastHour.will_it_snow  + '<a class=""> </a>');
//         $('.hour_will_it_rain').html(forecastHour.will_it_rain  + '<a class=""> </a>'); 
// var theConservationMonth = new Date();
// theConservationMonth.setUTCMonth(7);
// var today = new Date();
// var tomorrow = today.getUTCMonth();
      
// var theConservationDate = new Date();
// theConservationDate.setUTCDate(15);
// var today = new Date();
// var tomorrow = today.getUTCDate() + 1;//if tommorrow is 15 august  

var theConservationTime = new Date();  
theConservationTime.setUTCMonth(7) + ':' + setUTCDate(15);//???????????????????????????????
var today = new Date();
var tomorrowConservation = today.getUTCMonth() + ':' + today.getUTCDate() + 1;//if tommorrow is 15 august

var theSalaryDay = new Date();
theSalaryDay.setUTCDate(15);
var today = new Date();
var tomorrow = today.getUTCDate() + 1;//if tommorrow is 15

var isSnow = forecastHour.will_it_snow;         
var isRain = forecastHour.will_it_rain;         
var f = '';//Math.round(forecastDay.avgtemp_f);
var c = Math.round(forecastDay.avgtemp_c);          
var nextButtonForecast = document.getElementById('next-button-forecast'); //toggle butt next-button   
          
var userFeedForecast = new Instafeed({// http://instagram.pixelunion.net/  ORhttps://api.instagram.com/v1/users/self/media/liked?access_token=ACCESS-TOKEN  
get: 'user',
userId: '6909994807',
accessToken: '6909994807.1677ed0.128066a7b9984d5392b0143cbde87360',
//resolution:"low_resolution",  
   template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
   limit: 60,
                  // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                nextButtonForecast.setAttribute('disabled', 'disabled');
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
         else if ((today == theConservationTime) && (image.tags.indexOf('id4wConsCucu') >= 0 && foundImages < maxImages)) {
                            foundImages = foundImages + 1;
                            return true;
          }
         else if(( isSnow == '1') && (image.tags.indexOf('id4wSnow') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
     else if(( isRain == '1') && (image.tags.indexOf('id4wRain') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }  
         
     else if(( tomorrow == theSalaryDay ) && (image.tags.indexOf('id4wReNew') >= 0 && foundImages < maxImages)) {
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
      else if((c == '-1'|| f == '-1') && (image.tags.indexOf('01') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-2'|| f == '-2') && (image.tags.indexOf('02') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-3'|| f == '-3') && (image.tags.indexOf('03') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-4'|| f == '-4') && (image.tags.indexOf('04') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-5'|| f == '-5') && (image.tags.indexOf('05') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-6'|| f == '-6') && (image.tags.indexOf('06') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-7'|| f == '-7') && (image.tags.indexOf('07') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-8'|| f == '-8') && (image.tags.indexOf('08') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-9'|| f == '-9') && (image.tags.indexOf('09') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-10'|| f == '-10') && (image.tags.indexOf('010') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-11'|| f == '-11') && (image.tags.indexOf('011') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-12'|| f == '-12') && (image.tags.indexOf('012') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-13'|| f == '-13') && (image.tags.indexOf('013') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-14'|| f == '-14') && (image.tags.indexOf('014') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-15'|| f == '-15') && (image.tags.indexOf('015') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-16'|| f == '-16') && (image.tags.indexOf('016') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-17'|| f == '-17') && (image.tags.indexOf('017') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-18'|| f == '-18') && (image.tags.indexOf('018') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-19'|| f == '-19') && (image.tags.indexOf('019') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-20'|| f == '-20') && (image.tags.indexOf('020') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-21'|| f == '-21') && (image.tags.indexOf('021') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-22'|| f == '-22') && (image.tags.indexOf('022') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-23'|| f == '-23') && (image.tags.indexOf('023') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-24'|| f == '-24') && (image.tags.indexOf('024') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-25'|| f == '-25') && (image.tags.indexOf('025') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-26'|| f == '-26') && (image.tags.indexOf('026') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-27'|| f == '-27') && (image.tags.indexOf('027') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-28'|| f == '-28') && (image.tags.indexOf('028') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      else if((c == '-29'|| f == '-29') && (image.tags.indexOf('029') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
      
        return false;
     
 }  //filter
                                  //   }, 10000);

}); 
            // bind the load more button
        nextButtonForecast.addEventListener('click', function(event) {
                event.preventDefault();
                feed.next();
        });
        userFeedForecast.run();           
          


              
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
next-button-forecast
    // Initially, temp. is shown in celsius
    $('.next-button-forecast').hide();
    $('.temp_f').hide();
    $('.day_icon').hide();
    $('.avgvis_km').hide();
    //$('.wind_mph').hide();
    $('.avgtemp_c').hide();
    $('.hour_temp_f').hide();

    $('.next-button, .next-button-forecast').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.next-button').hide();
            $('.next-button-forecast').show();
        } else {
            $('.next-button-forecast').hide();
            $('.next-button').show();
        }
    });
    $('.icon, .day_icon').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.icon').hide();
            $('.day_icon').show();
        } else {
            $('.day_icon').hide();
            $('.icon').show();
        }
    });

    // code for toggling temp. (celsius/fahrenheit)
    // $('.temp_c, .temp_f').on('click', 'a', function(event) {
    //     event.preventDefault();
    //     if (event.target.className === 'cel') {
    //         $('.temp_c').hide();
    //         $('.temp_f').show();
    //     } else {
    //         $('.temp_f').hide();
    //         $('.temp_c').show();
    //     }
    // });
    $('.feelslike_c, .avgtemp_c').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.feelslike_c').hide();
            $('.avgtemp_c').show();
        } else {
            $('.avgtemp_c').hide();
            $('.feelslike_c').show();
        }
    });

    // $('.wind_kph, .wind_mph').on('click', 'a', function(event) {
    //     event.preventDefault();
    //     if (event.target.className === 'cel') {
    //         $('.wind_kph').hide();
    //         $('.wind_mph').show();
    //     } else {
    //         $('.wind_mph').hide();
    //         $('.wind_kph').show();
    //     }
    // });
    $('.wind_kph, .avgvis_km').on('click', 'a', function(event) {
        event.preventDefault();
        if (event.target.className === 'cel') {
            $('.wind_kph').hide();
            $('.avgvis_km').show();
        } else {
            $('.avgvis_km').hide();
            $('.wind_kph').show();
        }
    });
    //code for toggling temp. (celsius/fahrenheit)
      $('.hour_temp_c, .hour_temp_f').on('click', 'a', function(event) {
        event.preventDefault();
        if(event.target.className === 'cel') {
          $('.hour_temp_c').hide();
          $('.hour_temp_f').show();
        } else {
          $('.hour_temp_f').hide();
          $('.hour_temp_c').show();
        }
      });
     // code for toggling temp. (celsius/fahrenheit)
      // $('.avgtemp_c, .avgtemp_f').on('click', 'a', function(event) {
      //   event.preventDefault();
      //   if(event.target.className === 'cel') {
      //     $('.avgtemp_c').hide();
      //     $('.avgtemp_f').show();
      //   } else {
      //     $('.avgtemp_f').hide();
      //     $('.avgtemp_c').show();
      //   }
      // });

//toggle curr_or_forecastday 
      // code for toggling temp. (celsius/fahrenheit)
      $('.temp_c, .temp_f').on('click', 'a', function(event) {
        event.preventDefault();
        if(event.target.className === 'cel') {
          $('.temp_f').hide();
          $('.temp_c').show();
        } else {
          $('.temp_c').hide();
          $('.temp_f').show();
        }
      });
});
