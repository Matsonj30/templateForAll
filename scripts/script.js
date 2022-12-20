function burgerMenu(){
    var menu = document.getElementById("menu");
    if(menu.clientHeight == 0){
        menu.style.animation = "mobile-open-menu 0.4s ease-in";
    }
   
    else{
        menu.style.animation = "mobile-close-menu 0.4s ease-in";
    }
}