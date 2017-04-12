var products={};
var showPerPage ="24";
console.log(showPerPage);
var numberOfItems="";
var numberOfPages="";

var	pageNum= 0;
var sta="";
var limit="";
//old-method using staic json pagination method
/*$.get('http://localhost:8080/api/products', function(data) {
	  
	  products = data;
	  showPerPage = 24;
	  console.log(products);
	  numberOfItems = products.length; //getting and declaring the total number of json data in a array
      //console.log(numberOfItems);
      numberOfPages = Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
      //console.log(numberOfPages);
      limit = showPerPage;
      //console.log(limit);
      sta = 0;
      goFun(sta,limit);
      pagination();
});*/
function productsFunc () {
	$.ajax({
	    url: "http://localhost:8080/api/products?page="+pageNum+"&size="+showPerPage+""
	 }).then(function(data) {
		products=data;
		console.log(showPerPage);
		//console.log(data);
		//console.log(data.content[0].title);
		numberOfItems =data.totalElements; //getting and declaring the total number of json data in a array
	    //console.log(numberOfItems);
	    numberOfPages = data.totalPages;//Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
	    //console.log(numberOfPages);
	    limit = showPerPage;
	    console.log(limit);
	    sta =0;
	    goFun(sta,limit);
	    pagination();
	});
}
productsFunc();


function goFun(sta,limit) {
	console.log(products);
	console.log(products.content[0].title);
	console.log(products.first);
	for (var i =sta; i < limit; i++) {
    
    	var output = "<div class='col-md-4 col-sm-6 col-lg-3 col-xs-12 result'>" +
                           "<div class='thumbnail product'>"+
                                "<a href='#'>"+
                                    "<img class='product-image'" + " " + "src='" + products.content[i].image + "'>"+
                                "</a>"+
                                 "<span class='sale-percentage'>"+
                                  "<b>"+ products.content[i].sale_per+"%"+"</b>"+
                                "</span>"+
                                "<img class='upcoming_image' src='http://www.textilebuzz.com/image/icons/upcoming.png' alt=''>"+
                                "<div class='caption'>"+
                                "<h3 class='product-caption'>"+ products.content[i].title +
                                "<p class='product-model'>"+products.content[i].model+"</p>"+
                                "<ul class='list-inline price'>"+
                                "<li>"+
                                "<p class='price-old'>"+"INR"+" "+products.content[i].price_old+"</p"+
                                "</li>"+
                                "<li>"+
                                "<p class='price-new'>"+"INR"+" "+products.content[i].price_new+"</p"+
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
    
  }
}
   function pagination() {
	 console.log(products.first);
	 $('#pagination').empty();
	 console.log('prathees');
	 var paginationHtml="";
 	  /*
 	      paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
            
             for(currentLink = 0; numberOfPages > currentLink; currentLink++){
             paginationHtml += '<li><a class="pageNumber"  href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
             console.log(currentLink.length);
             }
            paginationHtml += "<li class='lastPage'><a href='javascript:next();'>&gt;</a></li>";
           $('#pagination').html(paginationHtml);
           */
            
	 		
	 	if(products.first == true && products.last == false) {
	 		  
     	      for(var currentLink = 0; numberOfPages > currentLink; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  value='+ currentLink+' href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
     	      }
     	      
     	    paginationHtml += "<li class='lastPage'><a href='javascript:next();'>&gt;</a></li>";
              
              $('#pagination').append(paginationHtml);
              $('#pagination .pageNumber:first').addClass('active');
        }else if(products.last == true && products.first == false){
        
     	   paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
                
                for(var currentLink = 0; numberOfPages > currentLink; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  value = '+currentLink+' href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
               
                }
     	  
     	   $('#pagination').append(paginationHtml);
     	   $('#pagination .pageNumber:last').addClass('active');
        }else {
        
        	$('#pagination').empty();
     	      paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
                
                for(var currentLink = 0; numberOfPages > currentLink; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
               
                }
               paginationHtml += "<li class='lastPage'><a href='javascript:next();'>&gt;</a></li>";
              $('#pagination').append(paginationHtml);
              $('.pageNumber[longdesc=' + pageNum +']').addClass('active').siblings('a.pageNumber.active').removeClass('active');
        }
	 	
 }

function next(){
    console.log(pageNum);
    pageNum += 1;
    $('#placeholder').empty();
    productsFunc();
	/*var next = limit;
	console.log(next);
	if(numberOfItems>=next) {
	limit = limit+showPerPage;
	console.log(limit);
	$('#placeholder').empty();
	goFun(next,limit);
	}*/
  }
  function previous() {
	    pageNum -= 1;
	    $('#placeholder').empty();
	    productsFunc();
	/*var pre = limit-(2*showPerPage);
	console.log(pre);
	if(pre>=0) {
	limit = limit-showPerPage;
	console.log(limit)
	$('#placeholder').empty();
	goFun(pre,limit); 
	}*/
  }
 function goToPage(pageNum) {
  	this.pageNum = pageNum;
  	sta = 0;
  	//var goToPage = limit;
  	//console.log(goToPage);
  	//startFrom = pageNum * limit;
  	//console.log(startFrom);
  	//endTo = startFrom + limit;
  	//console.log(endTo);
    //$('.pageNumber[longdesc=' + pageNum +']').css('display','none');
  	
    $('#placeholder').empty();
    productsFunc();
  } 


/*$('#typeSelect').on('change', function () {
	var selectVal = $("#typeSelect option:selected").val();
	console.log(selectVal);
	 // body...
	 var kurti = $(products).filter(function(index) {
	 	return products[index].type == selectVal;
	 });
	 console.log(kurti);
	 
	
	 numberOfItems = kurti.length;
	 numberOfPages = Math.ceil(numberOfItems/limit);
   	 limit = limit;
   	 $('#placeholder').empty();
   	 products = kurti;
   	 goFun(sta,limit);
   	 pagination();
   	 if (selectVal == "all") {
	
	 	numberOfItems = products.length;
	 	numberOfPages = Math.ceil(numberOfItems/limit);
   	 	limit = limit;
   	 	$('#placeholder').empty();
   	 	goFun(sta,limit);
   	 	pagination();

	 } 

	
	 
});*/
$('#selectId').on('change', function () {
     var selectVal = $("#selectId option:selected").val();
     console.log(selectVal);
     showperPage=selectVal;
     $('#placeholder').empty();
     productsFunc();
});

/*$('#inputFilter input[type=checkbox]').on(click,function() {


});*/