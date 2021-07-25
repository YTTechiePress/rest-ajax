// http://youtube.local/wp-json/techiepress/rest-ajax

// techiepress-text

jQuery(document).ready(function($){
    $.ajax({
        url: '/wp-json/techiepress/rest-ajax'
    }).done(function(data) {
        // console.log(data[0].title);

        data.forEach(block => {
            $('#techiepress-text').append( '<p id=' + block.id + '">' + block.title + '</p>' );
        });
        
    });
});