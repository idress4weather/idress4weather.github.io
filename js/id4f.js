
                           
                            var brianFeed = new Instafeed({
   
                                    
  
   
    get: 'user',
    userId: '6909994807', 
    clientId: 'c17263aa10a14533a4b43dfe756898ff',
    //useHttp: "true",                                
    limit: '30',
    resolution: 'standard_resolution',
     template: '<div class="col-xs-12 col-sm-6 col-md-4"><div class="like-area ml-auto mr-0"><a href="#" id="like-link" class="like-link">Like</a><span id="like-counter" class="like-counter">0</span></div><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i>&heart {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
                               
    filter: function(image) {
        console.log(image);
        return image.tags.indexOf('f') >= 0;
    }

});

brianFeed.run();
                            //
                            //<div id="brianFeed" class="gallery row no-gutter"></div>
