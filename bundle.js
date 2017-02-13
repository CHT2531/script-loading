/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var filmModel = __webpack_require__(1);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

	
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

/***/ }
/******/ ]);