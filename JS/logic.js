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
  
  //Comments
  let inputText = document.getElementById("inputText");
  let span = document.getElementById("span");
  let postBtnListener = document.getElementById("postBtnListener");
  inputText.addEventListener("keydown",textModified);
  postBtnListener.addEventListener("click",postComment);
  
  function textModified(){
    let comment = document.getElementById("comment2");
    
    comment.innerText = inputText.value;
    //conflicto para devolver la palabra "comment" bold, revisar despues innerHTML func
  }
  
  function postComment(){
    
  }
