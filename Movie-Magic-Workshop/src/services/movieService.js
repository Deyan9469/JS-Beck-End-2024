const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.search = async (title, genre, year) => {
  let result = await Movie.find().lean();

  if (title) {
    result = result.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }

  if (genre) {
    result = result.filter(movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase());
  }

  if (year) {
    result = result.filter(movie => movie.year === year);
  }

  return result;
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
