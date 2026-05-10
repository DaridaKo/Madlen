document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const header = document.querySelector('.header');
    const body = document.body;
    const title = document.querySelector('.footer-top__text ');
    const arrow = document.querySelector('.background__arrow');
    const spoiler = document.querySelectorAll('.spoiler-faq__title');
    const button = document.querySelector('.info-contacts__button');

    if (burger) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            if (menu) menu.classList.toggle('active');
            if (header) header.classList.toggle('active');
            body.classList.toggle('lock');
        });
    }

    // Фиксированный хедер при скролле
    const background = document.querySelector('.background');
    
    function checkScroll() {
        if (!background) return;
        
        const backgroundHeight = background.offsetHeight; // аналог innerHeight()
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPos > backgroundHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }
    
    // Вызов при загрузке
    checkScroll();
    
    // Обработчики событий
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    title.addEventListener("click", (e) =>{
        if (title.classList.contains('scrolling')) {
            e.preventDefault();
            let id = title.getAttribute('data-id');
            let review = document.getElementById(id);

            let OffSet = review.offsetTop;

            window.scrollTo({
                top: OffSet,
                behavior: 'smooth'
            });
        }
    });

    arrow.addEventListener("click", (e) => {
        e.preventDefault();
        let review = document.getElementById('review');
        let OffSet = review.offsetTop;
        window.scrollTo({
            top: OffSet,
            behavior: 'smooth'
        });
    });

    spoiler.forEach(function(item){
        item.addEventListener("click", (e) => {
        item.nextElementSibling.classList.toggle("active");
        item.classList.toggle("active");
        })
    });

    button.addEventListener("click", (e) =>{
        e.preventDefault();
        let tel = Number(prompt("Введите свой номер телефона, и мы с вами созвонимся")); 
        if(!tel){
            alert("Вы ввели неправильные символы");
        }
        console.log(tel);
    });

});