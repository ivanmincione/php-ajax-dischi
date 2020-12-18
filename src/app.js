$(document).ready(function() {

    const source = $("#box-template").html();
    const template = Handlebars.compile(source);

    if($("#version-ajax").length) {
        $.ajax({
            url: "../db.php",
            method: 'GET',
            success: function(item) {
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
                    $(".box-card").append(html);
                    // variabile per il genere corrente
                    var currentGenre = item[i].genre;
                    // se non è già incluso allora lo inserisco nell'array
                    if (!genres.includes(currentGenre)) {
                        genres.push(currentGenre);
                    }
                }// end for degli item

                // scorro l'array con i vari generi e li stampo nelle option
                for (var i = 0; i < genres.length; i++) {
                    $("#filter-genre").append(`
                            <option value="${genres[i]}">
                                ${genres[i]}
                            </option>`);
                }

            }, //end succes reply
            error: function() {
                alert("Si è verificato un errore");
            }
        //end ajax
        });
    }//end if


    // intercetto il cambio di genere nella select
    $('#filter-genre').change(function() {
        // svuoto il contenitore
        $('.box-card').empty();

        // recupero il value del genere selezionato
        var selected_genre = $(this).val();

        // faccio una chiamata ajax inviando al server il genere selezionato
        $.ajax({
            url: '../db.php',
            method: 'GET',
            data: {
                genre: selected_genre
            },
            success: function(item) {

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
            error: function() {
                alert('Si è verificato un errore');
            }
        });
    });

// end ready
});
