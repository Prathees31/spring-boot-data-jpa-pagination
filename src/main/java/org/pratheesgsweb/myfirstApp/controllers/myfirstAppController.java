package org.pratheesgsweb.myfirstApp.controllers;
//import java.util.List;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.pratheesgsweb.myfirstApp.models.myfirstAppModels;
import org.pratheesgsweb.myfirstApp.repositories.myfirstAppRepository;

@RestController
@RequestMapping("/api/products")
public class myfirstAppController {
	
	@Autowired
	myfirstAppRepository productsRepository;
	
//	@RequestMapping(method=RequestMethod.GET)
//	public List<myfirstAppModels> getAllProducts() {
//		return productsRepository.findAll();
//	}
	@RequestMapping(method=RequestMethod.GET)
    public Page<myfirstAppModels> productsPageable(Pageable pageable) {
		return productsRepository.findAll(pageable);

	}
	@RequestMapping(value="{type}", method=RequestMethod.GET)
	public ResponseEntity<myfirstAppModels> getproductsById(@PathVariable("type") String type) {
		myfirstAppModels products = productsRepository.findOne(type);
		if(products == null) {
			return new ResponseEntity<myfirstAppModels>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<myfirstAppModels>(products, HttpStatus.OK);
		}
	}
	
	
	
	
}
