// ======================================================
// Utility Functions
// ======================================================

const get = (id) => document.getElementById(id);
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);


// ======================================================
// Mobile Navigation
// ======================================================

const menuIcon = get("menu-icon");
const closeIcon = get("close-icon");
const nav = get("nav");

if (menuIcon && closeIcon && nav) {
    menuIcon.addEventListener("click", () => {
        nav.classList.add("active");
    });

    closeIcon.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


// ======================================================
// Product Slideshow
// ======================================================

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    const slides = qsa(".mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
}

// Needed because HTML uses onclick=""
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;


// ======================================================
// Shopping Cart
// ======================================================

// Elements

const plusBtn = get("plus-icon");
const minusBtn = get("minus-icon");

const itemCount = qs(".item-count");

const addToCartBtn = qs(".btn-container .btn");

const cartIcon = qs(".cart-icon");
const cartContent = qs(".cart-content");

const cartCount = get("cart-count");

const cartItemsContainer = qs(".cart-items-container");

const checkoutBtn = qs(".cart-content .btn");


// Product

const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    image: "images/image-product-3.jpg"
};


// Cart State

let quantity = 0;


// ======================================================
// Quantity Controls
// ======================================================

plusBtn.addEventListener("click", () => {

    quantity++;

    itemCount.textContent = quantity;

});


minusBtn.addEventListener("click", () => {

    if (quantity > 0) {
        quantity--;
    }

    itemCount.textContent = quantity;

});


// ======================================================
// Add To Cart
// ======================================================

addToCartBtn.addEventListener("click", () => {

    displayCart();

});


// ======================================================
// Render Cart
// ======================================================

function displayCart() {

    cartCount.textContent = quantity;

    if (quantity === 0) {

        cartItemsContainer.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        checkoutBtn.style.display = "none";

        return;
    }

    const total = quantity * product.price;

    cartItemsContainer.innerHTML = `
        <div class="items">

            <img
                class="item-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-content-details">

                <p>${product.name}</p>

                <p>
                    $${product.price.toFixed(2)} × ${quantity}
                    <span>
                        <strong>$${total.toFixed(2)}</strong>
                    </span>
                </p>

            </div>

            <span>

                <img
                    src="images/icon-delete.svg"
                    alt="Delete item"
                    class="delete"
                    id="delete"

                >

            </span>

        </div>
    `;

    checkoutBtn.style.display = "block";
}


// ======================================================
// Delete Item
// ======================================================

document.addEventListener("click", (event) => {

    if (event.target.id === "delete") {

        quantity = 0;

        itemCount.textContent = quantity;

        displayCart();

    }

});


// ======================================================
// Cart Toggle
// ======================================================

cartIcon.addEventListener("click", (event) => {

    event.stopPropagation();

    cartContent.classList.toggle("active");

});


// Close when clicking outside

document.addEventListener("click", (event) => {

    if (
        !cartContent.contains(event.target) &&
        !cartIcon.contains(event.target)
    ) {

        cartContent.classList.remove("active");

    }

});


// ======================================================
// Window Width Debugger
// ======================================================

//const width = get("width");

//function updateWidth() {

   // if (!width) return;

   // width.textContent = `${window.innerWidth}px`;

   // width.classList.add("display-width");

   // clearTimeout(updateWidth.timeout);

   // updateWidth.timeout = setTimeout(() => {

   //     width.classList.remove("display-width");

  //  }, 1500);

//}

//window.addEventListener("resize", updateWidth);

//updateWidth();


// ======================================================
// Initialize
// ======================================================

displayCart();