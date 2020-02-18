var movies = [
    {
        title: 'Gladiator',
        hasWatched: true,
        ratings: 5
    },
    {
        title: 'Hobbit',
        hasWatched: false,
        ratings: 4.5
    },
    {
        title: 'Avatar',
        hasWatched: true,
        ratings: 3.5
    }
]
/*
movies.forEach(function(movie){
    var result = 'You have '
    if(movie.hasWatched){
        result += 'Watched '
    } else {
        result += 'Not seen '
    }
    result += '\'' + movie.title + '\' - '
    result += movie.ratings + ' ' + 'stars'
    console.log(result)
})
*/
function buildString(movie){
    var result = 'You have '
    if (movie.hasWatched) {
        result += 'Watched '
    } else {
        result += 'Not seen '
    }
    result += '\'' + movie.title + '\' - '
    result += movie.ratings + ' ' + 'stars'
    return result
}
movies.forEach(function(movie){
    console.log(buildString(movie))
})

