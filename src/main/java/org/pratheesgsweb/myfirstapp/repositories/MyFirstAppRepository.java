package org.pratheesgsweb.myfirstapp.repositories;
//import java.util.List;


import org.pratheesgsweb.myfirstapp.models.MyFirstAppModels;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyFirstAppRepository extends JpaRepository<MyFirstAppModels, String> {
	Page<MyFirstAppModels> findBytype(String type,Pageable pageable);
	
}

