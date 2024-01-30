const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

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

exports.create = (movieData) => Movie.create(movieData);

exports.attach = (movieId, castId) => {

  return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
  //TODO : validate if cast is already added

  // const movie = await this.getOne(movieId);

  // //TODO: validate castId
  // movie.casts.push(castId);

  // return movie.save();
}
