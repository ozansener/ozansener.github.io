var prefix = "assets/layouts/";

var pageData;

var activeSection = "";

function loadSection(sectionName)
{
    if(activeSection != "") {
        $('#button-' + activeSection).toggleClass('active');
    }

    $('#content-container').load(prefix + pageData['content'][sectionName]);

    //$('#' + activeSection).fadeOut();
    //$('#' + sectionName).fadeIn();

    activeSection = sectionName;
}


function loadHeaderSection() {
    $("#navigation-section").load(prefix + pageData['header']);
}

function loadInformationSection() {
    $("#information-section").load(prefix + pageData['information']);
}

function loadContentSection() {
    loadSection(pageData['content']['default']);
}

$("#information-section").on('click', '.submenu-item', function(evn) {
    evn.preventDefault();

    $(this).toggleClass('active');

    var id = $(this).attr('id');
    var res = id.replace("button-", "");

    loadSection(res);

    return false;
});

$(document).ready(function() {

    var pageID = $('body').attr('id');

    $.getJSON( "content.json", function( data ) {
        pageData = data[pageID];
    }).done(function() {

        loadHeaderSection();
        loadInformationSection();
        loadContentSection();

    });

    /**
     *  Fading and changing position of basic
     *  information on left side. Depends on
     *  scroll amount on Y-axis.
     */

    var textToFade;
    $(document).scroll(function() { //Scroll start.

        textToFade = $("#fixedinfo .additional");
        var scrollY = $(window).scrollTop();

        if (scrollY > 160) {
            textToFade.css('opacity', 1);
            textToFade.css('top', 140);
        }
        else {
            textToFade.css('opacity', scrollY / 160);
            textToFade.css('top', 300 - scrollY);
        }

    }); //Scroll end.

});