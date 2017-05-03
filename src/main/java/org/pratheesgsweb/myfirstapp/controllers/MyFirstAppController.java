package org.pratheesgsweb.myfirstapp.controllers;
//import java.util.List;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

//import java.util.List;

import org.pratheesgsweb.myfirstapp.models.MyFirstAppModels;
import org.pratheesgsweb.myfirstapp.repositories.MyFirstAppRepository;

@RestController
@RequestMapping("/api/products")
public class MyFirstAppController {
	
	@Autowired
	MyFirstAppRepository productsRepository;
	
//	@RequestMapping(method=RequestMethod.GET)
//	public List<myfirstAppModels> getAllProducts() {
//		return productsRepository.findAll();
//	}
	@RequestMapping(method=RequestMethod.GET)
    public Page<MyFirstAppModels> productsPageable(Pageable pageable) {
		return productsRepository.findAll(pageable);

	}
	/*@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<myfirstAppModels> getproductsById(@PathVariable("id") int id) {
		myfirstAppModels products = productsRepository.findOne(id);
		if(products == null) {
			return new ResponseEntity<myfirstAppModels>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<myfirstAppModels>(products, HttpStatus.OK);
		}
	}*/
    @RequestMapping(value = "{type}", method=RequestMethod.GET)
    public Page<MyFirstAppModels> getProductsByType(@PathVariable("type") String type,Pageable pageable) {
    	return productsRepository.findBytype(type,pageable);
     
    }
	
	
	
	
}
