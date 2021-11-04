
let sliderImg = document.querySelector('.slider');
let controlItem1 = document.querySelector('#slider-ctl_one');
let controlItem2 = document.querySelector('#slider-ctl_two');
let controlItem3 = document.querySelector('#slider-ctl_three');
let controlItem4 = document.querySelector('#slider-ctl_fore');

controlItem2.addEventListener('click', () => {
    sliderImg.style.backgroundImage = "url('./image/kitchen.jpg')";
    controlItem2.classList.add('active');
    controlItem1.classList.remove('active');
    controlItem3.classList.remove('active');
    controlItem4.classList.remove('active');
});
controlItem1.addEventListener('click', () => {
    sliderImg.style.backgroundImage = "url('./image/slider_image1.jpg')";
    controlItem1.classList.add('active');
    controlItem2.classList.remove('active');
    controlItem3.classList.remove('active');
    controlItem4.classList.remove('active');
});
controlItem3.addEventListener('click', () => {
    sliderImg.style.backgroundImage = "url('./image/play_bg.jpg')";
    controlItem3.classList.add('active');

    controlItem2.classList.remove('active');
    controlItem1.classList.remove('active');
    controlItem4.classList.remove('active');
});

controlItem4.addEventListener('click', () => {
    sliderImg.style.backgroundImage = "url('./image/services_image1.jpg')";
    controlItem4.classList.add('active');

    controlItem2.classList.remove('active');
    controlItem1.classList.remove('active');
    controlItem3.classList.remove('active');
});


let show = document.getElementById("menu-right");
let btnShow  = document.getElementById("showBtn");
let btnHide = document.getElementById("hideBtn");
function showMenu() {
    show.style.display = 'block';
    btnShow.style.display = 'none';
    btnHide.style.display = 'block';
}
function closeMenu() {
    show.style.display = 'none';
    btnShow.style.display = 'block';
    btnHide.style.display = 'none';
}






