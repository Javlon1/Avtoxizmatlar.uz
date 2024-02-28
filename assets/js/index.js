// Scroll Up Start
document.addEventListener('DOMContentLoaded', function () {
    const scrollUpButton = document.getElementById('scrollUp');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 100;
        if (scrollY > threshold) {
            scrollUpButton.classList.add('visible');
        } else {
            scrollUpButton.classList.remove('visible');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollUpButton.addEventListener('click', scrollToTop);
});
// Scroll Up end

// Scrolling Row Start
document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('list1');

    list.addEventListener('wheel', function (event) {
        event.preventDefault();
        var delta = event.deltaY || event.detail || event.wheelDelta; // Получаем значение прокрутки
        list.scrollLeft += delta * 0.5;
    });
});
// Scrolling Row End

// nav start
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav__item");
const navLog = document.querySelector(".nav__log");
const opacity = document.querySelector(".opacity");

menu.onclick = () => {
    menu.classList.toggle("openmenu");
    nav.classList.toggle("active_nav");
    navLog.classList.toggle("active_nav");
    opacity.classList.toggle("opacity_act");
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
};

opacity.onclick = () => {
    menu.classList.remove("openmenu");
    nav.classList.remove("active_nav");
    navLog.classList.remove("active_nav");
    opacity.classList.remove("opacity_act");
    document.body.style.overflow = 'auto';
};
// nav end

// Dropdown Start
document.getElementById("myInput").addEventListener("focus", function () {
    document.getElementById("myDropdown").classList.add("show");
    opacity.classList.add("opacity_act");
    document.body.style.overflow = 'hidden';
});

document.getElementById("myInput").addEventListener("blur", function () {
    document.getElementById("myDropdown").classList.remove("show");
});
// Dropdown End

// 
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById('title');

    const ulElement = document.getElementById('list');
    const chevron = document.querySelector(".fa-chevron-down");

    titleElement.addEventListener('click', function (event) {
        if (ulElement.classList.contains('show')) {
            ulElement.classList.remove('show');
            chevron.classList.remove("rotate");
        } else {
            ulElement.classList.add('show');
            chevron.classList.add("rotate");
        }

        event.stopPropagation();
    });


    ulElement.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        ulElement.classList.remove('show');
        chevron.classList.remove("rotate");
    });
});
// 

//Akkardion Start 
document.addEventListener("DOMContentLoaded", function () {
    const addresses = document.querySelectorAll(".detail__addres");

    addresses.forEach(function (address) {
        const title = address.querySelector(".title");
        const list = address.querySelector(".detail__list");
        const chevron = address.querySelector(".fa-chevron-down");

        title.addEventListener("click", function () {
            addresses.forEach(function (addr) {
                if (addr !== address) {
                    addr.querySelector(".detail__list").classList.remove("address-act");
                    addr.querySelector(".fa-chevron-down").classList.remove("rotate");
                }
            });

            list.classList.toggle("address-act");
            chevron.classList.toggle("rotate");
        });
    });
});

const gallery = document.getElementById("gallery")
const galleryIcon = document.getElementById("gallery-icon")
const galleryList = document.getElementById("gallery-list")

gallery.addEventListener("click",()=>{
    galleryIcon.classList.toggle("rotate")
    galleryList.classList.toggle("gallery-act")
})
//Akkardion End 

// Input Pattern Start
document.getElementById('phoneInput1').addEventListener('input', function (e) {
    let inputValue = e.target.value.replace(/\D/g, '');
    
    // Проверка начала номера на "998"
    if (!inputValue.startsWith('998')) {
        inputValue = '998' + inputValue;
    }
    
    let x = inputValue.match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/);
    if (x !== null) {
        e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
    }
});


document.getElementById('phoneInput2').addEventListener('input', function (e) {
    let inputValue = e.target.value.replace(/\D/g, '');
    
    // Проверка начала номера на "998"
    if (!inputValue.startsWith('998')) {
        inputValue = '998' + inputValue;
    }
    
    let x = inputValue.match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/);
    if (x !== null) {
        e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
    }
});
// Input Pattern End

