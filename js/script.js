/// variables////
const win = $(window);
const html_body = $('html, body');
const stk = $('.st-menu');
const b2b = $('.back-to-top i');
const c_stk = 'sticky';
const bdy = $('body');


//stiky-header//
win.scroll(() => win.scrollTop() > 300 ? stk.addClass(c_stk) : stk.removeClass(c_stk));
// scroolpy
bdy.scrollspy({
    target: '.navbar',
    offset: 100
});

// animation scroll js
$('a').on('click', function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 150
            }, 1500);
            return false;
        }

    }
});

//back to top fadetoogle//
win.scroll(() => win.scrollTop() > 100 ? b2b.fadeIn() + b2b.addClass('animate__animated animate__flip animate__slower 2s') : b2b.fadeOut());
//back to top effect//
b2b.click(() => html_body.animate({scrollTop: 0}, 2500));


/* always close responsive nav after click */
$('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());