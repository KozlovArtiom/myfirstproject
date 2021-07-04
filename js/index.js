const numberOfFilms = prompt('Сколько фильмов Вы уже просмотрели?', '');
// формирование объекта для заполнения
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = 
  prompt('Назовите один из последних, просмотренных Вами фильмов', '');
const rating1 = prompt(`Оцените фильм ${lastFilm1} по 10-ти бальной шкале`, '');

const lastFilm2 = 
  prompt('Назовите один из последних, просмотренных Вами фильмов', '');
const rating2 = prompt(`Оцените фильм ${lastFilm2} по 10-ти бальной шкале`, '');

// запись результатов опроса в объект

personalMovieDB.movies[lastFilm1] = rating1;
personalMovieDB.movies[lastFilm2] = rating2;