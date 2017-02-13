var filmModel = require("./filmModel");

var msgTxt=document.querySelector("#msg")
var filmList=document.querySelector("#film-list")
var searchBox=document.querySelector("#search")
var init = function(){
    searchBox.addEventListener("keyup",keyUpListener, false);
    msgTxt.innerHTML="";
    searchBox.value="";
    searchBox.focus();
}
var validate = function(str){
    if(str=="")
    {
        return false;
    }
    return true;
}
var keyUpListener = function(e)
{
    if(e.keyCode===13)
    {
        doSearch();
    }
}
var doSearch = function(){
    var searchTerm=searchBox.value;
    if(validate(searchTerm))
    {
        msgTxt.innerHTML="You entered "+searchTerm;
        var filteredFilms=filmModel.search(searchTerm.toLowerCase());
        outputFilms(filteredFilms);
    }
}
var outputFilms = function(films){
    var filmLis="";
    films.forEach(function(film){
        filmLis+="<li>"+film.title+"</li>";
    })
    filmList.innerHTML=filmLis;
}


init();