const express = require('express')
const app = express()
const router = express.Router()
const movieController = require('../controllers/movie.controller')

// router.get('/movies',(req,res)=>{
//     res.json('All Movies Data in JSON format from Mongo DB')
// })
// router.get('/movies',  moviecontroller.findAllMovies)
// router.get('/movies?status=RELEASED', moviecontroller.findAllMovies)
// router.get('/movies?status=PUBLISHED', moviecontroller.findAllMovies)
// router.get('/movies/{id}', moviecontroller.findOne)
// router.get('movies/{movieid}/shows', moviecontroller.findShows)
// router.get('GET/movies?status=RELEASED& title={title}&genres={genres}&artists={artists}& start_date={startdate}&end_date={enddate}',moviecontroller.getMovies)
router.get('/movies', movieController.findAllMovies);
router.get('/movies/:movieId', movieController.findOne);
router.get('/movies/:movieId/shows', movieController.findShows);


module.exports = router