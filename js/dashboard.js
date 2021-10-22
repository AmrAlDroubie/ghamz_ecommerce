// Dashboard right list

// hide list dropdowm
$(".dashboard-list-content").css("display", "none");
$(".dashboard-right-list a").children("i").css("transition", "transform 300ms");
// open onclick
$(".dashboard-right-list a").on("click", function (e) {
  e.preventDefault();
  $(this).siblings("ul").slideToggle(300);
  $(this).children("i").toggleClass("rotate-90");
  $(this).parent().siblings("li").children("ul").slideUp(300);
  $(this)
    .parent()
    .siblings("li")
    .children("a")
    .children("i")
    .removeClass("rotate-90");
});

 // open fixed menu
 document.querySelector('.open-menu').addEventListener("click", function () {
    document.querySelector(".dashboard-right").classList.toggle('active')
    if(document.querySelector(".dashboard-right").classList.contains('active')){
        document.querySelector('body').style.overflowY = 'hidden'
    }else{
        document.querySelector('body').style.overflowY = 'auto'
    }
})

$(document).click(function(e){
    if(e.target.closest('#dashboard-right') == null && 
    e.target.closest("#open-menu") == null && 
    $("#dashboard-right").hasClass("active")){
        $('#dashboard-right').removeClass('active')
    }
  
})


