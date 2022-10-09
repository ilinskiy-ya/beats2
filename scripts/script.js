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


//rewiews

const findBlockByAlias = (alias) => {
    return $(".reviews__display-inner").filter((ndx, item)=>{
        return $(item).attr("data-linked-with") == alias
    } );
};

$(".interectiv-avatar-link").click((e)=> {
    e.preventDefault();    

    const $this = $(e.currentTarget);
    const target= $this.attr ("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".interectiv-avatar");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass('active').siblings().removeClass('active');
});
