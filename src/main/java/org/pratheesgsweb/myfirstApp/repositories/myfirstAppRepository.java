package org.pratheesgsweb.myfirstApp.repositories;
//import java.util.List;


//import java.util.List;

//import org.springframework.data.domain.Pageable;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
import org.pratheesgsweb.myfirstApp.models.myfirstAppModels;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface myfirstAppRepository extends JpaRepository<myfirstAppModels, String> {
	Page<myfirstAppModels> findBytype(String type,Pageable pageable);
	
}

