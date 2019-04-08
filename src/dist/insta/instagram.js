var Instafeed = require("instafeed.js");

var feed = new Instafeed({
    get: 'user',
    userId: '7154048760',
    accessToken: '7154048760.1677ed0.fe74350a70964dc192f484b7ca789c78',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
    filter: function(image) {
        return image.tags.indexOf('TAG_NAME') >= 0;
    }
});
feed.run();

alert('instagram');