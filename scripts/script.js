//popup
const openPopUp = document.getElementById('open__popup');
const closePopUp = document.getElementById('popup__close');
const popUp = document.getElementById('popup');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click',() => {
    popUp.classList.remove('active');
})

