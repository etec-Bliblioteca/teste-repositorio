let slideIdx = 1;
showSlide(slideIdx);

function pluSlide(n){
    showSlide(slideIdx += n);
}

function cerSlide(n){
    showSlide(slideIdx = n);
}

function showSlide(n){
    let i;
    let slide = document.getElementsByClassName('slide-cont');
    let dot = document.getElementsByClassName('dot');
    if(n > slide.length){slideIdx = 1};
    if(n < 1){slideIdx = slide.length}
    for(i = 0;i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for(i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slide[slideIdx - 1].style.display = "block";
    dot[slideIdx - 1].className += " active";
}
