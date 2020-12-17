$(document).ready(function() {

    const source = $("#box-template").html();
    const template = Handlebars.compile(source);

    $.ajax({
        url: "db-ajax.php",
        method: 'GET',
        success: function(item) {

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
            }
        //end succes reply
        },
        error: function() {
            console.log("Si è verificato un errore");
        }
    //end ajax
    });
// end ready
});
