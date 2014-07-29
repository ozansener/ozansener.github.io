/**
 * Image Import Scripts
 */

/**---------------------- DOCUMENT READY ---------------------------------**/


$(document).ready(function() {


    var container = document.getElementById('thumbnail-container'),
        dragdroparea = document.getElementById('area-filedrop'),
        acceptedTypes = {
            'image/png': true,
            'image/jpeg': true
        },
        tests = {
            filereader: typeof FileReader != 'undefined',
            dnd: 'draggable' in document.createElement('span'),
            formdata: !!window.FormData
        };


    if (tests["filereader"] === false) {
        alert("FileReader Test: fail");
    }

    function previewfile(file) {
        if (tests["filereader"] === true && acceptedTypes[file.type] === true) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var image = document.createElement("div");
                image.className = "image";
                image.style.background = "url(" + event.target.result + ") no-repeat top center";
                image.style.backgroundSize = "cover";
                container.appendChild(image);
            };

            reader.readAsDataURL(file);
        }  else {
            alert("File is not an image");
        }
    }

    function readfiles(files) {
        debugger;
        var formData = tests.formdata ? new FormData() : null;
        for (var i = 0; i < files.length; i++) {
            if (tests.formdata) formData.append('file', files[i]);
            previewfile(files[i]);
        }
    }

    dragdroparea.ondragover = function () { return false; };
    dragdroparea.ondragend = function () { return false; };
    dragdroparea.ondrop = function (e) {
        e.preventDefault();
        readfiles(e.dataTransfer.files);
    }


});