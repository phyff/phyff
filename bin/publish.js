const ghPages = require('gh-pages');

console.log("it is publishing");

ghPages.publish('public', {
    push: true,
    src: "**/*!(.map)",
    message: "Build and deploy to pages"
}, function(err) {
    
});