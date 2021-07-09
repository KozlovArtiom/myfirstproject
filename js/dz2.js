'use strict';

let numberOfFilms;
numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
// формирование объекта для заполнения
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
      console.log('Вы классический зритель!');
    } else if (personalMovieDB >= 30) {
      console.log('Очень похвально, Вы - киноман!!!');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres(objJanres) {
    for (let i = 1; i <= 3; i++) {
      const src = prompt(`Введите ваш любимый жанр под номером ${i}`);
      if (src === null || src == '') {
        i--;
      } else {
        objJanres[i - 1] = src;
      }
    }
    if (objJanres.length >= 3) {
      objJanres.forEach((element, index) => {
        console.log(`Любимый жанр #${index} - ${element}`);
      });
    }
  },
  toggleVisibleMyDB: function(privatValue) {
    if (privatValue === false) {
      privatValue = true;
    } else {
      privatValue = false;
    }
    return privatValue;
  }
};
//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.writeYourGenres(personalMovieDB.genres);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
// personalMovieDB.showMyDB();
