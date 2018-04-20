class Youtube
{
    constructor(private title:string,private views:number,public likes:number,public dislikes:number,private subscribeCount:number,public comment:string, private commentCounter:number,private channelName?:string, private channelDescription?:string)
    {
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.likes = dislikes;
        this.subscribeCount = subscribeCount;
        this.comment =comment;
        this.commentCounter=commentCounter;
        this.channelName =channelName;
        this.channelDescription = channelDescription;
    }//constructor ends here
    
        //getters
        getTitle = ():string=>
        {
            return this.title;
        }
        getViews = ():number=>
        {
            return this.views;
        }
        getLikes = ():number=>
        {
            return this.likes;
        }
        getDisLikes = ():number=>
        {
            return this.dislikes;
        }
        getSubscribeCount = ():number=>
        {
            return this.subscribeCount;
        }
        getCommentCounter = ():number=>
        {
            return this.commentCounter;
        }
        getComment = ():string=>
        {
            return this.comment;
        }
        getChannelName = ()=>
        {
            return this.channelName;
        }
        getChannelDescription = ()=>
        {
            return this.channelDescription;
        }


        //methods
        //method to increment viewcount
        viewCounter = ()=>
        {
            this.views++; //if this method is invoked it increments the no. of views
        }
        //method increment likes and dislikes
        likesAndDislikes = (liked:boolean,disliked:Boolean)=>
        {
            if(liked)
            {
                this.likes++; //when a  button click event is launced it returns boolean liked or disliked and it is passed as parameter to this method
            }
            if(disliked)
            {
                this.dislikes++;
            }
        }
        // method to increase the subscribed counter
        subscribed = ()=>
        {
           this.subscribeCount++;   //on clicking subscribe button counter is incrimented
        }
        //method that increments comment counter
        commentsIncrement = ()=>
        {
            this.commentCounter++; //clicking on post button increments the comment counter
        }
        commentsPost = (commentInput:string)=>
        {
            this.comment =  commentInput;
        }

}//class ends here

//first instance of Youtube class
let aVideo = new Youtube('imagine Dragons',525817590,4600000,125000,11000000,'great video',188963);
//demonstrating the use of getters
//get title
console.log(` Title: ${aVideo.getTitle()}`);
// get views
console.log(`Number of views: ${aVideo.getViews()}`);
// get likes
console.log(`Number of likes: ${aVideo.getLikes()}`);
// get dislikes
console.log(`Number of dislikes:${aVideo.getDisLikes()}`);
// get subscribeCount
console.log(`Number of subscribers:${aVideo.getSubscribeCount()}`);
//get comment counter
console.log(`Number of Comments: ${aVideo.getCommentCounter()}`);
// get comment
console.log(`Comment:${aVideo.getComment()}`); //this will give the comment that is currently stored in comment property of aVideo instance of class Youtube


//demonstration of methods
//view count incrementer
aVideo.viewCounter();//this will increment viewcount
console.log(`Updated number of views: ${aVideo.getViews()}`);
//whether user liked or disliked it
aVideo.likesAndDislikes(true,false);
console.log(`Updated number of likes:${aVideo.likes},Updated no. of dislikes:${aVideo.dislikes}`);

//second instance of youtubeclass
let latestVideo = new Youtube('foo fighters walk',86000000,500000,12300,3600000,'amazing video',300000,'foo fighters',`Foo Fighters' official music video for 'The Pretender' listen to Foo Fighters on Spotify`);
console.log(`\n\n2nd instance of the class starts from here....\n`);

//demonstrating the use of getters for latestVideo instance
//get title
console.log(` Title: ${latestVideo.getTitle()}`);
// get views
console.log(`Number of views: ${latestVideo.getViews()}`);
// get likes
console.log(`Number of likes: ${latestVideo.getLikes()}`);
// get dislikes
console.log(`Number of dislikes:${latestVideo.getDisLikes()}`);
// get subscribeCount
console.log(`Number of subscribers:${latestVideo.getSubscribeCount()}`);
//get comment counter
console.log(`Number of Comments: ${latestVideo.getCommentCounter()}`);
// get comment
console.log(`Comment:${latestVideo.getComment()}`); //this will give the comment that is currently stored in comment property of latestvideo instance of class Youtube
//get uploader
console.log(`uploaded by:${latestVideo.getChannelName()}`);
//channel description
console.log(`description of the channel:${latestVideo.getChannelDescription()}`);

//demonstrating methods
//subscribed method when invoked increments subscribe counter
latestVideo.subscribed();
console.log(`updated number of subscriber:${latestVideo.getSubscribeCount()}`);
//when you post a new comment
latestVideo.commentsPost(`not so good video`);//updates comment
latestVideo.commentsIncrement();
//this updates the number of comment
console.log(`updated number of comment:${latestVideo.getCommentCounter()}`);
console.log(`updated comment:${latestVideo.getComment()}`);





