//CommentsSection
let userWhoPost = "Comment";
let commentNumber = 0;
let likes = 757;
let commentID = `#comment${commentNumber}`;

let inputText = document.getElementById("inputText");
let postBtnListener = document.getElementById("postBtnListener");
let commentActionBtn = document.getElementById("commentActionBtn");
let likeActionBtn = document.getElementById("likeActionBtn");
let likesCountToggle = document.getElementById("likesCountToggle");
let pathLikeBtn = document.getElementById("#pathLikeBtn");

commentActionBtn.addEventListener("click",focusInput);
likeActionBtn.addEventListener("click",addLikeAnimate);
postBtnListener.addEventListener("click", postComment);

function focusInput(){
  inputText.focus();
}

function addLikeAnimate(){
  if(likesCountToggle.innerText === `4,${likes} Likes`){
    likesCountToggle.innerText = `4,756 Likes`;
  } else {
    likesCountToggle.innerText = `4,${likes} Likes`;
  }

  //add and remove animation + like color
  if(likeActionBtn.classList.contains("animate")){
    likeActionBtn.classList.remove("animate")
    likeActionBtn.classList.remove("pathLikedBtn")
  } else{
    likeActionBtn.classList.add("animate")
    likeActionBtn.classList.add("pathLikedBtn")
  }
  
}

function postComment() {
  var commentSection = document.querySelector(".commentSection")
  var p = document.createElement("p");

  inputText.value.trim();
  inputText.value.trimRight();


  if (inputText.value !== "" && inputText.value !== " "&& inputText.value !== "  "&& inputText.value !== "   ") {
    commentNumber++
  } else {
    return
  };

  p.innerHTML = userWhoPost.replace(/(^|\s)(Comment)(\s|$)/ig, '$1<b>$2</b>$3') + "&nbsp;" + inputText.value;
  commentSection.appendChild(p)
  p.classList.add(`#comment${commentNumber}`)
  inputText.value = "";
}