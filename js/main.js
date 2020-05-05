const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction(){
    if(window.pageYOffset > 300){
    backToTopButton.getElementsByClassName.display = "none";
}else{ //hide backtotopbutton
    backToTopButton.style.display = "none";
}
}

backToTopButton.addEventListener("click", backToTop);

function backToTop(){
    window.scrollTo(0,0);
}