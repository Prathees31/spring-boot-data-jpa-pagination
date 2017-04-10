var data={"products":[
        {
            "name":"Ray",
            "model":"Villalobos",
            "price_old": "675",
            "price_new": "685",
            "sale_percentage":"1",
            "image"     : "http://images.textilebuzz.com/cache/cropimg/61572caf-c415-40bf-ab55-64ea6a6b7365-thumb-700x820.jpg"
        },
        {
           "name":"Ray",
            "model":"Villalobos",
            "price_old": "675",
            "price_new": "685",
            "sale_percentage":"2",
            "image"     : "http://images.textilebuzz.com/cache/cropimg/61572caf-c415-40bf-ab55-64ea6a6b7365-thumb-700x820.jpg"  
        },
        {
           "name":"Ray",
            "model":"Villalobos",
            "price_old": "675",
            "price_new": "685",
            "sale_percentage":"2",
            "image"     : "http://images.textilebuzz.com/cache/cropimg/61572caf-c415-40bf-ab55-64ea6a6b7365-thumb-700x820.jpg"  
        },
        {
           "name":"Ray",
            "model":"Villalobos",
            "price_old": "675",
            "price_new": "685",
            "sale_percentage":"2",
            "image"     : "http://images.textilebuzz.com/cache/cropimg/61572caf-c415-40bf-ab55-64ea6a6b7365-thumb-700x820.jpg"  
        }
        ]}

        $(data.products).each(function() {
    var output = "<div class='col-md-3'>" +
                           "<div class='thumbnail product'>"+
                                "<a href='#'>"+
                                    "<img" + " " + "src='" + this.image + "'>"+
                                "</a>"+
                                 "<span class='sale-percentage'>"+
                                  "<b>"+ this.sale_percentage+"%"+"</b>"+
                                "</span>"+
                                "<img class='upcoming_image' src='img/upcoming.png' alt=''>"+
                                "<div class='caption'>"+
                                "<h3 class='product-caption'>"+ this.name +
                                "<p class='product-model'>"+this.model+"</p>"+
                                "<ul class='list-inline price'>"+
                                "<li>"+
                                "<p class='price-old'>"+this.price_old+"</p"+
                                "</li>"+
                                "<li>"+
                                "<p class='price-new'>"+this.price_new+"</p"+
                                "</li>"+
                                "</ul>"+
                                "</div>"+
                                "<div class='product-cart'>"+
                                "<p class='text-center'>"+
                                "<a href='#' class='btn btn-default cart-button' role='button'>"+
                                "<i class='fa fa-shopping-cart cart-symbol' aria-hidden='true'>"+"</i>"+" "+" "+
                                "Add to Cart"+"</a>"+"</p>"+
                                "</div>"+
                                "</div>"+
                                "</div>";


                                                         ;
    $('#placeholder').append(output);
    });