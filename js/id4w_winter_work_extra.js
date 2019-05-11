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
	
  var galleryFeed = new Instafeed({
  get: "user",
  userId: 6909994807,
  accessToken: "6909994807.1677ed0.128066a7b9984d5392b0143cbde87360",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 6,
  //template: '<div class="col-xs-12 col-sm-6 col-md-4">$<span id="Value">0</span><button width="500" height="500" id = add class="button button1" onclick="javascript:add(1)">Add Value</button><button width="500" height="500" id = reset class="button button1" onclick="javascript:reset()">Reset</button><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
    template: '<div class="col-xs-12 col-sm-6 col-md-4"><div class="like-area ml-auto mr-0"><a href="#" id="like-link" class="like-link">Like</a><span id="like-counter" class="like-counter">0</span></div><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',

  //template: '<div class="col-xs-12 col-sm-6 col-md-4"><p><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span></a><a href="#" title="Love it" class="btn btn-counter multiple-count" data-count="0"><span>&#x2764;</span> Love it</a></p><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  //template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
  target: "instafeed-gallery-feed",
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute('disabled', 'disabled');
    }
  },
});
galleryFeed.run();
var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});
//like-counter
var linkText = [
  "Like", "0"
];

var $likeArea = $('.like-area');

$likeArea.each(function() {
  var likes = parseInt($(this).find('#like-counter').text());
  var $likeLink = $(this).find('#like-link');
  var $likeCounter = $(this).find('#like-counter');
  var resetTimer = null;

  // Blank #href
	$('body').delegate('a[href="#"]', 'click', function(event) {
			event.preventDefault();
	});
  
  // Prepare like counter (split digits by </span>)
  $likeCounter.each(function() {
    var $likeCounter = $(this);
    var characters = $likeCounter.text().split("");
    $likeCounter.empty();
    $.each(characters, function (i, digit) {
      $likeCounter.append('<span class="digits">' +
        '<span class="digit-down">'+digit+'</span>'+
        '</span>');
    });
  });
  
  // Animation and aoutocount by click `Like`
  $likeLink.click(function() {
    clearTimeout(resetTimer);
    var oldLikes = likes;

    if(!$(this).hasClass('liked'))
      likes += 1;
    else
      likes -= 1;

    if(likes < 0)
      likes = 0;

    $likeCounter.text(likes)

    if(!$(this).hasClass('liked'))
      $(this).text(linkText[1])
    else
      $(this).text(linkText[0])

    $(this).toggleClass("liked");
    $likeCounter.toggleClass("liked");

    var oldCharacters = oldLikes.toString().split("");
    var characters = $likeCounter.text().split("");
    $likeCounter.empty();

    $.each(characters, function (i, digit) {

      var indx = i + 1;
      var digitalUp, digitalDown;
      var animateClass = "animate";
      if (oldCharacters[i] === digit)
        animateClass = "";

      // Сountdown
      if(!$likeCounter.hasClass('liked')) {

        digitalUp = parseInt(digit);
        digitalDown = parseInt(digit) + 1;
        
        if(digitalDown >= 10)
          digitalDown = 0;
        
        // Before, add slot for higher order numbers
        if (indx == 1 && (oldCharacters.length > characters.length)) {
          $likeCounter.append('<span class="digits '+animateClass+' down toremove">' +
          '<span class="digit-up"> </span>'+
          '<span class="digit-down">'+(digitalDown + 1)+'</span>'+
          '</span>');
        }
        
        $likeCounter.append('<span class="digits '+animateClass+' down">' +
        '<span class="digit-up">'+digitalUp+'</span>'+
        '<span class="digit-down">'+digitalDown+'</span>'+
        '</span>');
        
      // Сountup
      } else {

        digitalUp = parseInt(digit) - 1;

        if(digitalUp <= -1)
          digitalUp = 9;
        
        if(digitalUp == 0 && indx == 1)
          digitalUp = '';
        
        digitalDown = parseInt(digit);

        $likeCounter.append('<span class="digits '+animateClass+' toup">' +
        '<span class="digit-up">'+digitalUp+'</span>'+
        '<span class="digit-down">'+digitalDown+'</span>'+
        '</span>');

      }

    });

    // Remove animation class
    setTimeout(function() {
      $likeCounter.find('.digits').removeClass('animate');
    }, 600);
    
    // Remove unused difit`s span (1000 > 999)
    setTimeout(function() {
      $likeCounter.find('.toremove').remove();
    }, 1200);
    
    // Reset the timer for new likes
    resetTimer = setTimeout(function() {
      $likeLink.removeClass('liked');
      $likeCounter.removeClass('liked');
      $likeLink.text(linkText[0]);
    }, 3000);

  });
  
});
/* 
 * Love button for Design it & Code it
 * http://designitcodeit.com/i/9
 */
// $('.btn-counter').on('click', function(event, count) {
//   event.preventDefault();
  
//   var $this = $(this),
//       count = $this.attr('data-count'),
//       active = $this.hasClass('active'),
//       multiple = $this.hasClass('multiple-count');
  
//   // First method, allows to add custom function
//   // Use when you want to do an ajax request
//   /* if (multiple) {
//   $this.attr('data-count', ++count);
//   // Your code here
//   } else {
//   $this.attr('data-count', active ? --count : ++count).toggleClass('active');
//   // Your code here
//   } */
  
//   // Second method, use when ... I dunno when but it looks cool and that's why it is here
//   $.fn.noop = $.noop;
//   $this.attr('data-count', ! active || multiple ? ++count : --count  )[multiple ? 'noop' : 'toggleClass']('active');
  
// });
	
});
