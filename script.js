$('#menu-checkbox').on('click', function () {
    var x = document.getElementById('logo');
    if ( $(this).is(':checked') ) {
        x.className += " invisible";
    } else {
        // checkbox unchecked 
        x.className = "logo";
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
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    })
}