let navMenuBtn = document.getElementById("navMenuBtn")
let menu = document.getElementById("menu")
let flag = 0;


let btnPage1 = document.getElementById("btnPage1");
let btnPage2 = document.getElementById("btnPage2");
let btnPage3 = document.getElementById("btnPage3");
let btnPage4 = document.getElementById("btnPage4");
let btnPage5 = document.getElementById("btnPage5");

let probs = document.getElementById("probsmenu")


let probsMenu = document.getElementById("probsMenu")
let probsMenuHtml = `<div class="probsEl mt-4 mb-4">
                <h3>Наименование профессиональной пробы</h3>
                <div>
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button>Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3 class=" ">Наименование профессиональной пробы</h3>
                <div class="">
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button class="">Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3>Наименование профессиональной пробы</h3>
                <div>
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button>Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3 class=" ">Наименование профессиональной пробы</h3>
                <div class="">
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button class="">Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3>Наименование профессиональной пробы</h3>
                <div>
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button>Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3 class=" ">Наименование профессиональной пробы</h3>
                <div class="">
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button class="">Подробнее</button>
            </div>
            <div class="probsEl mt-4 mb-4">
                <h3>Наименование профессиональной пробы</h3>
                <div>
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button>Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3 class=" ">Наименование профессиональной пробы</h3>
                <div class="">
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button class="">Подробнее</button>
            </div>
            <div class="probsEl mt-4 mb-4">
                <h3>Наименование профессиональной пробы</h3>
                <div>
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button>Подробнее</button>
            </div>

            <div class="probsEl mt-4 mb-4">
                <h3 class=" ">Наименование профессиональной пробы</h3>
                <div class="">
                    <span><img src="./img/propsLogos/icon.png" alt="">Безопасность</span>
                    <span><img src="./img/propsLogos/icon1.png" alt="">ГБПОУ “Колледж полиции”</span>
                    <span><img src="./img/propsLogos/icon2.png" alt="">г. Москва, улица Генерала Белова, д. 6</span>
                    <span><img src="./img/propsLogos/icon3.png" alt="">Количество свободных мест: 28 из 50</span>
                </div>
                <button class="">Подробнее</button>
            </div>`


navMenuBtn.onclick = function(){
    if (flag) {
        menu.innerHTML = ``
        flag = 0
    }
    else{
        menu.innerHTML = `<li class="border-bottom border-secondary py-2">Главная</li>
        <li class="border-bottom border-secondary py-2">Профпробы</li>
        <li class="border-bottom border-secondary py-2">Партнеры.Экскурсии</li>`
        flag = 1
    }
    
}
window.addEventListener('resize', function() {
    if (window.innerWidth <= 992) {
        menu.innerHTML = ``
        flag = 0
    } 
});

// Проверка состояния при загрузке страницы
// if (window.innerWidth <= 992) {
//     document.getElementById("menu").style.display = 'none';
// } else {
//     document.getElementById("menu").style.display = 'block';
// }

btnPage1.onclick = function(){
    btnPage1.style.backgroundColor = "#EDF3FF"
    btnPage1.style.color = "#235CC0"

    btnPage2.style.backgroundColor = "#0D40BF"
    btnPage2.style.color = "white"
    btnPage3.style.backgroundColor = "#0D40BF"
    btnPage3.style.color = "white"
    btnPage4.style.backgroundColor = "#0D40BF"
    btnPage4.style.color = "white"
    btnPage5.style.backgroundColor = "#0D40BF"
    btnPage5.style.color = "white"

    probsMenu.innerHTML = ''
    probsMenu.innerHTML = probsMenuHtml
}
btnPage2.onclick = function(){
    btnPage2.style.backgroundColor = "#EDF3FF"
    btnPage2.style.color = "#235CC0"

    btnPage1.style.backgroundColor = "#0D40BF"
    btnPage1.style.color = "white"
    btnPage3.style.backgroundColor = "#0D40BF"
    btnPage3.style.color = "white"
    btnPage4.style.backgroundColor = "#0D40BF"
    btnPage4.style.color = "white"
    btnPage5.style.backgroundColor = "#0D40BF"
    btnPage5.style.color = "white"


    probsMenu.innerHTML = ''
    probsMenu.innerHTML = probsMenuHtml
}
btnPage3.onclick = function(){
    btnPage3.style.backgroundColor = "#EDF3FF"
    btnPage3.style.color = "#235CC0"

    btnPage1.style.backgroundColor = "#0D40BF"
    btnPage1.style.color = "white"
    btnPage2.style.backgroundColor = "#0D40BF"
    btnPage2.style.color = "white"
    btnPage4.style.backgroundColor = "#0D40BF"
    btnPage4.style.color = "white"
    btnPage5.style.backgroundColor = "#0D40BF"
    btnPage5.style.color = "white"

    probsMenu.innerHTML = ''
    probsMenu.innerHTML = probsMenuHtml
}
btnPage4.onclick = function(){
    btnPage4.style.backgroundColor = "#EDF3FF"
    btnPage4.style.color = "#235CC0"

    btnPage1.style.backgroundColor = "#0D40BF"
    btnPage1.style.color = "white"
    btnPage2.style.backgroundColor = "#0D40BF"
    btnPage2.style.color = "white"
    btnPage3.style.backgroundColor = "#0D40BF"
    btnPage3.style.color = "white"
    btnPage5.style.backgroundColor = "#0D40BF"
    btnPage5.style.color = "white"

    probsMenu.innerHTML = ''
    probsMenu.innerHTML = probsMenuHtml
}
btnPage5.onclick = function(){
    btnPage5.style.backgroundColor = "#EDF3FF"
    btnPage5.style.color = "#235CC0"

    btnPage1.style.backgroundColor = "#0D40BF"
    btnPage1.style.color = "white"
    btnPage2.style.backgroundColor = "#0D40BF"
    btnPage2.style.color = "white"
    btnPage3.style.backgroundColor = "#0D40BF"
    btnPage3.style.color = "white"
    btnPage4.style.backgroundColor = "#0D40BF"
    btnPage4.style.color = "white"

    probsMenu.innerHTML = ''
    probsMenu.innerHTML = probsMenuHtml
}