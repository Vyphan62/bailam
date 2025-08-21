const itemlist = [
    {
        image: "/images/product-1.png",
        name: "Syltherine",
        type: "Stylish cafe chair",
        price: 2500000,
        disprice: 3500000,
        sale: -30,
    },
    {
        image: "/images/product-2.png",
        name: "Leviosa",
        type: "Stylish cafe chair",
        price: 2500000,
        disprice: "",
        sale: "",
    },
    {
        image: "/images/product-3.png",
        name: "Lolito",
        type: "Luxury big sofa",
        price: 7000000,
        disprice: 14000000,
        sale: -50,
    },
    {
        image: "/images/product-4.png",
        name: "Respira",
        type: "Outdoor bar table and stool",
        price: 500000,
        sale: "New",
    },
];

function renderProducts(containerId, products) {
    const src = document.getElementById(containerId);
    if (!src) return;

    products.forEach((x) => {
        let priceFormatted = x.price.toLocaleString("vi-VN");
        let dispriceFormatted = x.disprice
            ? x.disprice.toLocaleString("vi-VN")
            : "";

        let saleBadge = "";
        if (x.sale) {
            if (typeof x.sale === "string" && x.sale.trim().toLowerCase() === "new") {
                saleBadge = `<div class="bubble new"><h5>New</h5></div>`;
            } else if (!isNaN(x.sale)) {
                saleBadge = `<div class="bubble sale"><h5>${x.sale}%</h5></div>`;
            }
        }

        let dispriceHTML = dispriceFormatted
            ? `<h3 class="dis-price">Rb ${dispriceFormatted}</h3>`
            : "";

        src.innerHTML += `
        <div class="product-content">
            <div class="product-main">
                <div style="display: flex; flex-direction: column;">
                    <div style="position: relative">
                        <img class="image" src="${x.image}" alt="">
                        ${saleBadge}
                    </div>
                    <div class="content">
                        <h1 class="name">${x.name}</h1>
                        <h2 class="type">${x.type}</h2>
                        <div class="price">
                            <h3 class="real-price">Rb ${priceFormatted}</h3>
                            ${dispriceHTML}
                        </div>
                    </div>
                </div>
            </div>
            <div class="more-info">
                <a href="" class="addcart-btn">add to cart</a>
                <div class="more-info-bottom">
                    <a class="info-link" href="#"><img src="/images/Frame 11.png" alt=""></a>
                    <a class="info-link" href="#"><img src="/images/Frame 12.png" alt=""></a>
                    <a class="info-link" href="#"><img src="/images/Frame 10.png" alt=""></a>
                </div>
            </div>
        </div>`;
    });
}
let repeatedItems = [];
for (let i = 0; i < 4; i++) {
    repeatedItems = repeatedItems.concat(itemlist);
}
renderProducts("our-product-image", repeatedItems);


document.addEventListener("DOMContentLoaded", function () {
    renderProducts("our-product-image", itemlist);
});