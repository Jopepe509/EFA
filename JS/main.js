function whatsapp() {
    document.getElementById("whats")
    alert("O nosso Whatsapp é (11) 98399-8381")
}

var slider_img = document.querySelector('.slider-img');
var IMG =['slide1.png', 'slide2.png', 'slide3.png', 'logo_efa.png'];
var i = 0;

function prev() {
    if(i <= 0) i = IMG.length;
    i--;
    return setImg();
}

function next() {
    if(i >= IMG.length-1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'IMG/' + IMG[i]);
}
$('autoplay') .slick({
    slidesToshow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20,
});