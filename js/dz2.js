'use strict';

let numberOfFilms

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
  }
}

start();

// формирование объекта для заполнения
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  let lastWatchingFilms = prompt('Сколько фильмов Вы недавно просмотрели?', '');
  for (lastWatchingFilms; lastWatchingFilms > 0; lastWatchingFilms--) {
    const lastFilm = prompt('Назовите один из последних, просмотренных Вами фильмов', '');
    const rating = prompt(`Оцените фильм ${lastFilm} по 10-ти бальной шкале`, '');

    if (lastFilm != '' && rating != '' && lastFilm != null && rating != null && lastFilm.length < 50) {
      personalMovieDB.movies[lastFilm] = rating;
    } else {
      console.log('error');
      lastWatchingFilms++;
    }
  }
}
/*
const lastFilm1 = 
  prompt('Назовите один из последних, просмотренных Вами фильмов', '');
const rating1 = prompt(`Оцените фильм ${lastFilm1} по 10-ти бальной шкале`, '');

const lastFilm2 = 
  prompt('Назовите один из последних, просмотренных Вами фильмов', '');
const rating2 = prompt(`Оцените фильм ${lastFilm2} по 10-ти бальной шкале`, '');
*/

// запись результатов опроса в объект

/*
personalMovieDB.movies[lastFilm1] = rating1;
personalMovieDB.movies[lastFilm2] = rating2;
*/
rememberMyFilms();

// Определение степени киномана
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель!');
  } else if (personalMovieDB >= 30) {
    console.log('Очень похвально, Вы - киноман!!!');
  } else {
    console.log('Произошла ошибка');
  }
}

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB()

function writeYourGenres(objJanres) {
  for (let i = 1; i <= 3; i++) {
    objJanres[i - 1] = prompt(`Введите ваш любимый жанр под номером ${i}`);
  }
  for (let i = 0; i < 3; i++) {
    console.log(objJanres[i]);
  }
}
writeYourGenres(personalMovieDB.genres);