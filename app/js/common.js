$( document ).ready(function() {

    communityHover();

    chosen();
});

$(".questions__item-link").click(function (event) {
    var target = $(event.target)[0];
    replacePlus(target);
    $(event.target).next().slideToggle('slow');
});

$(".questions__item-header").click(function (event) {
    var target = $(event.target).next()[0];
    replacePlus(target);
    $(event.target).next().next().slideToggle('slow');
});

function replacePlus (target) {
    var plus = target.innerText;
    if (plus != '-') {
        target.innerText = '-';
        $(target.parentElement).css('border-bottom', 'none');
    } else {
        target.innerText = '+';
        $(target.parentElement).css('border-bottom', '1px dotted rgb(106, 79, 184)');
    }
}

function openLogin() {
    document.getElementById("login").style.height = "100%";
}

function closeLogin() {
    document.getElementById("login").style.height = "0%";
}


function communityHover() {
    $(".community__images").hover(function(){
        var community = $('.community');
        community.find($('.community__images-link--active')).removeClass('community__images-link--active');
        community.find($('.community__images--active')).removeClass('community__images--active');

        $(this).find($('.community__images-link')).addClass('community__images-link--active');
        $(this).children().eq(1).addClass('community__images--active');

    }, function(){
        $(this).find($('.community__images-link')).removeClass('community__images-link--active');
        $(this).children().eq(1).removeClass('community__images--active')
    });
}

function chosen() {

    $("#chose__target").chosen({
        no_results_text: "No results match",
        placeholder_text_multiple: "Type",
        // max_selected_options: 10,
        width: "100%"
    }).change(
        function () {
            var widths;
            widths = $.map($('.search-choice'), function (e) {
                return $(e).outerWidth();
            });
            var sumWidth = 0;
            for (var key in widths) {
                if (sumWidth >= ($('.chosen-choices').width()-150)) {
                    sumWidth = widths[key]
                } else {
                    sumWidth += (widths[key] + 20)
                }
            }
            $('.search-field').width('200px');
            var chosenDrop = $('.chosen-drop');
            chosenDrop.width('200px');
            chosenDrop.css('left', sumWidth);
        }
    );

}