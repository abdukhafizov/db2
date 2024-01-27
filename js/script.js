/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


//1
let promo__adv_elements = document.querySelectorAll(".promo__adv img");
let promo__title = document.querySelector(".promo__title")
let promo__descr = document.querySelector(".promo__descr")

promo__adv_elements.forEach(adv => {
    adv.remove();
});
//2
let promo__genre = document.querySelector(".promo__genre")
promo__genre.innerHTML = "Драма"

//3
let promo__bg = document.querySelector(".promo__bg");

promo__bg.style.backgroundImage = "url('../img/bg.jpg')";
//4
//a
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo__interactive_list = document.querySelector(".promo__interactive-list");
const promoBg = document.querySelector(".promo__bg")
let imd = document.querySelector(".imd")
let kp = document.querySelector(".kp")

function reload() {
    promo__interactive_list.innerHTML = ""

    for (let item of movies) {
        let idx = movies.indexOf(item)
        let li = document.createElement("li");
        let del = document.createElement("div");

        li.classList.add("promo__interactive-item");
        del.classList.add("delete");

        li.textContent = `${idx + 1}. ${item.Title}`;

        promo__interactive_list.append(li);
        li.append(del);


        //func
        del.onclick = () => {
            movies.splice(idx, 1)
            reload()
        }

        li.onclick = () => {
            promoBg.style.background = `url(${item.Poster})`;
            promoBg.style.backgroundRepeat = 'no-repeat';
            promoBg.style.backgroundPosition = 'center/cover';
            promo__genre.innerHTML = item.Genre
            promo__title.innerHTML = item.Title
            promo__descr.innerHTML = item.Plot
            imd.innerHTML = `${"IMDb:"} ${item.imdbRating}`
            kp.innerHTML = `${"Кинопоиск:"} ${item.imdbRating}`
        }

    }
}

reload()

{/* <li class="promo__interactive-item">ЛОГАН
                            <div class="delete"></div>
                        </li> */}