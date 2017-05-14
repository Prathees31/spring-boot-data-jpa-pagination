var products={};
var productTypes={};
var showPerPage = 24;
var numberOfItems="";
var numberOfPages="";
var limit;
var	pageNum = 0;
var productType ="";
var sort= "";
var start= 0;
var end = 0;
console.log(start);


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
	console.log("is empty")
	console.log(showPerPage);
	var url;
	var urlOne;
	var limit;
	var sta="";
	limit = showPerPage;
	url ="?page="+pageNum+"&size="+limit+"&sort="+sort+"";
	urlOne ="page="+pageNum+"&size="+limit+"&sort="+sort+"";
	if(productType.length == 0 && start == 0 && end == 0){
		
		console.log("the type function working");
		$.ajax({
		    url: "http://localhost:8080/api/products"+url+""
		 }).then(function(data) {
			products=data;
			console.log(limit);
			//console.log(data);
			//console.log(data.content[0].title);
			numberOfItems =data.totalElements; //getting and declaring the total number of json data in a array
		    //console.log(numberOfItems);
		    numberOfPages = data.totalPages;//Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
		    //console.log(numberOfPages);
		    sta = 0;
		    goFun(sta,limit);
		    pagination();
		    showingResult();
		});
	}else if( (start != 0 && end !=0 && productType.length == 0) || (start != 0 && end != 0 && prdouctType.length != 0)){
		console.log("the price function working");
		
		$.ajax({
		    url: "http://localhost:8080/api/products/listbyprice?start="+start+"&end="+end+"&"+urlOne+""
		 }).then(function(data) {
			products=data;
			console.log(limit);
			//console.log(data);
			//console.log(data.content[0].title);
			numberOfItems =data.totalElements; //getting and declaring the total number of json data in a array
		    //console.log(numberOfItems);
		    numberOfPages = data.totalPages;//Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
		    //console.log(numberOfPages);
		    sta = 0;
		    goFun(sta,limit);
		    pagination();
		    showingResult();
		});
		} else {
		$.ajax({
		    url: "http://localhost:8080/api/products/"+productType+""+url+""
		 }).then(function(data) {
			products=data;
			console.log(limit);
			//console.log(data);
			//console.log(data.content[0].title);
			numberOfItems =data.totalElements; //getting and declaring the total number of json data in a array
		    //console.log(numberOfItems);
		    numberOfPages = data.totalPages;//Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
		    //console.log(numberOfPages);
		    sta = 0;
		    goFun(sta,limit);
		    pagination();
		    showingResult();
		});
	}
}
productsFunc();




