$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    var y = document.getElementById('main');
    var z = document.getElementById('footer-navig');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
        y.className += " invisible";
        z.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
        y.className = "main";
        z.className = "footer-nav disabled";
    }
})

var abc = document.getElementById('footer-navig');
if($(window).width() <= 420) {
    abc.className += " disabled";
} else {
    abc.className = "footer-nav";
};

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        var y = document.getElementById('main');
        var z = document.getElementById('footer-navig');
        y.className -= " invisible";
        z.className = "footer-nav disabled";
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    })
}