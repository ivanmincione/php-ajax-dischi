/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var source = $("#box-template").html();
  var template = Handlebars.compile(source);

  if ($("#version-ajax").length) {
    $.ajax({
      url: "../db.php",
      method: 'GET',
      success: function success(item) {
        //array per la lista dei generi
        var genres = [];

        for (var i = 0; i < item.length; i++) {
          var context = {
            poster: item[i].poster,
            title: item[i].title,
            author: item[i].author,
            genre: item[i].genre,
            year: item[i].year
          };
          var html = template(context);
          $(".box-card").append(html); // variabile per il genere corrente

          var currentGenre = item[i].genre; // se non è già incluso allora lo inserisco nell'array

          if (!genres.includes(currentGenre)) {
            genres.push(currentGenre);
          }
        } // end for degli item
        // scorro l'array con i vari generi e li stampo nelle option


        for (var i = 0; i < genres.length; i++) {
          $("#filter-genre").append("\n                            <option value=\"".concat(genres[i], "\">\n                                ").concat(genres[i], "\n                            </option>"));
        }
      },
      //end succes reply
      error: function error() {
        alert("Si è verificato un errore");
      } //end ajax

    });
  } //end if
  // intercetto il cambio di genere nella select


  $('#filter-genre').change(function () {
    // svuoto il contenitore
    $('.box-card').empty(); // recupero il value del genere selezionato

    var selected_genre = $(this).val(); // faccio una chiamata ajax inviando al server il genere selezionato

    $.ajax({
      url: '../db.php',
      method: 'GET',
      data: {
        genre: selected_genre
      },
      success: function success(item) {
        for (var i = 0; i < item.length; i++) {
          var context = {
            'poster': item[i].poster,
            'title': item[i].title,
            'author': item[i].author,
            'year': item[i].year
          };
          var html = template(context);
          $('.box-card').append(html);
        }
      },
      error: function error() {
        alert('Si è verificato un errore');
      }
    });
  }); // end ready
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\Esercizi\php-ajax-dischi\src\app.js */"./src/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\Esercizi\php-ajax-dischi\src\app.scss */"./src/app.scss");


/***/ })

/******/ });