function goFun(sta,limit) {
	console.log(products);
	console.log(products.content[0].title);
	console.log(products.first);
	if(products.numberOfElements < limit){
		for (var i =sta; i < products.numberOfElements; i++) {
		    
	    	var output = "<div class='col-md-4 col-sm-6 col-lg-3 col-xs-12 result'>" +
	                           "<div class='thumbnail product'>"+
	                                "<a href='#'>"+
	                                    "<img class='product-image'" + " " + "src='" + products.content[i].image + "'>"+
	                                "</a>"+
	                                 "<span class='sale-percentage'>"+
	                                  "<b>"+ products.content[i].salePer+"%"+"</b>"+
	                                "</span>"+
	                                "<img class='upcoming_image' src='http://www.textilebuzz.com/image/icons/upcoming.png' alt=''>"+
	                                "<div class='caption'>"+
	                                "<h3 class='product-caption'>"+ products.content[i].title +
	                                "<p class='product-model'>"+products.content[i].model+"</p>"+
	                                "<ul class='list-inline price'>"+
	                                "<li>"+
	                                "<p class='price-old'>"+"INR"+" "+products.content[i].priceOld+"</p"+
	                                "</li>"+
	                                "<li>"+
	                                "<p class='price-new'>"+"INR"+" "+products.content[i].priceNew+"</p"+
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
		
	} else {
	for (var i =sta; i < limit; i++) {
    
    	var output = "<div class='col-md-4 col-sm-6 col-lg-3 col-xs-12 result'>" +
                           "<div class='thumbnail product'>"+
                                "<a href='#'>"+
                                    "<img class='product-image'" + " " + "src='" + products.content[i].image + "'>"+
                                "</a>"+
                                 "<span class='sale-percentage'>"+
                                  "<b>"+ products.content[i].salePer+"%"+"</b>"+
                                "</span>"+
                                "<img class='upcoming_image' src='http://www.textilebuzz.com/image/icons/upcoming.png' alt=''>"+
                                "<div class='caption'>"+
                                "<h3 class='product-caption'>"+ products.content[i].title +
                                "<p class='product-model'>"+products.content[i].model+"</p>"+
                                "<ul class='list-inline price'>"+
                                "<li>"+
                                "<p class='price-old'>"+"INR"+" "+products.content[i].priceOld+"</p"+
                                "</li>"+
                                "<li>"+
                                "<p class='price-new'>"+"INR"+" "+products.content[i].priceNew+"</p"+
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
}
   function pagination() {
	 console.log(products.first);
	 $('#pagination').empty();
	 console.log('prathees');
	 var paginationHtml="";
	 var currentPage = products.number;
	 console.log(currentPage);
	 
 	  /*
 	      paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
            
             for(currentLink = 0; numberOfPages > currentLink; currentLink++){
             paginationHtml += '<li><a class="pageNumber"  href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
             console.log(currentLink.length);
             }
            paginationHtml += "<li class='lastPage'><a href='javascript:next();'>&gt;</a></li>";
           $('#pagination').html(paginationHtml);
           */
            
	 var paginationStart = currentPage;
	 if ( paginationStart > 4 ){
		 paginationStart = paginationStart - 4;
	 }else{
		 paginationStart = 0;
	 }
	 		
	 	if(products.first == true && products.last == false) {
	 		  
     	      for(var currentLink = paginationStart; (currentPage+5) > currentLink && currentLink < products.totalPages; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  value='+ currentLink+' href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
     	      }
     	      
     	    paginationHtml += "<li class='lastPage'><a href='javascript:next();'>&gt;</a></li>";
              
              $('#pagination').append(paginationHtml);
              $('#pagination .pageNumber:first').addClass('active');
        }else if(products.last == true && products.first == false){
        	console.log("last page");
     	   paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
                
                for(var currentLink = paginationStart; (currentPage+5) > currentLink && currentLink < products.totalPages; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  value = '+currentLink+' href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
               
                }
     	  
     	   $('#pagination').append(paginationHtml);
     	   $('#pagination .pageNumber:last').addClass('active');
        }else if(products.last == true && products.first == false && products.numberOfElements < showPerPage){
            //console.log("less products");
            //console.log(products.numberOfElements);
      	   paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
                 
                 for(var currentLink = paginationStart; (currentPage+5) > currentLink && currentLink < products.totalPages; currentLink++){
                 paginationHtml += '<li><a class="pageNumber"  value = '+currentLink+' href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
                
                 }
      	  
      	   $('#pagination').append(paginationHtml);
      	   $('#pagination .pageNumber:last').addClass('active');
         }else if(products.last == true && products.first == true){
        	for(var currentLink = paginationStart; (currentPage+5) > currentLink && currentLink < products.totalPages; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
               
                }
        	$('#pagination').append(paginationHtml);
            $('.pageNumber[longdesc=' + pageNum +']').addClass('active').siblings('a.pageNumber.active').removeClass('active');
        }else {
        
        	$('#pagination').empty();
     	      paginationHtml = "<li id='firstPage'><a href='javascript:previous();'>&lt;</a></li>"
                
                for(var currentLink = paginationStart; (currentPage+5) > currentLink && currentLink < products.totalPages; currentLink++){
                paginationHtml += '<li><a class="pageNumber"  href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">'+ (currentLink + 1) +'</a></li>';
               
                }
               paginationHtml += "<li class='lastPage'><a href='javascript:next();'>&gt;</a></li>";
              $('#pagination').append(paginationHtml);
              $('.pageNumber[longdesc=' + pageNum +']').addClass('active').siblings('a.pageNumber.active').removeClass('active');
        }
	 	
 }
 function showingResult(){
	 $('#showingResult').empty();
	 var showingResultHtml="";
	 var start= (products.number * products.size)+1;
	 var end = start+products.numberOfElements-1;
	 console.log(isNaN(products.size - products.numberOfElements));
	 /*if (products.size > products.numberOfElements){
		 end= ((products.number + 1) * products.size)-(products.size-products.numberOfElements);
		 
		
		 console.log("less than size");
		 
	 }else {
		end = (products.number + 1) * products.size;
	 }
	 */
	 showingResultHtml ='<p class="pull-right result-page">Showing '+start+' to '+end+' of '+products.totalElements+'</p>';
	 $('#showingResult').append(showingResultHtml);
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


$('#typeSelect').on('change', function () {
	var selectVal = $("#typeSelect option:selected").val();
	console.log(selectVal);
	productType = selectVal;
	pageNum= 0;
	if(productType == "all"){
		productType ="";
		$('#placeholder').empty();
	    productsFunc();
	}else{
		$('#placeholder').empty();
	    productsFunc();
	}
	
	
	 // body...
	 /*var kurti = $(products).filter(function(index) {
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

	 } */

	
	 
});
$('#sortSelect').on('change', function () {
	var selectVal = $("#sortSelect option:selected").val();
	console.log(selectVal);
	sort = selectVal;
	//$('#placeholder').empty();
	 //productsFunc();
	 if(selectVal == "default"){
			sort ="";
			$('#placeholder').empty();
		    productsFunc();
		}else{
			$('#placeholder').empty();
		    productsFunc();
		}
});
$('#selectId').on('change', function () {
     var selectVal = $("#selectId option:selected").val();
     console.log(selectVal);
     showPerPage=selectVal;
     pageNum=0;
     $('#placeholder').empty();
     productsFunc();
});

 function typeFun () {
	$.ajax({
	    url: "http://localhost:8080/api/products/listtype"
	 }).then(function(data) {
		productTypes=data;
		console.log(productTypes);
		for (var i = 0; i < productTypes.length; i++) {
			var typeOutput="<option value="+productTypes[i]+">"+productTypes[i]+"</option>";
			$('#typeSelect').append(typeOutput);
		}
		
	});
	
}
typeFun();

$('#inputFilter input').on('change', function() {
	   var selectVal=$('input[name="priceRange"]:checked', '#inputFilter').val();
	   if(selectVal == 1){
		   start = 250;
		   end   = 500;
		   $('#placeholder').empty();
		   productsFunc();
	   }else if(selectVal == 2){
		   start = 500;
		   end   = 750;
		   $('#placeholder').empty();
		   productsFunc();
	   }else if(selectVal == 3){
		   start = 750;
		   end   = 1000;
		   $('#placeholder').empty();
		   productsFunc();
	   }
});
