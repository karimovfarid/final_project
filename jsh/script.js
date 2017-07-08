$(".navLi li").hover(function() {
    width = $(this).width();
    left = $(this).position().left + 10;
    $(".redLine").css({ "width": width, "left": left });


});
$(".navLi li").mouseleave(function() {
    $(".redLine").css({ "width": "0", "left": "300px" });

});
$('.dot').click(function(e) {

    var value = $('.k[data-value="' + $(this).attr("data-ng-value") + '"]');
    value.toggleClass('active').siblings().removeClass('active');
    var valueActive = value.hasClass("active");
    e.preventDefault();
    if (valueActive) {
        $(".main").addClass("subActive");
    } else {
        $(".main").removeClass("subActive");


    }


});

$('.main').click(function(e) {
        if ($('.main').hasClass('subActive') && $('.k').hasClass("active")) {
            if (!e.target.closest('.active') && !e.target.closest('.flex')) {

                //console.log("sdms");
                $('.k').removeClass("active");
                $('.main').removeClass("subActive");

            }

        }
    })
    // SVg Map
var map = document.querySelector('#map');
var links = document.querySelectorAll('.svgMapLi a');
var paths = document.querySelectorAll('.svgMap a');

if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback)

    }
}

var activeArea = function(id) {
    document.querySelectorAll('.is-active').forEach(function(item) {
        item.classList.remove('is-active')
    })
    if (id !== undefined) {
        document.querySelector('#list-' + id).classList.add('is-active');
        document.querySelector('#AZ-' + id).classList.add('is-active');
        console.log($(".is-active")[1]);
    }
}
paths.forEach(function(path) {
    path.addEventListener('mouseenter', function(e) {

        var id = this.id.replace('AZ-', '')
        activeArea(id)


    })
})
links.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        var id = this.id.replace('list-', '')
        activeArea(id)
    })
})

document.addEventListener('mouseover', function() {
        activeArea();
    })
    // search
$('.upperSearch').click(function() {
    $('.searchButton').css({ "display": "block" });
    $('.upperSearch').css({ "width": "330px" });
})
var clics = 0;
$('.languageOpener').click(function() {

    var lang = $('.languageSection')
    lang.addClass("activeLanguage");
    if (lang.hasClass('activeLanguage')) {

        $(".main").addClass("subActive");
        clics++;
        //console.log(clics);
    }
    if (clics % 2 == 0) {
        lang.removeClass("activeLanguage");
        $(".main").removeClass("subActive");
        $('.nav').css({ "margin-top": "" });



    } else {
        var heightL = $(".activeLanguage").height();
        $('.nav').css({ "margin-top": heightL + 48 + "px" });
    }


});
$('.main').click(function(e) {
    if ($('.main').hasClass('subActive') && $('.languageSection').hasClass("activeLanguage")) {
        if (!e.target.closest('.activeLanguage') && !e.target.closest('.flex')) {

            //console.log("sdms");
            $('.nav').css({ "margin-top": "" });
            $('.languageSection').removeClass("activeLanguage");
            $('.main').removeClass("subActive");

        }

    }
})

//plugin
$(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            //  margin: 10,
            responsiveClass: true,
            autoHeight: true,

            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true,
                    loop: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        })
    })
    // inputHome
var clickk = false;
$(".inputClick").focusin(function(z) {
    clickk = true;
    var input = $('.inputClick').val();
    $('.inputLabel').css({ "top": "5px" });
    // if (input == '' && !z.target.closest('.r')) {
    //     $('.errorMessage').css({ "display": "block" });
    // }
    //console.log(e.target.parent());


})




// responsiveMenu
$(".menuRes").click(function() {
    var widthNav = $(".navBarLeft").width();
    $(".j").toggleClass("menuResButton");
    if ($(".j").hasClass("menuResButton")) {
        $(".navBarLeft").css({ "left": "0" });
        $(".navUpRes").css({ "left": widthNav });
    } else {
        $(".navBarLeft").css({ "left": "" });
        $(".navUpRes").css({ "left": "" });
    }
})

$(".inputClick").focusout(function(e) {

    var input = $('.inputClick').val();

    if (input == '' && e.target.closest('.r')) {
        $('.errorMessage').css({ "display": "block" });
        $('.inputLabel').css({ "top": "" });
        $('.submit').css({ "background": "#e4e4e4" });
    }
    //console.log(e.target.parent());


})