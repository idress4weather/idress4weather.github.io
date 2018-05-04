$(function() {
 //Set up instafeed
var f = idengl;
var userFeed = new Instafeed({
  
get: 'user',
userId: '5679701317',//'5679701317',//winter//'6909994807',//
accessToken: '5679701317.1677ed0.942d75d149a4481f96a6004c74ddde62',
  resolution:"low_resolution",
  template: '<a class="fancybox" rel="instagram" href="{{link}}"target="_blank"><img src="{{image}}" /></a>',
  limit: 1000,

                  // every time we load more, run this function
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                nextButton.setAttribute('disabled', 'disabled');
            }               
        },
          
        success: function() {
        foundImages = 0;
        maxImages = 1000;//1000;
    },
          //window.setTimeout(function() {
    filter: function(image) {
         if(( f == 'idengl') && (image.tags.indexOf('idengl') >= 0 && foundImages < maxImages)) {
            foundImages = foundImages + 1;
            return true;
         }
    //   if(image.tags.indexOf('idengl') >= 0 && foundImages < maxImages) {
    //         foundImages = foundImages + 1;
    //         return true;
    //      }
        
         return false;
        }//filter
       
        
    });
 
    
  
userFeed.run();           
          
	      
	
});
