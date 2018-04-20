var Youtube = /** @class */ (function () {
    function Youtube(title, views, likes, dislikes, subscribeCount, comment, commentCounter, channelName, channelDescription) {
        var _this = this;
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.subscribeCount = subscribeCount;
        this.comment = comment;
        this.commentCounter = commentCounter;
        this.channelName = channelName;
        this.channelDescription = channelDescription;
        //getters
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDisLikes = function () {
            return _this.dislikes;
        };
        this.getSubscribeCount = function () {
            return _this.subscribeCount;
        };
        this.getCommentCounter = function () {
            return _this.commentCounter;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getChannelDescription = function () {
            return _this.channelDescription;
        };
        //methods
        //method to increment viewcount
        this.viewCounter = function () {
            _this.views++; //if this method is invoked it increments the no. of views
        };
        //method increment likes and dislikes
        this.likesAndDislikes = function (liked, disliked) {
            if (liked) {
                _this.likes++; //when a  button click event is launced it returns boolean liked or disliked and it is passed as parameter to this method
            }
            if (disliked) {
                _this.dislikes++;
            }
        };
        // method to increase the subscribed counter
        this.subscribed = function () {
            _this.subscribeCount++; //on clicking subscribe button counter is incrimented
        };
        //method that increments comment counter
        this.commentsIncrement = function () {
            _this.commentCounter++; //clicking on post button increments the comment counter
        };
        this.commentsPost = function (commentInput) {
            _this.comment = commentInput;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.likes = dislikes;
        this.subscribeCount = subscribeCount;
        this.comment = comment;
        this.commentCounter = commentCounter;
        this.channelName = channelName;
        this.channelDescription = channelDescription;
    } //constructor ends here
    return Youtube;
}()); //class ends here
//first instance of Youtube class
var aVideo = new Youtube('imagine Dragons', 525817590, 4600000, 125000, 11000000, 'great video', 188963);
//demonstrating the use of getters
//get title
console.log(" Title: " + aVideo.getTitle());
// get views
console.log("Number of views: " + aVideo.getViews());
// get likes
console.log("Number of likes: " + aVideo.getLikes());
// get dislikes
console.log("Number of dislikes:" + aVideo.getDisLikes());
// get subscribeCount
console.log("Number of subscribers:" + aVideo.getSubscribeCount());
//get comment counter
console.log("Number of Comments: " + aVideo.getCommentCounter());
// get comment
console.log("Comment:" + aVideo.getComment()); //this will give the comment that is currently stored in comment property of aVideo instance of class Youtube
//demonstration of methods
//view count incrementer
aVideo.viewCounter(); //this will increment viewcount
console.log("Updated number of views: " + aVideo.getViews());
//whether user liked or disliked it
aVideo.likesAndDislikes(true, false);
console.log("Updated number of likes:" + aVideo.likes + ",Updated no. of dislikes:" + aVideo.dislikes);
//second instance of youtubeclass
var latestVideo = new Youtube('foo fighters walk', 86000000, 500000, 12300, 3600000, 'amazing video', 300000, 'foo fighters', "Foo Fighters' official music video for 'The Pretender' listen to Foo Fighters on Spotify");
console.log("\n\n2nd instance of the class starts from here....\n");
//demonstrating the use of getters for latestVideo instance
//get title
console.log(" Title: " + latestVideo.getTitle());
// get views
console.log("Number of views: " + latestVideo.getViews());
// get likes
console.log("Number of likes: " + latestVideo.getLikes());
// get dislikes
console.log("Number of dislikes:" + latestVideo.getDisLikes());
// get subscribeCount
console.log("Number of subscribers:" + latestVideo.getSubscribeCount());
//get comment counter
console.log("Number of Comments: " + latestVideo.getCommentCounter());
// get comment
console.log("Comment:" + latestVideo.getComment()); //this will give the comment that is currently stored in comment property of latestvideo instance of class Youtube
//get uploader
console.log("uploaded by:" + latestVideo.getChannelName());
//channel description
console.log("description of the channel:" + latestVideo.getChannelDescription());
//demonstrating methods
//subscribed method when invoked increments subscribe counter
latestVideo.subscribed();
console.log("updated number of subscriber:" + latestVideo.getSubscribeCount());
//when you post a new comment
latestVideo.commentsPost("not so good video"); //updates comment
latestVideo.commentsIncrement();
//this updates the number of comment
console.log("updated number of comment:" + latestVideo.getCommentCounter());
console.log("updated comment:" + latestVideo.getComment());
