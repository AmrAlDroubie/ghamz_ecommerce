// Start navbar
const body = document.querySelector("body");
let nav = document.createElement("nav");
nav.innerHTML = ` <nav class='navbar navbar-expand-xl'>
<div class="container p-1">
    <a href="./index.html" class="navbar-brand"><img src="images/logo.svg" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" >
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav text-center align-items-center">
            <li class="nav-item"><a href="./aboutus.html" class="nav-link">من نحن</a></li>
            <li class="nav-item"><a href="./contactus.html" class="nav-link">اتصل بنا</a></li>
            <li class="nav-item"><a href="./store.html" class="nav-link">المتجر</a></li>
            <li class="nav-item"><a href="#" class="nav-link">الحلول</a></li>
        </ul>
        <form class="d-flex nav-search text-center">
            <button type="submit"><i class="fas fa-search"></i></button>
            <input class="form-control me-2" type="search" placeholder="ابحث عن طلبك" aria-label="Search">
        </form>
        <ul class='navbar-nav ms-auto text-center align-items-xl-center'>

            <li class="nav-item"><a href="#" class="nav-link nav-lang">En</a></li> 
            <li class="nav-item"><a href="./login.html" class="nav-link">تسجيل الدخول</a></li> 
            <li class="nav-item"><a href="./newuser.html" class="nav-link new-user">مستخدم جديد</a></li> 
            <div class='d-flex my-3'>
                <li class="nav-item w-50"><a href="#" class="nav-link nav-icon"><i class="far fa-shopping-bag"></i><span>1</span></a></li> 
                <li class="nav-item w-50">
                <a href="./shoppingcart.html" class="nav-link nav-icon">
                <i class="fas fa-shopping-cart"></i>
                <span>1</span>
                </a>
                </li> 
            </div>
           
        </ul>
       
    </div>    
</div>

</nav>`;
body.prepend(nav);

// End navbar

// Start footer
const footer = document.createElement('footer');
footer.innerHTML = ` 
<!-- Start footer -->


    <div class="footer-signment text-center text-white">
        <div class="container">
            <p class="h2">سجل الان</p>
            <p class="h4">في متجر غمز</p>
            <div class="footer-signment-btns">
                <a href="./login.html" >تسجيل الدخول</a>
                <a href="./newuser.html" >مستخدم جديد</a>
            </div>
        </div>
    </div>

    <div class="footer-content">
        <div class="container">
            <div class="row justify-content-lg-evenly justify-content-start align-items-center">
                <div class="col-lg-3 col-12">
                    <div class="payment-option">
                        <p class="h4">وسائل الدفع</p>
                        <img src="images/payment_option.svg" alt="payment-option">
                        <ul>
                            <li><a href="./return_policy.html">سياسة الاسترجاع والاستبدال</a></li>
                            <li><a href="./privacy.html">سياسة الاستخدام</a></li>
                            <li><a href="#">التسويق لموقعنا</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-12">
                    <div class="popular-questions">
                        <ul>
                            <li><a href="">الأسئلة الشائعة</a></li>
                            <li><a href="./store.html">تصفح جميع المنتجات</a></li>
                            <li><a href="#">تعرف على اخر عروضنا</a></li>
                            <li><a href="./contactus.html">تواصل معنا</a></li>
                            <li><a href="./aboutus.html">من نحن</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5 col-12">
                    <div class="footer-partners">
                        <a href="#"><img src="images/follow_us1.svg" alt=""></a>
                        <a href="#"><img src="images/follow_us2.svg" alt=""></a>
                        <a href="#"><img src="images/follow_us3.svg" alt=""></a>
                        <ul>
                            <li><a href="#">
                                    <i class='fas fa-briefcase'></i><span>مؤسسة غمز للتجارة</span>
                                </a></li>
                            <li><a href="#">
                                    <i class='fas fa-phone'></i><span>+966 11 2200 888</span>
                                </a></li>
                            <li><a href="#">
                                    <i class='fas fa-map-marker-alt'></i>
                                    <span>
                                        طريق الملك فهد (الخدمة)، مقابل المستشفي السعودي الالماني
                                        حي الملقا , الرياض , المملكة العربية السعودية
                                    </span>
                                </a></li>
                            <li class='follow-us'>
                                <span> تابعنا على: </span>
                                <ul >
                                    <li><a href="#"><i class='fab fa-youtube'></i></a></li>
                                    <li><a href="#"><i class='fab fa-facebook'></i></a></li>
                                    <li><a href="#"><i class='fab fa-twitter'></i></a></li>
                                    <li><a href="#"><i class='fab fa-linkedin'></i></a></li>
                                    <li><a href="#"><i class='fab fa-whatsapp'></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='footer-copyright'><span> شركة وساطة © 2021 </span></div>

<!-- End footer -->
`;
body.append(footer);
nav.innerHTML = null;

// End footer

// equal boxes in privacy

let n = 0;
let ele = document.querySelectorAll(".data-user-box");

for (let i = 0; i < ele.length; i += 2) {
  if (ele[i].offsetHeight >= ele[i + 1].offsetHeight) {
    ele[i + 1].style.height = ele[i].offsetHeight + "px";
  } else {
    ele[i].style.height = ele[i + 1].offsetHeight + "px";
  }
}

// End equal boxes


// home page add background image to products boxes
try{
    const boxes = document.querySelectorAll(".products-box");
    boxes[0].style.backgroundImage = 'url(' + boxes[0].getAttribute('data-background-link') + ')';
    boxes[1].style.backgroundImage = 'url(' + boxes[1].getAttribute('data-background-link') + ')';
    boxes[2].style.backgroundImage = 'url(' + boxes[2].getAttribute('data-background-link') + ')';
    boxes[3].style.backgroundImage ='url(' + boxes[3].getAttribute('data-background-link') + ')';
}catch{}
 



// complete account info box
$(".complete-account-info button").click(function(e){
        e.preventDefault();
        if($("body").css("direction") == 'rtl'){
        $(this).parent().toggleClass("complete-account-info-active");
        if($(this).parent().hasClass("complete-account-info-active")){
         $(this).parent().animate({
             right:0
         },500)
        }
        else{
             $(this).parent().animate({
             right: '-'  + $(this).parent().innerWidth() - 5 + 'px'
         },500)
        }
    }else{
        $(this).parent().toggleClass("complete-account-info-active");
        if($(this).parent().hasClass("complete-account-info-active")){
         $(this).parent().animate({
             left:0
         },500)
        }
        else{
             $(this).parent().animate({
             left: '-'  + $(this).parent().innerWidth() - 5 + 'px'
         },500)
        }
    }
  
})

$(".all-sections button , .products-brand button , .offers-products button").on('click', function (e){
    e.preventDefault();
})

nav.innerHTML=null;
footer.innerHTML = null;