$(document).ready(function () {
    $("ul.menu li.menu-item a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("data");
        $.smoothScroll({ scrollTarget: 'div#' + id });
    })

    $('#totopicon').gototop();
    $('.grayscale').gray();
    $('.grayscale').hover(function () {
        $(this).toggleClass('grayscale-off');
        $(this).gray();
    })

})