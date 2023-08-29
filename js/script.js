//---------------- This is for Off-Canvas Menu------------------------ 
const hamburgerMenuBtn = document.querySelector("#hamburger-menu");
const accordion = document.querySelector("#main-accordion");
const overlay = document.querySelector(".overlay");
const offCanvasCloseArrow = document.querySelector("#backArrow");

hamburgerMenuBtn.addEventListener("click", function () {
    accordion.classList.toggle("open");
    overlay.classList.toggle("open");
});
overlay.addEventListener("click", function () {
    accordion.classList.remove("open");
    overlay.classList.remove("open");
    login_offcanvas.classList.remove('open');
    cart_offcanvas.classList.remove('open');
});
offCanvasCloseArrow.addEventListener("click", function () {
    accordion.classList.remove("open");
    overlay.classList.remove("open");
});


//---------------- This is for Off-Canvas LogIn/Register Menu------------------------ 
const offCanvasOpen = document.querySelector("#offCanvasOpen");
const cartoffCanvasOpen = document.querySelector("#shopping-cart");
const cartoffCanvasClose = document.querySelector("#cartoffCanvasClose");
const offCanvasClose = document.querySelector("#offCanvasClose");
const login_offcanvas = document.querySelector(".login-offcanvas");
const cart_offcanvas = document.querySelector(".cart-offcanvas");
offCanvasOpen.addEventListener('click', () => {
    login_offcanvas.classList.add('open');
    overlay.classList.toggle("open");
});

cartoffCanvasOpen.addEventListener('click', () => {
    cart_offcanvas.classList.add('open');
    overlay.classList.toggle("open");
});

offCanvasClose.addEventListener('click', () => {
    login_offcanvas.classList.remove('open');
    overlay.classList.remove("open");
});
cartoffCanvasClose.addEventListener('click', () => {
    cart_offcanvas.classList.remove('open');
    overlay.classList.remove("open");
});




//--------- Product remove from cart when click on trash button-------
document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = button.closest('li'); // Find the parent <li> element
            cartItem.remove();
        });
    });
});




// -----------------This is for accordion toggeling-----------------------
document.addEventListener("DOMContentLoaded", function () {
    var accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            var accordionItem = this.parentElement;
            var accordionContent = accordionItem.querySelector(".accordion-content");
            accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
            header.classList.toggle("active"); // Toggle the "active" class
        });
    });
});




//------------------------This is for Section-7 Accordion---------------------
const accordion2 = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion2.length; i++) {
    accordion2[i].addEventListener('click', function () {
        this.classList.toggle('active')
    });
}




// this is for adding products to the wishlist thorught wishlist icon
const wishlistIcons = document.querySelectorAll(".wishlist-icon");

// Add event listeners to each wishlist icon
wishlistIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // Toggle the "filled" class
        icon.classList.toggle("filled");
    });
});

//********** */ This is for opening Search bar modal*****************
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search_bar");
    const searchMegamenu = document.getElementById("searchMegamenu");

    searchBar.addEventListener("click", function (event) {
        event.stopPropagation();
        searchMegamenu.style.display = "block";
    });

    document.addEventListener("click", function () {
        searchMegamenu.style.display = "none";
    });

    searchMegamenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});


//   *************this is for item counter****************
document.addEventListener("DOMContentLoaded", function () {
    const counterInputs = document.querySelectorAll(".counterInput");
    const minusButtons = document.querySelectorAll(".minus");
    const plusButtons = document.querySelectorAll(".plus");

    minusButtons.forEach((minus, index) => {
        minus.addEventListener("click", function () {
            const currentValue = parseInt(counterInputs[index].value);
            if (currentValue > 1) {
                counterInputs[index].value = currentValue - 1;
            }
        });
    });

    plusButtons.forEach((plus, index) => {
        plus.addEventListener("click", function () {
            const currentValue = parseInt(counterInputs[index].value);
            counterInputs[index].value = currentValue + 1;
        });
    });
});


// --------------------------Filter Price Range-----------------------
document.addEventListener('DOMContentLoaded', function () {
    var lowerSlider = document.querySelector('#lower');
    var upperSlider = document.querySelector('#upper');

    document.querySelector('#two').value = upperSlider.value;
    document.querySelector('#one').value = lowerSlider.value;

    var lowerVal = parseInt(lowerSlider.value);
    var upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);

        if (upperVal < lowerVal + 4) {
            lowerSlider.value = upperVal - 4;
            if (lowerVal == lowerSlider.min) {
                upperSlider.value = 4;
            }
        }
        document.querySelector('#two').value = this.value
    };

    lowerSlider.oninput = function () {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        if (lowerVal > upperVal - 4) {
            upperSlider.value = lowerVal + 4;
            if (upperVal == upperSlider.max) {
                lowerSlider.value = parseInt(upperSlider.max) - 4;
            }
        }
        document.querySelector('#one').value = this.value
    };
});
// --------------------------Filter Price Range----------------------- 



// -----------------This is for Sub Category toggeling Start-----------------------
const accordion3 = document.querySelectorAll(".hrline");
for (i = 0; i < accordion3.length; i++) {
    accordion3[i].addEventListener('click', function () {
        this.classList.toggle('active2')
    });
}



// -----------------This is for Age Verification Modal-----------
document.addEventListener('DOMContentLoaded', function () {
    const ageVerification = document.querySelector(".ageVerification");
    const overlaytwo = document.querySelector(".overlay2");
    const body = document.querySelector("body");
    const ageVerificationButton = document.querySelector(".ageVerification .arrow-btn-container");

    const ageVerifiedCookieName = "ageVerified";

    // Check if the age verification cookie is set
    if (!getCookie(ageVerifiedCookieName)) {
        // Show the age verification modal if the cookie is not set
        window.addEventListener("load", () => {
            setTimeout(() => {
                ageVerification.style.top = "50%";
                overlaytwo.classList.add("open");
                body.style.overflow = "hidden";
            }, 500);
        });
    }

    ageVerificationButton.addEventListener("click", () => {
        // Set the age verification cookie when the button is clicked
        setCookie(ageVerifiedCookieName, "true", 5); // Cookie expires in 5 days
        overlaytwo.classList.remove("open");
        body.style.overflow = "auto";
        ageVerification.style.top = "-50%";
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

// this is fro toggelable tab in Single Product Page
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
  
        tab.classList.add("active");
        tabContents[index].classList.add("active");
      });
    });
  });
  
  