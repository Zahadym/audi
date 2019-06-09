$(document).ready(function(){

    $('#next-link-id').on("click", function(event){
        $('#hidden__car').addClass('active').slideDown();
        $(this).remove();
    });

    $('.callback').on("click", function(event){
        $('#section__form').show();
    });
});


function off() {
    document.getElementById("section__form").style.display = "none";
}