let timeInteval = 8000;
var index =0;

function slideshow(){

var imges = document.querySelectorAll(".slid img");
console.log(imges)
    imges.forEach(function(img,idx){
        img.style.display = 'none'
    });

  imges[index].style.display ='block';

    index = (index + 1) % imges.length;
}

window.onload= function(){
    setInterval(slideshow , timeInteval);
slideshow();
};

