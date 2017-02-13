var filmModel=(function(){
    var films=[
        {title:"No Country for Old Men",year:2007},
        {title:"Jaws",year:1975},
        {title:"Winter's Bone",year:2010},
        {title:"Back to the Future",year:1985}
    ]
    var search=function(searchTerm)
    {

        var matchingFilms = films.filter(function(film){
            return film.title.toLowerCase().search(searchTerm)!==-1
        });
        return matchingFilms;
    }
    return {
        search:search
    }
})();
console.log(filmModel.search("e"));
console.log(filmModel.films);

// console.log(filmModel.search("e"));
// console.log(filmModel.films);
