//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//CommentsSection
let inputText = document.getElementById("inputText");
let userWhoPost = "Comment";
let commentNumber = 2;
let commentID = `comment${commentNumber}`; //iterar para que una vez posteado el coment anterior el id ++
let postBtnListener = document.getElementById("postBtnListener");
var comment = document.getElementById(commentID);

inputText.addEventListener("keyup", postComment/* textModified */);
postBtnListener.addEventListener("click", postComment);

function textModified() {
  /* comment.innerHTML = userWhoPost.replace(/(^|\s)(Comment)(\s|$)/ig, '$1<b>$2</b>$3') + "&nbsp;" + inputText.value;
 */
}

function postComment() {
  comment.innerHTML = userWhoPost.replace(/(^|\s)(Comment)(\s|$)/ig, '$1<b>$2</b>$3') + "&nbsp;" + inputText.value;
  if(inputText.value !== ""){
    inputText.value = "";
    comment.classList.add("postedComment");
    comment.classList.remove("noPostedComment");
    commentNumber ++
}
}

//fetch api buscar
//separar libreria swiper