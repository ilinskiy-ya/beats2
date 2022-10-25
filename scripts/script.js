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

//team
const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();

    container.addClass("active")
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.team__content');
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("active");
    items.height(0); 
}

$(".team__title").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team");
    const elemContainer = $this.closest(".team__item");

    if(elemContainer.hasClass("active")) {
    closeEveryItem(container);
    } else {
    closeEveryItem(container);
    openItem($this);
    }    
});

//slider

/*$('.slider').bxSlider({
        pager: false,        
        ticker: false
});*/


  $(document).ready(function(){
    $('.slider').bxSlider({
        pager: false,        
        ticker: false
  });
  });

  //youtube

  let player;
 
function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "405",
   width: "660",
   videoId: "cXKYb7fl6zw",
   events: {
     //onReady: onPlayerReady,
     //onStateChange: onPlayerStateChange
   },
   playerVars: {
    controls: 1,
    disablekb: 1,
    showinfo: 0,
    rel: 0,
    autoplay: 0,
    modestbranding: 0
  }
 });
}