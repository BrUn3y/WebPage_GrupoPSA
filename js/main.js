$(document).ready(function () {

    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');

    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#cartoonVideo").attr('src', '');

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#myModal").on('shown.bs.modal', function () {
        $("#cartoonVideo").attr('src', url);
    });

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function () {
        $("#cartoonVideo").attr('src', '');
    });

    var retrievedObject = localStorage.getItem('sections');

    if (retrievedObject != null) {
        $("html, body").animate({
            scrollTop: $('#' + retrievedObject).offset().top
        }, 1000);
        localStorage.clear();
    }


});

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function setSection(section) {
    localStorage.setItem('sections', section);
}