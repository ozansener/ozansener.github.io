/**
 * Profile Page Scripts
 */

//TEMP
    var imageURL = "assets/content/dummy/picture";
    var activeINDEX = 0;
    //var tempsizes = ["1500", "1400", "1280", "1024", "900", "800", "720", "600", "480", "360"];

//TEMP
function returnURL(indx)
{
    var twoDigits = ("0" + indx).slice(-2);
    return imageURL + twoDigits + ".jpg";
}

function loadOverlay(indx)
{
    $("#overlay").addClass("waiting");

    //var html = "<div class=\"picture\"><img src=" + returnURL(indx) +" alt=\"\" /></div>";

    /* For testing image loading
    var num1 = Math.floor((Math.random() * 10));
    var num2 = Math.floor((Math.random() * 10));

    var imgPath = "http://lorempixel.com/"+tempsizes[num1]+"/"+tempsizes[num2]+"/";*/

    var imgPath = returnURL(indx);

    var tempImage = new Image();
    tempImage.src = imgPath;

    tempImage.onload = function() {
        var html = "<div class=\"picture\"><img src=" + tempImage.src +" alt=\"\" /></div>";
        $("#overlay").removeClass("waiting");
        $('.overlay-item').html(html);

    };
}


/**---------------------- DOCUMENT READY ---------------------------------**/

$(document).ready(function() {

    $('#content-container').on('click', '.picture-item .picture', function() {
        $('.overlay-background').show();
        $('.overlay').show();

        var source = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
        var index = source.match(/\d+\./);
        activeINDEX = parseInt(index[index.length-1]);

        loadOverlay(activeINDEX);
    });

    $('.overlay-background').click(function() {
        $('.overlay-background').hide();
        $('.overlay').hide();
    });
});

$(".left-arrow").click(function() {
    //alert( "left pressed" );

    if (activeINDEX>1)
        activeINDEX--;

    loadOverlay(activeINDEX);
});

$(".right-arrow").click(function() {
    //alert( "right pressed" );

    if (activeINDEX<50)
        activeINDEX++;

    loadOverlay(activeINDEX);
});

$(document).keydown(function(e){
    if (e.which == 37) {
        //alert( "left pressed" );

        if (activeINDEX>1)
            activeINDEX--;

        loadOverlay(activeINDEX);

        return false;
    }
    else if (e.which == 39) {
        //alert( "right pressed" );

        if (activeINDEX<50)
            activeINDEX++;

        loadOverlay(activeINDEX);

        return false;
    }
    else if (e.which == 27) {
        //alert( "esc pressed" );

        $('.overlay-background').hide();
        $('.overlay').hide();

        return false;
    }
});
