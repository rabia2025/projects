// زر القائمة في الجوال

const menu = document.querySelector(".icons span:last-child");
const nav = document.querySelector("nav");


menu.addEventListener("click", function(){

    nav.classList.toggle("active");

});



// حركة عند الضغط على زر اكتشف المزيد

const button = document.querySelector("button");


button.addEventListener("click", function(){

    document.querySelector(".products")
    .scrollIntoView({
        behavior:"smooth"
    });

});



// تأثير ظهور المنتجات عند النزول

const cards = document.querySelectorAll(".card");


window.addEventListener("scroll", function(){

    cards.forEach(card => {

        let position = card.getBoundingClientRect().top;

        let screen = window.innerHeight;


        if(position < screen - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});