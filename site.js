const link = document.querySelector(".link");

button.addEventListener("click", function(){
    mobileNav.classList.toggle("active");
});
windo.addEventListener("scroll", function() {
if(this.window.pageYOffset > 0) return link.classList.add("active");
return link.classList.remove("active")
});
