# Домашнее задание к занятию «Redux Toolkit»
===

### Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"

Ключи для API:

- 64405bd2
- 9713c5e7

Либо можно зарегистрировать свой ключ для API.

### Реализация

1. Созданы роуты для поиска фильма (главный роут), просмотра карточки фильма, избранного.
2. Реализованы компоненты для поиска, отображения найденных фильмов, карточки одного фильма с его описанием.
3. При вводе фильма в строку поиска отправляется запрос к API. Во время запроса показывается прелодер.
  После успешного получения ответа прелодер убирается, и показываются фильмы, если таковые были найдены. Если результат
  отрицательный, показывается плашка, что фильмы не найдены.
4. Любой из найденный фильмов можно добавить в "Избранное". При переключении на вкладку "Избранное"(звездочка в шапке страницы) показываются фильмы, которые были туда добавлены. Любой фильм можно удалить из "Избранного".

Пример ответа при поиске фильма:

```json
{
  "Search": [
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Terminator",
      "Year": "1984",
      "imdbID": "tt0088247",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Lady Terminator",
      "Year": "1989",
      "imdbID": "tt0095483",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ],
  "totalResults": "124",
  "Response": "True"
}
```

Пример ответа при запросе фильма по идентификатору:

```json
{
  "Title": "Terminator 2: Judgment Day",
  "Year": "1991",
  "Rated": "R",
  "Released": "03 Jul 1991",
  "Runtime": "137 min",
  "Genre": "Action, Sci-Fi",
  "Director": "James Cameron",
  "Writer": "James Cameron, William Wisher",
  "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
  "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.",
  "Language": "English, Spanish",
  "Country": "United States",
  "Awards": "Won 4 Oscars. 37 wins & 33 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "92%"
    },
    {
      "Source": "Metacritic",
      "Value": "75/100"
    }
  ],
  "Metascore": "75",
  "imdbRating": "8.6",
  "imdbVotes": "1,114,693",
  "imdbID": "tt0103064",
  "Type": "movie",
  "DVD": "13 Feb 2007",
  "BoxOffice": "$205,881,154",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```

### Особенности реализации

1. Поля, которые выводятся в карточке фильма:

+ постер фильма(Poster)
+ название фильма(Title)
+ год выпуска(Year)
+ жанр(Genre)
+ продолжительность(Runtime)
+ режиссер(Director)
+ актеры(Actors)
+ рейтинг фильма(imdbRating)

2. Задача реализована на TypeScript.

3. Асинхронные запросы к API реализованы через Redux Thunk. Чтобы ознакомиться с Redux Thunk, можно посмотреть [документацию](https://redux.js.org/usage/writing-logic-thunks), [Redux на github](https://github.com/reduxjs/redux-thunk).

4. Реализована настройка хранилища.

### Подсказки

<details>
<summary>Примеры запросов</summary>

1. `https://www.omdbapi.com?apikey=64405bd2&s=terminator` - запрос на поиск фильма
2. `https://www.omdbapi.com?apikey=64405bd2&i=tt0103064` - поиск фильма по id

</details>
  