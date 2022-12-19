function burgerMenu(){
    var menu = document.getElementById("menu");
    if(menu.clientHeight == 0){
        menu.style.animation = "mobile-open-menu 0.4s linear";
    }
   
    else{
        menu.style.animation = "mobile-close-menu 0.4s linear";
    }
}