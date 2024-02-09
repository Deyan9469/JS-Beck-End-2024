const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();

exports.search = (title, genre, year) => {
  let query = {};

  if (title) {
    query.title = new RegExp(title, 'i');
  }

  if (genre) {
    query.genre = genre.toLowerCase();
  }

  if (year) {
    query.year = year;
  }

  return Movie.find(query);
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData);

exports.attach = (movieId, castId) => {

  return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
  //TODO : validate if cast is already added

  // const movie = await this.getOne(movieId);

  // //TODO: validate castId
  // movie.casts.push(castId);

  // return movie.save();
}

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);
