const fs = require("fs")
const bodyParser = require("body-parser")
const movieJSON = require('./movies.JSON')
const express = require('express')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const rawMovies = JSON.parse(fs.readFileSync('movies.JSON'));


//TODO: list all movies
app.get('/', (req, res) => {
    var movies = rawMovies
    var returnArray = []
    
    for (var movie in movies) {
        var movieData = movies[movie]
        var movieTitle = movieData.movieTitle
        var director = movieData.director
        var movieID = movieData.movieID
        var metaScore = movieData.metascore
        var boxOffice = movieData.boxOffice
        var website = movieData.website
        var imdbRating = movieData.imdbRating
        var imdbVotes = movieData.imdbVotes
        var runTime = movieData.runtime
        var language = movieData.language
        var rated = movieData.rated
        var production = movieData.production
        var released = movieData.released
        var imdbid = movieData.imdbid
        var plot = movieData.plot       
        var cast = movieData.actors
        var response = movieData.response
        var type = movieData.type
        var awards = movieData.awards       
        var dvd = movieData.dvd
        var poster = movieData.poster
        var country = movieData.country
        var genre = movieData.genre
        var writer = movieData.writer




        var movieObject = {
            "Movie ID: ":movieID, "Meta Score: ":metaScore, "Box Office Earnings: $":boxOffice, "Website: ":website,
            "IMDB Rating: ":imdbRating, "IMDB Votes: ":imdbVotes, "Runtime: ":runTime, "Language: ":language,
            "Rating: ":rated, "Production: ":production, "Released: ":released, "IMDB ID: ":imdbid, 
            "Plot: ":plot, "Director: ":director, "Movie Title: ":movieTitle, "Cast: ":cast,
            "Response: ":response, "Type: ":type, "Awards: ":awards, "Date to DVD: ":dvd,
            "Poster: ":poster, "Country: ":country, "Genre: ":genre, "Writer: ":writer
        }
        returnArray.push(movieObject) 
    }
    res.send(returnArray)
}
) 

app.get('/title', (req, res) => {
    var title = req.query.movieTitle.toLowerCase()
    var movies = rawMovies
    var newArray = []
    

    for (var movie in movies) {
        if (movies[movie].movieTitle.toLowerCase().includes(title))
        var movieData = movies[movie]
        var movieTitle = movieData.movieTitle
        var director = movieData.director
        var movieID = movieData.movieID
        var metaScore = movieData.metascore
        var boxOffice = movieData.boxOffice
        var website = movieData.website
        var imdbRating = movieData.imdbRating
        var imdbVotes = movieData.imdbVotes
        var runTime = movieData.runtime
        var language = movieData.language
        var rated = movieData.rated
        var production = movieData.production
        var released = movieData.released
        var imdbid = movieData.imdbid
        var plot = movieData.plot       
        var cast = movieData.actors
        var response = movieData.response
        var type = movieData.type
        var awards = movieData.awards       
        var dvd = movieData.dvd
        var poster = movieData.poster
        var country = movieData.country
        var genre = movieData.genre
        var writer = movieData.writer


            var movieObject = {
                "Movie ID: ":movieID, "Meta Score: ":metaScore, "Box Office Earnings: $":boxOffice, "Website: ":website,
                "IMDB Rating: ":imdbRating, "IMDB Votes: ":imdbVotes, "Runtime: ":runTime, "Language: ":language,
                "Rating: ":rated, "Production: ":production, "Released: ":released, "IMDB ID: ":imdbid, 
                "Plot: ":plot, "Director: ":director, "Movie Title: ":movieTitle, "Cast: ":cast,
                "Response: ":response, "Type: ":type, "Awards: ":awards, "Date to DVD: ":dvd,
                "Poster: ":poster, "Country: ":country, "Genre: ":genre, "Writer: ":writer
            }

            
            
            res.send(movieObject)
    }
    res.send(`Movie title ${movieTitle} Not Found`)    
})

app.post('/updatename', (req, res) => {
    var name = req.body.newName
    var id = req.body.id
    var songs = tsjson.results
    
    if (!name || !id) {
        res.send('Ensure format is "id": #####, "newArtist": ')
    } else {
        for (var song in songs) {
            if (songs[song].trackId.toString() === id.toString()) {
                songs[song].trackName = name
                res.send('Song updated!')
            }
        }
        res.send(`I'm broke! No id Found`)
    }
})
//     var movies = movieJSON.results
//     var returnArray = []
    
//     for (var movie in movies) {
//         var movieData=movies[movie]
//         var movieID = movieData.movieId
//         var artist = songData.artistName
//         var album = songData.collectionName
        
//         var movieObject = {"name":trackName, "artist":artist, "album":album }
//         returnArray.push(songObject) 
//     }
//    res.send(movies)
// }
// ) 




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
