$(function() {



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
        $(target.parentElement).css('border-bottom', '1px solid rgb(106, 79, 184)');
    }
}

function openLogin() {
    document.getElementById("login").style.height = "100%";
}

function closeLogin() {
    document.getElementById("login").style.height = "0%";
}