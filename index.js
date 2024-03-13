const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postsContainer = document.getElementById("posts");
let storedPosts = [];

for(let i = 0; i < posts.length; i++){
    createPost(posts[i]);
}

// Create Post for all objects in posts
function createPost(post){
    // !!Created a div tag to hold all tags created for a new post
    let newDiv = document.createElement("div");
    newDiv.classList.add("myDiv");
    
    // Create tags for profile picture, name and location
    let profileImg = document.createElement('img');
    profileImg.id = "profileImg";
    profileImg.src = post.avatar;
    
    let profileName = document.createElement("p");
    profileName.id = "profileName";
    profileName.textContent = post.name;
    
    let profileLoc = document.createElement("p");
    profileLoc.id = "profileLoc"; 
    profileLoc.textContent = post.location;
    
    // Create div tag to hold profile image and a div that will hold name and location
    let imgNameLocDiv = document.createElement("div");
    imgNameLocDiv.classList.add("imgNameLocDiv");
    
    // Add image to div that holds profile image and a div that will hold name and location
    imgNameLocDiv.appendChild(profileImg);
    
    // Add name and location to their own div
    let nameLocDiv = document.createElement("div");
    nameLocDiv.classList.add("nameLocDiv");
    nameLocDiv.appendChild(profileName);
    nameLocDiv.appendChild(profileLoc);
    
    // Add name and locations div to the div that hold the profile image
    imgNameLocDiv.appendChild(nameLocDiv);
    newDiv.appendChild(imgNameLocDiv);
    
    
    //Post Image Portion
    
    // Create img tag to hold the image being posted and add it to the container div that holds everything   
    let postImg = document.createElement("img");
    postImg.id = "postImg";
    postImg.src = post.post;
    newDiv.appendChild(postImg);
    
    
    //Under post Image portion
    
    // Create new div to hold all the content under the image posted
    let postInfoDiv = document.createElement('div');
    postInfoDiv.classList.add("postInfoDiv");
    
    // Create a div to hold heart, comment and share
    let postLikeCommentShareDiv = document.createElement("div");
    postLikeCommentShareDiv.classList.add("postLikeCommentShareDiv");
    
    // Create tags for heart, comment and share images.
    let heart = document.createElement('img');
    heart.id = "heartCommentShare";
    heart.src = "./images/icon-heart.png";
    
    let share = document.createElement('img');
    share.id = "heartCommentShare";
    share.src = "./images/icon-dm.png";
    
    let comment = document.createElement('img');
    comment.id = "heartCommentShare";
    comment.src = "./images/icon-comment.png";
    
    // Add heart, comment, and share tags to postLikeCommentShareDiv
    postLikeCommentShareDiv.appendChild(heart);
    postLikeCommentShareDiv.appendChild(comment);
    postLikeCommentShareDiv.appendChild(share);
    postInfoDiv.appendChild(postLikeCommentShareDiv);
    
    
    // Create tags for number of likes and comment
    let like = document.createElement("p");
    like.id = "postLikesCount";
    like.innerText = post.likes + " likes";
    
    let username = document.createElement('p');
    username.id = "postUsername";
    username.innerText = post.username; 
    
    let postComment = document.createElement("p");
    postComment.id = "postComment";
    postComment.innerText = post.comment;
    
    let usernameCommentDiv = document.createElement("div");
    usernameCommentDiv.classList.add("usernameCommentDiv");
    
    usernameCommentDiv.appendChild(username);
    usernameCommentDiv.appendChild(postComment);
    
    postInfoDiv.appendChild(like);
    postInfoDiv.appendChild(usernameCommentDiv);
    
    newDiv.appendChild(postInfoDiv);
    
    storedPosts.push(newDiv);
}


for(let j = 0; j < storedPosts.length; j++){
    postsContainer.appendChild(storedPosts[j])
}

