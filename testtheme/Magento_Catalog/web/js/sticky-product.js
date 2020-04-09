require([
    "jquery",
    'domReady!',
    'mage/translate'
], function($){

    let stickyBlock = $('#product-sticky'),
        productName = $('[itemprop="name"]').html(),
        addToCartBtn = $('#product-addtocart-button'),
        productImage = $('.gallery-placeholder__image').attr('src'),
        productPrice = $('.product-info-main .price').html();

    let blockBuild = {
        image: `<img src="${productImage}" alt="${productName}" />`,
        price: `<span class="sticky-product-price">${productPrice}</span>`,
        name: `<span class="sticky-product-name">${productName}</span>`,
        btn: `<button id="sticky-product-btn" class="action primary">${$.mage.__('Add to Cart')}</button>`,
        assignClick () {
            let stickyBtn = $('#sticky-product-btn');

            stickyBtn.click(function() {
                addToCartBtn.click();
            });
        },
        builder() {
            stickyBlock.wrapInner(`<div class="cms-text"></div>`)
            .append(`` + this.image + this.name + `<div class="sticky-right">`+ this.price + this.btn + `</div>`)
            .wrapInner(`<div class="container"></div>`);
            $('.cms-text').prependTo(".sticky-right");
            this.assignClick();
        }
    };

    blockBuild.builder();

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            stickyBlock.addClass('shown');
        }
        else {
            stickyBlock.removeClass('shown');
        }
    });
});
