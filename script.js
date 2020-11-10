$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    var y = document.getElementById('main');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
        y.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
        y.className = "main";
    }
})