//since we don't have a database we'll use our front end models at the moment
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const films = getFilms();
const express = require('express');
const filmRouter = new express.Router();


filmRouter.get('/', function(req, res){
  res.json(films);
});

filmRouter.get('/:id', function(req, res){
  const selectedFilm = films[req.params.id];
  res.json({film: selectedFilm});
});


filmRouter.post('/', function(req, res) {
  const newFilm = req.body.film;
  films.push(newFilm);
  res.json(films);
});

filmRouter.put('/:id', function(req, res) {
    films[req.params.id] = req.body.film;
    res.json(films);
})

filmRouter.delete('/:id', function(req, res){
  const indexToRemove = req.params.id;
  films.splice(indexToRemove, 1);
  res.json(films);
})

module.exports = filmRouter;
