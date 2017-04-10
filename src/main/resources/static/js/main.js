var products = [];
     var showPerPage ="";
     var numberOfItems="";
     var numberOfPages="";
     var sliceData= "";
     var paginationHtml="";
     var currentLink ="";
     var new_page ="";
     var start_from="";
     var end_on ="";


$( document ).ready(function() {
     
    $.getJSON('./products.json', function(data) {
        products = data;
        var output = "";
        /*showPerPage = 24;
        numberOfItems = products.length;
        console.log(numberOfItems);
        numberOfPages = Math.ceil(numberOfItems/showPerPage);
        console.log(numberOfPages);
          //$('#placeholder').hide(output);
        sliceData = products.slice(0, showPerPage);
          console.log(sliceData);
          //$('#placeholder').append(output); */
        //showPerPage = 24;  
        //sliceData = products.slice(0, showPerPage);
        
        $.each(products, function(index, value,key,val) {
            //console.log(index);
            //console.log(value.name);
            //console.log(data.length);
          
        output = "<div class='col-md-4 col-sm-6 col-lg-3 col-xs-12 result'>" +
                           "<div class='thumbnail product'>"+
                                "<a href='#'>"+
                                    "<img class='product-image'" + " " + "src='" + value.image + "'>"+
                                "</a>"+
                                 "<span class='sale-percentage'>"+
                                  "<b>"+ value.sale_percentage+"%"+"</b>"+
                                "</span>"+
                                "<img class='upcoming_image' src='http://www.textilebuzz.com/image/icons/upcoming.png' alt=''>"+
                                "<div class='caption'>"+
                                "<h3 class='product-caption'>"+ value.name +
                                "<p class='product-model'>"+value.model+"</p>"+
                                "<ul class='list-inline price'>"+
                                "<li>"+
                                "<p class='price-old'>"+"INR"+" "+value.price_old+"</p"+
                                "</li>"+
                                "<li>"+
                                "<p class='price-new'>"+"INR"+" "+value.price_new+"</p"+
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
          $('#placeholder').append(output);
});          
         /* if (index == 23 ) {
            return false;           //break the each loop
          } */
          /*$.each(data, function(key,val) {             
            console.log(val);
            console.log(val.name);
            console.log(val.price_old);         
          });*/
          
        /*  **using Html
        showPerPage = 24;
        numberOfItems = $('.result').length;
        console.log(numberOfItems);
        numberOfPages = Math.ceil(numberOfItems/showPerPage);
        console.log(numberOfPages);
        //$('#placeholder').hide(output);
        //$('#placeholder').append(output);
        $('#currentPage').val(0);
        $('#showPerPage').val(showPerPage);
        paginationHtml = "<li><a class='previousLink' href='javascript:previous();'>&lt;</a></li>"
        currentLink = 0;
        while(numberOfPages > currentLink){
        paginationHtml += '<li><a class="pageLink" href="javascript:go_to_page(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
        currentLink++;
    }
    paginationHtml += '<li><a class="nextLink" href="javascript:next();">&gt;</a></li>';
    $('#pagination').html(paginationHtml);
    $('#pagination .pageLink:first').addClass('activePage');
    $('.result').css('display', 'none');
    $('.result').slice(0, showPerPage).css('display', 'block'); */

            //Pagination Using Json Data Start
             showPerPage = 24; //declaring the total content to view
             numberOfItems = products.length; //getting and declaring the total number of json data in a array
             console.log(numberOfItems);
             numberOfPages = Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
             console.log(numberOfPages);
             $('#currentPage').val(0);
             $('#showPerPage').val(showPerPage);
             paginationHtml = "<li><a class='previousLink' href='javascript:previous();'>&lt;</a></li>"
             currentLink = 0;
             while(numberOfPages > currentLink){
             paginationHtml += '<li><a class="pageLink" href="javascript:go_to_page(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
             currentLink++;
             console.log(currentLink);
            }
            paginationHtml += '<li><a class="nextLink" href="javascript:next();">&gt;</a></li>';
            $('#pagination').html(paginationHtml);
            products.slice(0, showPerPage);
            
//console.log(result);
var output2 = "<p class='pull-right result-page'>"+"showing "+numberOfItems+" of" + " "+data.length;
$('#showingResult').append(output2);       
});
});

function previous(){

    new_page = parseInt($('#currentPage').val()) - 1;
    //if there is an item before the current active link run the function
    if($('.activePage').prev('.pageLink').length==true){
        go_to_page(new_page);
    }
    }
   
  function next(){
    new_page = parseInt($('#currentPage').val()) + 1;
    //if there is an item after the current active link run the function
    if($('.activePage').next('.pageink').length==true){
        go_to_page(new_page);
    }
   }
    

   function go_to_page(page_num){

    var show_per_page = parseInt($('#showPerPage').val());


    start_from = page_num * show_per_page;

     console.log(start_from);

    
    end_on = start_from + show_per_page;

    console.log(end_on);


    $('.result').css('display', 'none').slice(start_from, end_on).css('display', 'block');

    
    $('.pageLink[longdesc=' + page_num +']').addClass('activePage').siblings('.activePage').removeClass('activePage');

    //update the current page input field
    $('.result').val(page_num);
    console.log(page_num);
}

