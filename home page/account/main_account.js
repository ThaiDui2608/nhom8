
var images = [
    '../image/Slider/1.png',
    '../image/Slider/2.jpg',
    '../image/Slider/3.jpg',
    '../image/Slider/4.jpg',
    '../image/Slider/5.jpg'
];
var num = 0 ;
function next(){
    var slider = document.getElementById('slider');
    num ++ ;
    if(num >= images.length)
    {
        num = 0 ;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}
setInterval(function(){
    next();

},5000)

// Acount
const account = document.querySelector('.account');
const out = document.querySelector('.out-btn');
account.onclick = function(){
    if(out.style.display == 'none'){
        out.style.display = 'block';
    }
    else{
        out.style.display = 'none';
    }
}



