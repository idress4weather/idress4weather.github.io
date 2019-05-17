$(function(){
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
	
	  success: function(){
	  foundImg = 0;
	maxImg = 1000;		  
	  },
	  filter: function(image){
		  if(image.tags.indexOf('f') > = 1 && foundImg < maxImg){
					foundImg = foundImg + 1;
			  return true;
		  }return false;
	  }
});
galleryFeed.run();
var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  galleryFeed.next()
});
});
