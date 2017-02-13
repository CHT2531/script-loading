#Script Loading

* Open index.html in a browser
* Have a look at the JavaScript files. The application has been structured using modules.

We are going to re-write this application so that is uses the webpack to bundle our modules

##Installing Webpack
First we need to install webpack 
* Open a nodejs command prompt and enter the following 

```
npm install webpack@v1.13 -g 
```  

We have to use Version 1 because of the node version installed at the university 

##Re-writing the modules to use a CommonJS style 
* Re-write filmModel.js and filmSearchApp.js so that they use the CommonJS style of module definition (https://webpack.github.io/docs/commonjs.html).

Here's filmModel.js
```
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


module.exports = {search:search};
```

Here's filmSearchApp.js
```
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
```

##Compile the Modules 
Enter the following to compile into a single JavaScript file
```
webpack js/filmSearchApp.js bundle.js
```
* Open budle.js in a text editor. 
* Make changes to index.html so that it loads bundle.js instead of filmModel.js and filmsSearchApp.js

There is a lot more to webpack see - http://webpack.github.io/



